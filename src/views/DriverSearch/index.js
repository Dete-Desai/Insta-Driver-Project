import React from "react";
import DriverSearchResultPage from "./DriverSearchResultPage";
import DriverSearchPage from "./DriverSearchPage"


const SearchDriver = (props) => {
  const Keyword = props.match.params.Keyword;
  console.log("keyword ------------ ", props);
  
  
  return (
    <>
      {Keyword ? (
        <DriverSearchResultPage keyword={Keyword} />
      ) : (
          <DriverSearchPage />
        )}
    </>
  );
};
export default SearchDriver;
