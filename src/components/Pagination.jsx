import React from "react";

import "./Pagination.scss"

function Pagination({ postPerPage, totalPosts, pagiNate }) {
  // debugger;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  
  console.log(`pagenumbers+${pageNumbers}`)
  console.log(pageNumbers)

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map(item => (
          <li key={item} className="page-item">
            <a href="#" onClick={() => pagiNate(item)} className="page-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
