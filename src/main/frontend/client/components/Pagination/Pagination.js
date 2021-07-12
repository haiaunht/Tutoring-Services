import React from "react";

import LeftPagination from "./LeftPagination";
import MiddlePagination from "./MiddlePagination";
import RightPagination from "./RightPagination";

const Pagination = (props) => {
  const pagination = (
    <ul>
      <LeftPagination {...props} />
      <MiddlePagination {...props} />
      <RightPagination {...props} />
    </ul>
  );

  return <>{pagination}</>;
};

export default Pagination;
