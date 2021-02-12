import React from "react";
import phone from "../../../dist/icons/phone.png";
import {
  RoundedStyledPhoto,
  StyledPhotoView1,
} from "../../Employer/Profile/Photos/AvailablePhotos/PhotoStyled";

const ProfilePhoto = (props) => {
  return (
    <div className="profilePhoto">
      <div className="photo__info row">
        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
          <div className="mb-2 text-center">
            {/* <img
              src={props.data && props.data.images[0]}
              alt="camera"
              // className="img-fluid"
              height="270px"
              width="100%"
              style={{ borderRadius: "50%" }}
            /> */}
            <RoundedStyledPhoto image={props.data && props.data.images[0]} />
          </div>
          <div className="w-100 m-auto bg-white border p-2 d-flex flex-column align-items-center">
            <h5
              style={{ color: "#4B4747", fontWeight: "bold" }}
              className="px-1 w-75"
            >
              {props.data && props.data.name}
            </h5>
            <div className="d-flex align-items-center text-left px-1 w-75">
              <img src={phone} className="" height="20" alt="" />
              <h6 className="ml-2 mb-0">{props.data && props.data.phone}</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
          <div className="ml-2 text-center">
            {/* <img
              src={props.data && props.data.images[1]}
              height="350px"
              width="100%"
              alt=""
              // className="img-fluid"
            /> */}
            <StyledPhotoView1 image={props.data && props.data.images[1]} />
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
          <div className="ml-2 text-center">
            {/* <img
              src={props.data && props.data.images[2]}
              alt=""
              height="350px"
              width="100%"
            /> */}
            <StyledPhotoView1 image={props.data && props.data.images[2]} />
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
          <div className=" ml-2 text-center">
            {/* <img
              src={props.data && props.data.images[3]}
              alt=""
              height="350px"
              width="100%"
            /> */}
            <StyledPhotoView1 image={props.data && props.data.images[3]} />
          </div>
        </div>
      </div>
      <div
        style={{ background: "#F1F1F1" }}
        className="profile__bottomInfo d-flex justify-content-between px-3 py-4 row m-auto"
      >
        <div className="col-md-6 col-lg-6 col-sm-6 col-6 col-xs-12 mb-3">
          <h6 style={{ fontSize: "18px" }} className="text-success mr-4">
            Last Seen:{" "}
            {props.data &&
              props.data.lastSeen.toDateString() +
                "        @ " +
                props.data.lastSeen.toLocaleTimeString()}
          </h6>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-6 col-6 col-xs-12">
          <p style={{ color: "#5B5B5B", fontSize: "20px" }} className="mr-4 ">
            {props.data.availableForHire
              ? "Available for hire"
              : "Unavailable for hire"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
