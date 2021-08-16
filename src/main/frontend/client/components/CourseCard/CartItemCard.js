import React from "react";
import { Link } from "react-router-dom";

const CartItemCard = (props) => {
  console.log(props)
  const {
    id,
    user,
    course,
    quantity
    // link,
  } = props;

  return (
      <>
        {/*<Link to={link} className="card">*/}
          <div className="card__course-content">
            <h3 className="card__course-title">{user.fullName}</h3>
            <div className="card__course-description">{course.name}</div>
            <div className="card__course-instructor">{quantity}</div>
            <div className="card__course-instructor">{course.price}</div>
          </div>


          {/*<div className="button card__course-button"><i className="fas fa-plus"></i></div>*/}
        {/*</Link>*/}
      </>
  );
};

export default CartItemCard;