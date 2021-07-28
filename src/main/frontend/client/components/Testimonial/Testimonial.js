import React, { useState, useEffect, useRef } from "react";
import TestimonialContent from "./TestimonialContent";
import TestimonialArrow from "./TestimonialArrow";
import TestimonialDots from "./TestimonialDots";
import { getData } from "../../utils/FetchData/HelperFunctions";

const Testimonial = ({ autoPlay, setAutoPlay }) => {
  const [testimonialContentStyle, setTestimonialContentStyle] = useState({
      translate: 0,
      transition: 0.5,
    }),
    [currentTestimonial, setCurrentTestimonial] = useState(0),
    [testimonials, setTestimonials] = useState([]),
    [width, setWidth] = useState(window.innerWidth);

  const { translate, transition } = testimonialContentStyle;

  const testimonialWrapperStyle = {
      textAlign: "center",
      marginTop: "var(--mb-3)",
      overflow: "hidden",
    },
    testimonialContentWrapperStyle = {
      transform: `translateX(-${translate}px)`,
      transition: `transform ease-out ${transition}s`,
      display: "flex",
      paddingTop: "var(--mb-3)",
      width:
        width >= 1024
          ? `calc(1024px * ${testimonials.length})`
          : width >= 968
          ? `calc(968px * ${testimonials.length})`
          : `${(width - 32) * testimonials.length}px`,
    },
    testimonialIndicatorWrapperStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

  const getTestimonials = async () => {
    const data = await getData(`/api/v1/testimonials`);
    setTestimonials(data);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextTestimonial;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    if (autoPlay) {
      const interval = setInterval(play, autoPlay * 1000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  const nextTestimonial = () => {
    setAutoPlay(null);
    setTimeout(() => setAutoPlay(3), 3000);
    if (currentTestimonial === testimonials.length - 1) {
      setTestimonialContentStyle({
        ...testimonialContentStyle,
        translate: 0,
      });
      return setCurrentTestimonial(0);
    }

    setTestimonialContentStyle({
      ...testimonialContentStyle,
      translate:
        (currentTestimonial + 1) *
        (width >= 1024 ? 1024 : width >= 968 ? 968 : width - 32),
    });
    setCurrentTestimonial((currentTestimonial) => currentTestimonial + 1);
  };

  const prevTestimonial = () => {
    setAutoPlay(null);
    setTimeout(() => setAutoPlay(3), 3000);
    if (currentTestimonial === 0) {
      setTestimonialContentStyle({
        ...testimonialContentStyle,
        translate:
          (testimonials.length - 1) *
          (width >= 1024 ? 1024 : width >= 968 ? 968 : width - 32),
      });
      return setCurrentTestimonial(testimonials.length - 1);
    }
    setTestimonialContentStyle({
      ...testimonialContentStyle,
      translate:
        (currentTestimonial - 1) *
        (width >= 1024 ? 1024 : width >= 968 ? 968 : width - 32),
    });
    setCurrentTestimonial((currentTestimonial) => currentTestimonial - 1);
  };

  const testimonialsList = testimonials.map((testimonial) => {
    return (
      <TestimonialContent
        key={testimonial.id}
        testimonial={testimonial}
        width={width}
      />
    );
  });

  const testimonialIndicatorList = testimonials.map((testimonial, index) => {
    return (
      <TestimonialDots
        key={index}
        active={currentTestimonial === index}
        handleClick={() => {
          setAutoPlay(null);
          setTimeout(() => setAutoPlay(3), 3000);
          setCurrentTestimonial(testimonial.id - 1);
          setTestimonialContentStyle({
            ...testimonialContentStyle,
            translate:
              (testimonial.id - 1) *
              (width >= 1024 ? 1024 : width >= 968 ? 968 : width - 32),
          });
        }}
      />
    );
  });

  return (
    <>
      <section className="section container" id="testimonial">
        <span className="section-subtitle">Testimonial</span>
        <h2 className="section-title">What our students say</h2>
        <div style={testimonialWrapperStyle}>
          <div style={testimonialContentWrapperStyle}>{testimonialsList}</div>
          <div style={testimonialIndicatorWrapperStyle}>
            {testimonialIndicatorList}
          </div>
          <div style={{ color: "var(--text-color)", padding: "var(--mb-2) 0" }}>
            <TestimonialArrow direction="left" handleClick={prevTestimonial} />
            <TestimonialArrow direction="right" handleClick={nextTestimonial} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
