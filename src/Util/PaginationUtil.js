import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";

const PaginationBasic = ({ pageCount, setItemsRange }) => {
  const [activePage, setActivePage] = useState(0);

  const handleOnclick = (i) => {
    setItemsRange(i + 1);
    setActivePage(i);
  };

  useEffect(() => {
    setItemsRange(1);
    setActivePage(0);
  }, [pageCount]);

  const setPaginationItems = () => {
    let items = [];
    for (let i = 0; i < pageCount; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={activePage === i}
          onClick={() => handleOnclick(i)}
        >
          {i + 1}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <Pagination className="justify-content-center">
      {/* <Pagination.First /> */}
      <Pagination.Prev />
      {setPaginationItems()}
      {/* <Pagination.Ellipsis /> */}
      <Pagination.Next />
      {/* <Pagination.Last /> */}
    </Pagination>
  );
};

export default PaginationBasic;
