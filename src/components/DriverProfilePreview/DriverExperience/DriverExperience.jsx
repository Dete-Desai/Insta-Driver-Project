import React from 'react';


const DriverExperience = (props) => {
  const {vehicle, category, experienceByDate, experienceByYear} = props.driverData
  
  return (
    <div className="row">
      <div className="col-md-12">
        <p style={{ color: "#5B5B5B" }}>As a <span>{category}</span>, this driver drove a <span className="font-weight-bold">{vehicle}</span> for <span className="font-weight-bold">{experienceByDate}</span> All this experience was in <span className="font-weight-bold">{experienceByYear}</span></p>
      </div>
    </div>
  );
};

export default DriverExperience;