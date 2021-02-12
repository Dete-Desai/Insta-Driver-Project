import React from "react";

const NextPageButtons = () => {
  return (
    <div className="d-flex justify-content-center">
      <ul className="pagination mt-4">
        <div>
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="/"
                rel="prev"
                aria-label="Previous"
              >
                ‹
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/" rel="next" aria-label="Next">
                ›
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default NextPageButtons;
