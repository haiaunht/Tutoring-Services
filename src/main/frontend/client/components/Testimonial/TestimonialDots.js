import React from "react";

const TestimonialDots = ({ active, handleClick }) => {
  const testimonialDot = {
    height: ".8rem",
    width: active ? "2.4rem" : ".8rem",
    margin: ".25rem",
    borderRadius: ".8rem",
    cursor: "pointer",
    padding: "0",
    background: active
      ? "hsla(var(--hue-color), 24%, 35%, .7)"
      : "hsla(var(--hue-color), 24%, 35%, .4)",
    transition: "0.5s width ease",
  };

  return (
    <span
      className="button"
      style={testimonialDot}
      onClick={handleClick}
    ></span>
  );
};

export default TestimonialDots;
