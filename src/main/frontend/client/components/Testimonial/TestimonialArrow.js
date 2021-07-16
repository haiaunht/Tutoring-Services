import React from "react";

const TestimonialArrow = (props) => {
  const { direction, handleClick } = props;

  const testimonialArrow = {
    borderRadius: "50%",
    marginRight: `${direction === "left" ? "var(--mb-2)" : "0px"}`,
    border: "none",
  };

  return (
    <button
      type="button"
      className="button"
      style={testimonialArrow}
      onClick={handleClick}
    >
      <i
        className={`fas fa-arrow-${direction === "left" ? "left" : "right"}`}
      ></i>
    </button>
  );
};

export default TestimonialArrow;
