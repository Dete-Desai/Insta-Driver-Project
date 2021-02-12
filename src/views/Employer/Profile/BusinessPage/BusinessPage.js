import React from "react";
import BusinessPage from "../../../../components/Employer/Profile/BusinessPage";

const BusinessPageView = (props) => {
  const handle = props.match.params.handle;
  return <BusinessPage handle={handle} />;
};

export default BusinessPageView;
