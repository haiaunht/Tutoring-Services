import React from "react";

const SkeletonElement = ({ type }) => {
  const skeletonClasses = `skeleton ${type}`;

  return <div className={skeletonClasses}></div>;
};

export default SkeletonElement;
