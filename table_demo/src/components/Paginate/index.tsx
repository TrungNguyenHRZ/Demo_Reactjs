import React, { useState } from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
      <div>Current Page: {currentPage}</div>
    </div>
  );
};

export default Pagination;
