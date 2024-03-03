import React, { useState } from "react";
import styles from "./style.module.scss";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setPageCallback: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  setPageCallback,
}: PaginationProps) => {
  const [page, setPage] = useState(currentPage);

  const renderPageOptions = () => {
    const options = [];
    for (let page = 1; page <= totalPages; page++) {
      options.push(<option value={page}>{page}</option>);
    }
    return options;
  };

  const handlePageSelect = (selectedPage?: string) => {
    const convertedPage = parseInt(selectedPage ?? "1");
    setPage(convertedPage);
    setPageCallback(convertedPage);
  };

  return (
    <div className={styles.container}>
      {currentPage} of {totalPages}
      <div className={styles.selector}>
        <select
          onChange={(e) => handlePageSelect(e.target.value)}
          value={page}
          defaultValue={currentPage}
        >
          {renderPageOptions()}
        </select>
      </div>
    </div>
  );
};
