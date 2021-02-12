import React from "react";

const DriverExperience = (props) => {
  const { vehicle, category, workTo, workFrom } = props.driverData;

  // console.log(experienceByDate);

  const getYear = (to, from) => {
    let t = Math.abs(new Date(from).getFullYear() - new Date(to).getFullYear());
    if (t == 1) {
      return `${t} year`;
    }
    return `${t} years`;
  };

  const getMonths = (to, from) => {
    let t = Math.abs(new Date(from).getMonth() - new Date(to).getMonth());
    if (t == 1) {
      return `${t} month`;
    }
    return `${t} months`;
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <p style={{ color: "#5B5B5B" }}>
          As a <span>{category}</span>, this driver drove a
          <span className="font-weight-bold mx-2">{vehicle}</span> for{" "}
          <span className="font-weight-bold mx-2">
            {getYear(workTo, workFrom)[0] !== "0"
              ? getYear(workTo, workFrom) + " and "
              : null}{" "}
            {getMonths(workTo, workFrom)[0] !== "0"
              ? getMonths(workTo, workFrom)
              : null}
            .
          </span>
          All this experience was in{" "}
          <span className="font-weight-bold mx-2">
            {new Date(workFrom).getFullYear() +
              " to " +
              new Date(workTo).getFullYear()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DriverExperience;
