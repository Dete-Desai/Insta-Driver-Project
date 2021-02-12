import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import camera from "../../../dist/icons/camera.png";
import edit from "../../../dist/icons/edit.png";
import phone from "../../../dist/icons/phone.png";
import { PostRoute } from "../../../Api";
import {
  updateProfilePic,
  updateOtherPics,
  updateAvailableforHire,
} from "../../../redux/actions/driver_actions/driver_profile_actions";
import styled from "styled-components";
import { getAuthConfig } from "../../../Util/ApiUtils";
import get from "lodash/get";
const { Post } = PostRoute();

const StyledUploadDiv = styled.div`
  background-color: gray;
  img {
    background-color: grat;
  }
`;

const ProfilePhoto = ({ userInfo, session_token, handleChange }) => {
  const dispatch = useDispatch();

  const { token } = useSelector(
    (state) => state.user_reducers.user_credentials
  );
  // const { availableforHire }  = useSelector( state => state.driver_reducers.driver_profile);

  const [available, setAvailable] = useState(
    userInfo && userInfo.availableforHire !== undefined
      ? userInfo.availableforHire
      : false
  );

  // const handleChange = e => {
  //   setAvailable(!available);
  //   dispatch(updateAvailableforHire(token, {availableforHire: !available}))
  // }
  //dropzone component for uploading images
  const MyDropzone = ({ picId }) => {
    //call back for handling the image file
    const onDrop = useCallback((acceptedFile) => {
      console.log("accepted ------- file ", acceptedFile);

      let formdata = new FormData();
      formdata.append("file", acceptedFile[0]);

      //conditional action dispatch
      if (picId === "imageZero") {
        dispatch(updateProfilePic(session_token, formdata));
      }
      if (picId !== "imageZero") {
        dispatch(updateOtherPics(session_token, formdata, picId));
      }

      console.log("dispatched ", acceptedFile);
    }, []);

    //hook for showing dropzone component
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false,
      accept: "image/jpeg, image/png",
    });

    return (
      <StyledUploadDiv {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <img
            style={{ margin: "0 auto !important", cursor: "pointer" }}
            src={edit}
            alt="camera"
            className="img-fluid"
          />
        )}
      </StyledUploadDiv>
    );
  };
  return (
    userInfo && (
      <div className="profilePhoto">
        <div className="photo__info row">
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3 text-center">
            <div className="bg-white photoBox1 m-auto d-flex justify-content-between align-items-center flex-column mb-2">
              <img
                src={
                  userInfo
                    ? get(userInfo, "avatar")
                      ? get(userInfo, "avatar")
                      : camera
                    : camera
                }
                alt="camera"
                className={
                  userInfo
                    ? get(userInfo, "avatar")
                      ? "img-fluid m-auto rounded-circle h-100 w-100"
                      : "img-fluid m-auto rounded-circle"
                    : "img-fluid m-auto rounded-circle"
                }
              />
            </div>
            <MyDropzone picId="imageZero" />
            <span style={{ background: "#E5E5E5", fontSize: "15px" }}>
              Add a profile photo. A passport size photo of you will work
            </span>
            <form className="w-100 mt-3 bg-white border p-2">
              <input
                type="text"
                disabled
                value={
                  userInfo
                    ? `${get(userInfo, "firstName")} ${get(
                        userInfo,
                        "lastName"
                      )}`
                    : ""
                }
                className="inputIcon-none"
                id="name"
              />
              <span className="d-flex justify-content-between mt-1">
                <img src={phone} className="mt-1" height="30" alt="" />
                <input
                  type="text"
                  disabled
                  value={userInfo ? get(userInfo, "mobileNumber") : ""}
                  className="inputIcon-none ml-2"
                  id="name"
                />
              </span>
            </form>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="bg-white photoBoxSquare d-flex justify-content-between align-items-center flex-column ml-2 text-center">
              <img
                src={
                  userInfo
                    ? get(userInfo, "otherImages.imageOne")
                      ? get(userInfo, "otherImages.imageOne")
                      : camera
                    : camera
                }
                alt="camera"
                className={
                  userInfo
                    ? get(userInfo, "otherImages.imageOne")
                      ? "img-fluid m-auto h-100 w-100"
                      : "img-fluid m-auto"
                    : "img-fluid m-auto"
                }
              />
            </div>
            <div className="profile__bottom text-center ml-2">
              <MyDropzone picId="imageOne" />
              <span className="font-weight-bold text-muted">
                (Preferably a full-size photo)
              </span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="bg-white photoBoxSquare d-flex justify-content-between align-items-center flex-column ml-2 text-center">
              <img
                src={
                  userInfo
                    ? get(userInfo, "otherImages.imageTwo")
                      ? get(userInfo, "otherImages.imageTwo")
                      : camera
                    : camera
                }
                alt="camera"
                className={
                  userInfo
                    ? get(userInfo, "otherImages.imageTwo")
                      ? "img-fluid m-auto h-100 w-100"
                      : "img-fluid m-auto"
                    : "img-fluid m-auto"
                }
              />
            </div>
            <div className="profile__bottom text-center ml-2">
              <MyDropzone picId="imageTwo" />
              <span className="font-weight-bold text-muted">
                (It can be a half-size photo)
              </span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3">
            <div className="bg-white photoBoxSquare d-flex justify-content-between align-items-center flex-column ml-2 text-center">
              <img
                src={
                  userInfo
                    ? get(userInfo, "otherImages.imageThree")
                      ? get(userInfo, "otherImages.imageThree")
                      : camera
                    : camera
                }
                alt="camera"
                className={
                  userInfo
                    ? get(userInfo, "otherImages.imageThree")
                      ? "img-fluid m-auto h-100 w-100"
                      : "img-fluid m-auto"
                    : "img-fluid m-auto"
                }
              />
            </div>
            <div className="profile__bottom ml-2 text-center">
              <MyDropzone picId="imageThree" />
              <span className="font-weight-bold text-muted">
                (Any cool photo can do)
              </span>
            </div>
          </div>
        </div>
        <div
          style={{ background: "#F1F1F1" }}
          className="profile__bottomInfo d-flex justify-content-between px-3 py-4 row m-auto"
        >
          <div className="col-md-6 col-lg-6 col-sm-6 col-6 col-xs-12 mb-3">
            <div className="row">
              <div className="col-md-3 p-0">
                <span
                  style={{ fontSize: "18px" }}
                  className="text-success font-weight-bold"
                >
                  Last seen
                </span>
              </div>
              <div className="col-md-9 p-0 text-left">
                <span className="bg-white p-1">
                  {userInfo.updatedAt
                    ? moment(userInfo.updatedAt).add(1, "day").format("LLL")
                    : `No timestamp because profile is not live`}
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6 col-6 col-xs-12">
            <div className="row">
              <div className="col-md-8 p-0 text-center">
                <span
                  style={{ color: "#5B5B5B", fontSize: "18px" }}
                  className=" font-weight-bold"
                >
                  {userInfo.availableforHire ? `available` : `unavailable`} for
                  hire
                </span>
              </div>
              <div className="col-md-4 p-0 text-center">
                <form className="ml-4">
                  <div className="custom-control custom-switch switchToggle">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="userInfo.availableforHire"
                      id="available"
                      value={
                        get(userInfo, "availableforHire") === true
                          ? false
                          : true
                      }
                      checked={userInfo.availableforHire}
                      onChange={(e) =>
                        dispatch(
                          updateAvailableforHire(token, {
                            availableforHire: !userInfo.availableforHire,
                          })
                        )
                      }
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="available"
                    ></label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfilePhoto;
