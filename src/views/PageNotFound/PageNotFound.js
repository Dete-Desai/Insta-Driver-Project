import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "40vh",
          maxWidth: "400px",
          width: "100%",
          border: "1px solid gray",
          background: "#fff",
          borderRadius: "1rem",
          flexDirection: "column",
        }}
      >
        <div style={{ backgroundColor: "#ffbb00" }}>Page Not Found</div>
        <Link to="/">Return Home</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
