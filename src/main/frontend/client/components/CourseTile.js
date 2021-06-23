import React from "react";

const CourseTile = props => {
  return (
      <div  className="categoryDiv">
        <div>
          <div className="category-img">
            <img src={props.image} />
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