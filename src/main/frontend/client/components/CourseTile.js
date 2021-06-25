import React from "react";
import {Link} from "react-router-dom";

const CourseTile = props => {
  return (
      <div  >
        <div className="categoryDiv">
          <div className="category-img">
            <Link to={`/courses/${props.name}`} >
              <img src={props.image} />
            </Link>
          </div>
        </div>
        <div>
          <h2>{props.name}</h2>
          <h3>{props.description}</h3>
        </div>
      </div>
  )
}

export default CourseTile