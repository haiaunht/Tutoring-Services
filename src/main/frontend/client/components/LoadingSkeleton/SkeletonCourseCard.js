import React from "react";

import SkeletonElement from "./SkeletonElement";

const SkeletonCourseCard = () => {
  return (
    <div className="card">
      <SkeletonElement type="card__course-image-wrapper image" />
      <div className="card__course-content">
        <SkeletonElement type="title card__course-title" />
        <SkeletonElement type="text card__course-row" />
        <SkeletonElement type="price card__course-price" />
      </div>
      <SkeletonElement type="button card__course-button" />
    </div>
  );
};

export default SkeletonCourseCard;
