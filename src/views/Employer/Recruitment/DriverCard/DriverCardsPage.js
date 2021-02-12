import React from "react";
import PropTypes from "prop-types";
import DriverCards from "../../../../components/Employer/Recruitment/DriverCard/DriverCards";

const DriverCardsPage = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <DriverCards id={id} />
    </div>
  );
};

DriverCardsPage.propTypes = {};

export default DriverCardsPage;
