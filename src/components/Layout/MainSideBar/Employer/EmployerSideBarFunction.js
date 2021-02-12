import React from "react";
import EmployerSideBar from "./EmployerSideBar";
// import EmployerSideBar from "./NewSidebar";
import { useSelector } from "react-redux";
import DriverSideBarFunction from "../Driver/DriverSideBarFunction";

const EmployerSideBarFunction = () => {
  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  return (
    <div>
      {credentials && credentials.role === "DRIVER" && (
        <DriverSideBarFunction />
      )}
      {credentials && credentials.role === "EMPLOYER" && <EmployerSideBar />}
    </div>
  );
};

export default EmployerSideBarFunction;
