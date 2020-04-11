import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

class Pagination extends Component {
  render() {
    const { movieCount, pageSize, currentPage, onPageChange } = this.props;
    const pagesCount = Math.ceil(movieCount / pageSize);
    if (pagesCount === 1) return null; //if only one page... no pagination controller
    const pages = _.range(1, pagesCount + 1);
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  movieCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
