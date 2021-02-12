import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import fileIcon from "../../../dist/icons/fileIcon.png";

const Upload = (props) => {
  const getDocUrl = (data, docTitle) => {
    if (data && data.length > 0) {
      return data.filter((d) => {
        return d.title === docTitle;
      })[0].doc;
    }
  };

  return (
    <div className="upload section__style px-5 pb-3 pt-5 bg-white mt-3">
      <div className="row">
        <div className="col-md-12">
          <h5 className="form__heading">My Uploads</h5>
        </div>
        <div className="col-md-6 mt-4">
          <div className="d-flex align-items-center pb-3 pl-0">
            {props.visibility ? (
              <a
                href={getDocUrl(props.data, "Driving License")}
                target="_blank"
              >
                <img className="mr-3" src={fileIcon} alt="" />
              </a>
            ) : (
              <img className="mr-3" src={fileIcon} alt="" />
            )}

            <span className="text-gray"> Driving License</span>
          </div>
          <div className="d-flex align-items-center pb-3 pl-0">
            {props.visibility ? (
              <a
                href={getDocUrl(
                  props.data,
                  "Public Service Vehicle (PSV) License"
                )}
                target="_blank"
              >
                <img className="mr-3" src={fileIcon} alt="" />
              </a>
            ) : (
              <img className="mr-3" src={fileIcon} alt="" />
            )}
            <span className="text-gray">
              Public Service Vehicle (PSV) License
            </span>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <div className="d-flex align-items-center pb-3 pl-0">
            {props.visibility ? (
              <a
                href={getDocUrl(props.data, "Certificate of Good Conduct")}
                target="_blank"
              >
                <img className="mr-3" src={fileIcon} alt="" />
              </a>
            ) : (
              <img className="mr-3" src={fileIcon} alt="" />
            )}
            <span className="text-gray"> Certificate of Good Conduct</span>
          </div>
        </div>
        {props.visibility ? (
          <div className="col-md-12 my-2 mt-3">
            <p style={{ color: "#969393" }}>
              The driver has made his uploads public. Click the Icons to view
              the attached doc in a new window.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Upload;
