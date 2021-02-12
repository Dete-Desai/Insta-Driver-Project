import React from 'react';

const SearchMember = () => {
  return (
    <div className="search-wrap">
      <div className="search">
        <button style={{height:"40px"}} type="submit" className="searchButton">
          <i className="fa fa-search" style={{ marginLeft: 10 }} />
        </button>
        <input type="text" className="search-group" placeholder="Add Drivers Or Groups To This Video call" />
      </div>
    </div>
  );
};

export default SearchMember;