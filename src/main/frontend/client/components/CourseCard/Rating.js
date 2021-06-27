import React from "react";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; ++i) {
    if (i < Math.round(rating)) {
      stars.push(true);
    } else {
      stars.push(false);
    }
  }

  const getStars = stars.map((star, index) => {
    if (star == true) {
      return <i key={index} className="fas fa-star"></i>;
    } else {
      return <i key={index} className="far fa-star"></i>;
    }
  });

  return <>{getStars}</>;
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
