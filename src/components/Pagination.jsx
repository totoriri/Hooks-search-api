import React from "react";

function Pagination({ postPerPage, totalPosts, pagiNate }) {
  debugger;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(item => (
          <li key={item} className="page-item">
            <a onClick={() => pagiNate(item)} className="page-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
