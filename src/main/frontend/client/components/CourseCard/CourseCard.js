import React from "react";
import { Link } from "react-router-dom";

import Rating from "./Rating";

const CourseCard = (props) => {
  const {
    id,
    description,
    name,
    imgUrl,
    price,
    instructor,
    rating,
    link,
  } = props;

  const ratingNumber = rating ? rating.toFixed(1) : "";
  const stars = rating ? <Rating rating={rating} key={props.count} /> : "";
  const reviews = rating ? "(1000)" : "";
  const priceTag = price ? `$${price}` : "";
  const icon = rating ? (
    <i className="fas fa-shopping-cart"></i>
  ) : (
    <i className="fas fa-plus"></i>
  );

  return (
    <>
      <Link to={link} className="card">
        <div className="card__course-image-wrapper">
          <img src={imgUrl} alt={name} className="card__course-img" />
        </div>
        <div className="card__course-content">
          <h3 className="card__course-title">{name}</h3>
          <div className="card__course-description">{description}</div>
          <div className="card__course-instructor">{instructor}</div>
          <div className="card__course-row">
            <span className="card__course-star-rating-wrapper">
              <span className="card__course-star-rating-number">
                {ratingNumber}
              </span>
              <div className="card__course-star-rating">{stars}</div>
            </span>
            <span
              aria-label="1000 reviews"
              className="card__course-card-reviews-number"
            >
              {reviews}
            </span>
          </div>
          <div className="card__course-price">{priceTag}</div>
        </div>
        <div className="button card__course-button">{icon}</div>
      </Link>
    </>
  );
};

export default CourseCard;
