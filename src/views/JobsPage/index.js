import React from "react";
import Jobs from "../../components/Job/Jobs";

const JobsPage = (props) => {
  const cardsType = props.match.params.cardsType;
  return (
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center">
        <Jobs cardsType={cardsType} />
      </div>
    </div>
  );
};

export default JobsPage;
