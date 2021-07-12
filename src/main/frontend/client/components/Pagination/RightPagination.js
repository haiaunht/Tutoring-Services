import React from "react";

const RightPagination = (props) => {
  const { currentPage, totalPages, changePage } = props;

  const nextButton = (
    <li
      className="pagination__button-next"
      onClick={() => {
        changePage((currentPage) => currentPage + 1);
      }}
    >
      <span className="pagination__button-next-word">Next</span>{" "}
      <i className="fas fa-angle-right"></i>
    </li>
  );

  const lastPage = (
    <li
      className="pagination__page-number"
      onClick={() => {
        changePage(totalPages);
      }}
    >
      {totalPages}
    </li>
  );

  const nextPaginationDots = (
    <li
      className="pagination__page-dots"
      onClick={() => {
        changePage((currentPage) => currentPage + 2);
      }}
    >
      ...
    </li>
  );

  const rightPagination =
    currentPage < totalPages - 2 ? (
      <>
        {nextPaginationDots}
        {lastPage}
        {nextButton}
      </>
    ) : currentPage < totalPages - 1 ? (
      <>
        {lastPage}
        {nextButton}
      </>
    ) : currentPage < totalPages ? (
      <>{nextButton}</>
    ) : (
      ""
    );

  return <>{rightPagination}</>;
};

export default RightPagination;
