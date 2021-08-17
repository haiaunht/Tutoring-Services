import React from "react";
import { Link } from "react-router-dom";

const CartItemCard = (props) => {
  const {
    id,
    user,
    course,
    quantity
    // link,
  } = props;

  const removeCourse = event => {
    event.preventDefault()
    console.log("cart item: " + props.id)
    props.remove(props.id)
  }

  return (
      <>
        {/*<Link to={link} className="card">*/}
          <div className="display-flex">
            {/*<h3 className="card__course-title col-sm-3">{user.fullName}</h3>*/}
            <div id="leftbox">{course.name}</div>
            <div id="middlebox">{quantity}</div>
            <div id="rightbox">{course.price}</div>
            <button onClick={removeCourse}>Remove</button>
          </div>


          {/*<div className="button card__course-button"><i className="fas fa-plus"></i></div>*/}
        {/*</Link>*/}
      </>
  );
};

export default CartItemCard;