import React from "react";

const LeftPagination = (props) => {
  const { currentPage, totalPages, changePage } = props;

  const previousButton = (
    <li
      className="pagination__button-prev"
      onClick={() => {
        changePage((currentPage) => currentPage - 1);
      }}
    >
      <i className="fas fa-angle-left"></i>{" "}
      <span className="pagination__button-prev-word">Prev</span>
    </li>
  );

  const firstPage = (
    <li
      className="pagination__page-number"
      onClick={() => {
        changePage(1);
      }}
    >
      1
    </li>
  );

  const previousPaginationDots = (
    <li
      className="pagination__page-dots"
      onClick={() => {
        changePage((currentPage) => currentPage - 2);
      }}
    >
      ...
    </li>
  );

  const leftPagination =
    currentPage > 3 ? (
      <>
        {previousButton}
        {firstPage}
        {previousPaginationDots}
      </>
    ) : currentPage > 2 ? (
      <>
        {previousButton}
        {firstPage}
      </>
    ) : currentPage > 1 ? (
      <>{previousButton}</>
    ) : (
      ""
    );

  return <>{leftPagination}</>;
};

export default LeftPagination;
