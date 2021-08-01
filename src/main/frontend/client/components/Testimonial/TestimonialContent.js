import React from "react";

const TestimonialContent = ({ testimonial, width }) => {
  const { name, description, imageUrl, job } = testimonial;

  const testimonialSlider = {
    width:
      width >= 1024
        ? "1024px"
        : width >= 968
        ? "968px"
        : `calc(${width}px - 32px)`,
  };

  return (
    <>
      <div style={testimonialSlider}>
        <div style={testimonialImageWrapperStyle}>
          <img src={imageUrl} style={testimonialImageStyle} />
          <div style={outerImageCirclesStyle}></div>
          <div style={innerImageCirclesStyle}></div>
        </div>
        <div style={testimonialBodyWrapperStyle}>
          <div
            style={{
              marginBottom: "var(--mb-2)",
            }}
          >
            <p
              style={{ color: "var(--text-color-light)", marginBottom: "1rem" }}
            >
              {description}
            </p>
            <h3 style={{ color: "var(--text-color)" }}>
              {name} - {job}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

const testimonialImageWrapperStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4rem",
  },
  testimonialImageStyle = {
    width: "180px",
    borderRadius: "50%",
  },
  innerImageCirclesStyle = {
    position: "absolute",
    width: "215px",
    height: "215px",
    borderRadius: "50%",
    border: "solid 2px hsla(var(--hue-color), 64%, 22%, .25)",
    borderBottom: "solid 2px transparent",
    animation: "spin 12s infinite linear",
  },
  outerImageCirclesStyle = {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    border: "solid 2px hsla(var(--hue-color), 64%, 22%, .25)",
    borderTop: "solid 2px transparent",
    animation: "spin 12s infinite linear",
  },
  testimonialBodyWrapperStyle = {
    width: "60%",
    margin: "auto",
  };

export default TestimonialContent;
