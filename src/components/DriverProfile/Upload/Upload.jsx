import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row, Container, Col } from "react-bootstrap";
import fileIconBlack from "../../../dist/icons/fileBlack.png";
import fileIcon from "../../../dist/icons/fileIcon.png";
import checked from "../../../dist/icons/checked.png";
import deleteIcon from "../../../dist/icons/delete.png";
import { useDropzone } from "react-dropzone";
import { PostRoute } from "../../../Api/index";
import { getAuthConfig } from "../../../Util/ApiUtils";
import {
  myDocsUpload,
  deleteMyDocsFile,
  setUploadsVisibility,
} from "../../../redux/actions/driver_actions/driver_profile_actions";
import { get } from "react-hook-form";
const { Post, Get, Delete } = PostRoute();

const Upload = ({
  userInfo,
  formStaticDataProp,
  handleChange,
  session_token,
}) => {
  const [extraDocs, setExtraDocs] = useState([]);
  const dispatch = useDispatch();
  let extradoc;

  useEffect(() => {
    if (userInfo && userInfo.myUploads) {
      let extradoc = userInfo.myUploads.filter(
        (docFile) =>
          docFile.title !== "Driving License" ||
          docFile.title !== "Public Service Vehicle (PSV) License" ||
          docFile.title !== "Certificate of Good Conduct"
      );
      setExtraDocs(extradoc);
      console.log("extradoc -- ", extradoc);
    }
  }, [userInfo]);

  const MyDropzone = ({ docTitle }) => {
    //call back for handling the image file
    const onDrop = useCallback(async (acceptedFile) => {
      console.log("accepted ------- file ", acceptedFile);

      let isFileReUpload = userInfo.myUploads.some(
        (upload) => upload.title === docTitle
      );

      if (isFileReUpload) {
        dispatch(deleteMyDocsFile(docTitle, session_token));
        console.log("reupload del resp ", deleteMyUploadsFile);
      }

      let formdata = new FormData();

      formdata.append("title", docTitle);
      formdata.append("file", acceptedFile[0]);

      console.log("-=== title ", docTitle);
      console.log("-=== doc ", acceptedFile[0]);
      dispatch(myDocsUpload(session_token, formdata));
    }, []);

    //hook for showing dropzone component
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false,
      accept: "image/jpeg, image/png , application/pdf",
    });

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className="currencyInfo w-75 text-center">
            <span style={{ color: "#969393", cursor: "pointer" }}>
              Upload from a device
            </span>
          </div>
        )}
      </div>
    );
  };
  return (
    userInfo && (
      <div className="upload section__style px-5 pb-3 pt-5 bg-white mt-3">
        <div className="">
          <h5 className="form__heading">My Uploads</h5>
          <p style={{ color: "#969393" }}>
            Upload the following documents or their equivalents. You will have
            an option to make them public or private. You can import your
            documents form Instadrive if you have uploaded them there. If not,
            when you upload the documents from here, they will automatically be
            stored on on Instadrive. And you will be able to access them any
            time from Instadrive.Open Instadrive to learn more.
          </p>
          <hr style={{ marginRight: "103px" }} />
        </div>
        <div className="col-md-12 m-auto">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 col-xs-12 mt-4">
              <h6 className="form__heading2 text-center"> Driving License</h6>
              <div className=" my-3 mt-4 d-flex align-items-center">
                <div className="m-auto">
                  {userInfo.myUploads &&
                  userInfo.myUploads.some(
                    (upload) => upload.title === "Driving License"
                  ) ? (
                    <>
                      <img className="mr-2" src={checked} alt="" />
                      <img className="mr-2" src={fileIcon} alt="" />
                      <span style={{ color: "#969393" }} className="">
                        {/* Driving Licence.jpg */}
                        {/* {userInfo.myUploads.doc.split('/').pop()} */}
                        {getFileName(userInfo.myUploads, "Driving License")}
                      </span>
                    </>
                  ) : (
                    <>
                      <img className="mr-2" src={fileIconBlack} alt="" />
                      <span style={{ color: "#969393" }} className="">
                        No file Uploaded
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-xs-12 mb-4 text-center">
              <MyDropzone docTitle="Driving License" />
              <span style={{ color: "#969393" }} className="text-center mt-4">
                Last modified: 15th Nov 2020
              </span>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-xs-12 text-center">
              <div className="currencyInfo w-75 text-center"></div>
              {userInfo.myUploads &&
                userInfo.myUploads.some(
                  (upload) => upload.title === "Driving License"
                ) && (
                  <div className="text-center">
                    <img
                      height="25"
                      className=""
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          deleteMyDocsFile("Driving License", session_token)
                        )
                      }
                      src={deleteIcon}
                      alt=""
                    />
                  </div>
                )}
            </div>
          </div>
          <div className="col-md-11">
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 col-xs-12 mt-4">
              <h6 className="form__heading2 text-center">
                Public Service Vehicle (PSV) License
              </h6>
              <div className=" my-3 mt-4 d-flex align-items-center">
                <div className="m-auto">
                  {userInfo.myUploads &&
                  userInfo.myUploads.some(
                    (upload) =>
                      upload.title === "Public Service Vehicle (PSV) License"
                  ) ? (
                    <>
                      <img className="mr-2" src={checked} alt="" />
                      <img className="mr-2" src={fileIcon} alt="" />
                      <span style={{ color: "#969393" }} className="">
                        {/* Driving Licence.jpg */}
                        {/* {userInfo.myUploads.doc.split('/').pop()} */}
                        {getFileName(
                          userInfo.myUploads,
                          "Public Service Vehicle (PSV) License"
                        )}
                      </span>
                    </>
                  ) : (
                    <>
                      <img className="mr-2" src={fileIconBlack} alt="" />
                      <span style={{ color: "#969393" }} className="">
                        No file Uploaded
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-xs-12 mb-4 text-center">
              {/* <div className="currencyInfo w-75 text-center">
              <span style={{ color: "#969393" }}>Upload from a device</span>
            </div> */}
              <MyDropzone docTitle="Public Service Vehicle (PSV) License" />

              <span style={{ color: "#969393" }} className="text-center mt-4">
                Last modified: 15th Nov 2020
              </span>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-xs-12 text-center">
              <div className="currencyInfo w-75 text-center"></div>

              {userInfo.myUploads &&
                userInfo.myUploads.some(
                  (upload) =>
                    upload.title === "Public Service Vehicle (PSV) License"
                ) && (
                  <div className="text-center">
                    <img
                      height="25"
                      className=""
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          deleteMyDocsFile(
                            "Public Service Vehicle (PSV) License",
                            session_token
                          )
                        )
                      }
                      src={deleteIcon}
                      alt=""
                    />
                  </div>
                )}
            </div>
          </div>
          <div className="col-md-11">
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 col-xs-12 mt-4">
              <h6 className="form__heading2 text-center">
                {" "}
                Certificate of Good Conduct
              </h6>
              <div className=" my-3 mt-4 d-flex align-items-center">
                <div className="m-auto">
                  {userInfo.myUploads &&
                  userInfo.myUploads.some(
                    (upload) => upload.title === "Certificate of Good Conduct"
                  ) ? (
                    <>
                      <img className="mr-2" src={checked} alt="" />
                      <img className="mr-2" src={fileIcon} alt="" />
                      <span style={{ color: "#969393" }} className="">
                        {/* Driving Licence.jpg */}
                        {/* {userInfo.myUploads.doc.split('/').pop()} */}
                        {getFileName(
                          userInfo.myUploads,
                          "Certificate of Good Conduct"
                        )}
                      </span>
                    </>
                  ) : (
                    <>
                      <img className="mr-2" src={fileIconBlack} alt="" />
                      <span style={{ color: "#969393" }} className="">
                        No file Uploaded
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-xs-12 mb-4 text-center">
              {/* <div className="currencyInfo w-75 text-center">
              <span style={{ color: "#969393" }}>Upload from a device</span>
            </div> */}
              <MyDropzone docTitle="Certificate of Good Conduct" />
              <span style={{ color: "#969393" }} className="text-center mt-4">
                Last modified: 15th Nov 2020
              </span>
            </div>
            <div className="col-md-4 col-sm-6 col-12 col-xs-12 text-center">
              <div className="currencyInfo w-75 text-center">
                {/* <span style={{ color: "#969393" }}>Import from Instadrive</span> */}
              </div>
              {userInfo.myUploads &&
                userInfo.myUploads.some(
                  (upload) => upload.title === "Certificate of Good Conduct"
                ) && (
                  <div className="text-center">
                    <img
                      height="25"
                      className=""
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          deleteMyDocsFile(
                            "Certificate of Good Conduct",
                            session_token
                          )
                        )
                      }
                      src={deleteIcon}
                      alt=""
                    />
                  </div>
                )}
            </div>
          </div>
          <div className="col-md-11">
            <hr />
          </div>
          <div className="row">
            {extraDocs.map((docFile, index) => (
              <React.Fragment key={index}>
                <div className="col-md-4 col-sm-6 col-12 col-xs-12 mt-3">
                  <form>
                    <div className="form-group row align-items-center">
                      <div className="m-auto w-75">
                        <input
                          placeholder="Type name of the document"
                          type="text"
                          className="form-control uploadInput"
                          name="name"
                          id="name"
                          value={extraDocs[index].title || ""}
                          onChange={(e) => {
                            let extradocsTemp = [...extraDocs];
                            extradocsTemp[index].title = e.target.value;
                            setExtraDocs(extradocsTemp);
                            console.log("ext docs title", extraDocs);
                          }}
                          disabled={extraDocs[index]._id}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="mt-2 d-flex align-items-center">
                    <div className="m-auto">
                      {/* <img className="mr-2" src={fileIconBlack} alt="" />
                      <span style={{ color: "#969393" }} className="">
                        No file Uploaded
                      </span> */}

                      {extraDocs[index]._id ? (
                        <>
                          <img className="mr-2" src={checked} alt="" />
                          <img className="mr-2" src={fileIcon} alt="" />
                          <span style={{ color: "#969393" }} className="">
                            {/* Driving Licence.jpg */}
                            {/* {userInfo.myUploads.doc.split('/').pop()} */}
                            {getFileName(extraDocs, extraDocs[index].title)}
                          </span>
                        </>
                      ) : (
                        <>
                          <img className="mr-2" src={fileIconBlack} alt="" />
                          <span style={{ color: "#969393" }} className="">
                            No file Uploaded
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 col-xs-12 mb-4 text-center">
                  {/* <div className="currencyInfo w-75 text-center">
                    <span style={{ color: "#969393" }}>
                      Upload from a device
                    </span>
                  </div> */}
                  <MyDropzone docTitle={extraDocs[index].title} />
                  <span
                    style={{ color: "#969393" }}
                    className="text-center mt-4"
                  >
                    Last modified: 15th Nov 2020
                  </span>
                </div>
                <div className="col-md-4 col-sm-6 col-12 col-xs-12 text-center">
                  <div className="currencyInfo w-75 text-center"></div>
                  <div className="text-center">
                    <img
                      height="25"
                      className=""
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(
                          deleteMyDocsFile(
                            extraDocs[index].title,
                            session_token
                          )
                        );
                        let removedIndex = extraDocs.filter(
                          (doc, i) => i !== index
                        );
                        setExtraDocs(removedIndex);
                      }}
                      src={deleteIcon}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-11">
                  <hr />
                </div>
              </React.Fragment>
            ))}
          </div>
          <Row className="mt-2">
            <a
              className="text-success font-weight-bold text-left ml-5 "
              onClick={() =>
                extraDocs.length < 3 &&
                setExtraDocs(extraDocs.concat({ title: "" }))
              }
            >
              +Add More Uploads
            </a>
            <span style={{ color: "#969393" }} className="ml-3">
              (Max. 3 more docs)
            </span>
          </Row>

          <div className="col-md-11">
            <hr />
          </div>
          <form
            className="ml-4"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(setUploadsVisibility(userInfo.uploadsVisibility));
            }}
          >
            <div className="col-md-12 p-0">
              <div
                style={{ color: "#575353" }}
                className="font-weight-bold py-3 d-flex align-items-center"
              >
                <p className="font-weight-bold ml-4 mt-4">
                  Make My Uploads Public :
                </p>
                <div class="custom-control custom-switch switchToggle">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="public-upload-switch"
                    name="uploadsVisibility"
                    value={userInfo.uploadsVisibility === true ? false : true}
                    onChange={handleChange}
                    checked={userInfo.uploadsVisibility === true}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="public-upload-switch"
                  ></label>
                </div>
              </div>
            </div>
            <div className="col-md-12 my-2">
              <p style={{ color: "#969393" }}>
                By default, your uploads will be private meaning no one can view
                them on your profile page. It will only show "Uploads Private
                Contact driver for access". When you turn the Upload public,
                employers and visitors who search your profile will be able to
                view them. Turn your uploads public if you have no issues making
                them public. Some employers would be interested to see your
                driving documents.
              </p>
            </div>
            <div className="text-right col-md-12">
              <button type="submit" className="btn submitBtn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Upload;

//helper methods

//to get file name
const getFileName = (filesArray, docTitle) => {
  let file = filesArray.find((fileObj) => fileObj.title === docTitle);
  let fileName = file.doc.split("/").pop();
  console.log("file--- return", file);
  return fileName;
};

const deleteMyUploadsFile = async (filesArray, docTitle, token) => {
  let file = filesArray.find((fileObj) => fileObj.title === docTitle);
  let config = getAuthConfig(token);
  let deleteResponse = await Delete(
    `users/driver/documents/${file._id}`,
    config
  );
  console.log("response del ---- ", deleteResponse);
};
