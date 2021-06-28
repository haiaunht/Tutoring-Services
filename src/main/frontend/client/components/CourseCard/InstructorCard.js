import React from "react";
import { Link } from "react-router-dom";

const InstructorCard = (props) => {
  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    role,
    link,
  } = props;

  return (
    <>
      <Link to={link} className="card">
        <div className="card__course-content">
          <h3 className="card__course-title">{firstName} {lastName}</h3>
          <div className="card__course-description">{email}</div>
          <div className="card__course-instructor">{phone}</div>
          <div className="card__course-row">More detail</div>
        </div>
        <div className="button card__course-button"><i className="fas fa-plus"></i></div>
      </Link>
    </>
  );
};

export default InstructorCard;
