import React from "react";

const DriverExperience = ({ experience }) => {
  const { vehicle, category, workFrom, workTo } = experience;

  return (
    <div className="row">
      <div className="col-md-12">
        <p style={{ color: "#5B5B5B" }}>
          As a{" "}
          {category ? (
            <span>{category}</span>
          ) : (
            <span className="text-warning">Category Not Added</span>
          )}
          , this driver drove a{" "}
          <span className="font-weight-bold"> {vehicle}</span> from{" "}
          <span className="font-weight-bold">
            {new Date(workFrom).toDateString()}
          </span>{" "}
          All this experience was upto{" "}
          <span className="font-weight-bold">
            {new Date(workTo).toDateString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DriverExperience;
