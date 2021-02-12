import React from "react";
import ProfileEmployerView from "../../../../components/ProfileEmployerView/ProfileEmployerView/ProfileEmployerView";

const EmployerView = (props) => {
  const id = props.match.params.id;

  return (
    <div>
      <ProfileEmployerView id={id} />
    </div>
  );
};

export default EmployerView;
