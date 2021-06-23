import React from "react";
import {Link} from "react-router-dom";

const CategoryTile = props => {
  return (
      <div className="categoryDiv">
        <div>
          <div className="category-img">
            <Link to={`/${props.categoryName}/courses`}>
              <img src={props.img} />
            </Link>
          </div>
        </div>

        <div>
          <h2>{props.categoryName}</h2>
          <h3>{props.categoryDes}</h3>
        </div>
      </div>
  )
}

export default CategoryTile