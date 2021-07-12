import React from "react";

const MiddlePagination = (props) => {
  const { currentPage, totalPages, changePage } = props;
  const middlePagination = (
    <>
      {[...Array(3)].map((_, index) => (
        <li
          key={currentPage - 1 + index}
          onClick={() => changePage(currentPage - 1 + index)}
          className={
            index === 1
              ? "pagination__page-number active"
              : currentPage + index <= 3 || currentPage + index >= totalPages
              ? "pagination__page-number"
              : "pagination__page-number mobile"
          }
          style={
            currentPage - 1 + index > totalPages
              ? { display: "none" }
              : currentPage + index < 2
              ? { display: "none" }
              : null
          }
        >
          {currentPage - 1 + index}
        </li>
      ))}
    </>
  );
  return <>{middlePagination}</>;
};

export default MiddlePagination;
