import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import map from "lodash/map";

const UploadFileInput = ({ handleChange, fileObjs, setFileObjs }) => {
  const MyDropzone = (index) => {
    console.log("fileObjs len", fileObjs.length);

    const onDrop = useCallback((acceptedFile) => {
      let formdata = new FormData();

      formdata.append("file", acceptedFile[0]);

      console.log("accepted file", acceptedFile[0]);
      console.log("index file", index.index);

      let tempFileObjs = [...fileObjs];
      console.log(" file obj", tempFileObjs);

      console.log("temp file obj", tempFileObjs);
      tempFileObjs[index.index] = acceptedFile[0];

      setFileObjs(tempFileObjs);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false,
      accept: "image/jpeg , image/png , application/pdf , .doc , .docx ",
    });

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <React.Fragment>
            <label className="mt-3" htmlFor="upload_document1" id="customdoc1">
              <d className="normal-text">Upload File {index.index + 1}</d>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <svg
                width={30}
                height={33}
                viewBox="0 0 39 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor: "pointer", width: "25.5px", height: 20 }}
              >
                <path
                  d="M20.6327 1.38968C20.0548 0.811859 19.118 0.811859 18.5402 1.38968L9.12413 10.8057C8.54631 11.3836 8.54631 12.3204 9.12413 12.8982C9.70195 13.476 10.6388 13.476 11.2166 12.8982L19.5864 4.52836L27.9563 12.8982C28.5341 13.476 29.4709 13.476 30.0487 12.8982C30.6265 12.3204 30.6265 11.3836 30.0487 10.8057L20.6327 1.38968ZM21.066 26.1094L21.066 2.43591L18.1068 2.43591L18.1068 26.1094L21.066 26.1094Z"
                  fill="#3B3B3B"
                />
                <path
                  d="M2.42334 21.375V31.4362H36.7499V21.375"
                  stroke="#F8BD00"
                  strokeWidth="2.95918"
                />
              </svg>
            </label>
          </React.Fragment>
        )}
      </div>
    );
  };

  return (
    <div>
      <p className="normal-text" style={{ fontWeight: 500 }}>
        Upload Job Ad Documents (Optional)
      </p>{" "}
      <div className="wid" style={{ width: 20 }} />
      <p className="normal-text" style={{ color: "#969393" }}>
        It can be the Job Description, or pictures of the cars to be driven as
        well. You are allowed only a limit of 3 documents at a time.
      </p>
      {fileObjs &&
        map(fileObjs, (fileObj, index) => (
          <>
            <MyDropzone index={index} />
            {fileObj.path && (
              <div className="d-flex flex-row align-content-center">
                <i
                  style={{ transform: "rotate(45deg)" }}
                  className="fas fa-paperclip fa-lg"
                >
                  {" "}
                </i>
                <p className="ml-3" style={{ minWidth: "15rem" }}>
                  {fileObj.path}{" "}
                </p>
                <i
                  style={{ color: "#279F2C" }}
                  className="fas fa-check-circle fa-lg ml-3 mt-1"
                ></i>
                <i
                  style={{ color: "#6B6565", cursor: "pointer" }}
                  onClick={() =>
                    setFileObjs(fileObjs.filter((fobj) => fobj !== fileObj))
                  }
                  className="fas fa-trash fa-lg ml-3 mt-1"
                ></i>
              </div>
            )}
          </>
        ))}
      <div id="fileList1" style={{ width: "auto" }} />
      <div className="row" style={{ width: "auto" }}>
        <div className="col-sm" style={{ width: "auto" }}>
          <div id="fileList1" style={{ maxWidth: 366 }} />
        </div>
        <div className="col-sm" style={{ width: "auto" }}>
          <div style={{ marginTop: "-45px" }}>
            <button
              id="resetbtn"
              type="button"
              onclick="hidethis()"
              style={{
                height: 30,
                borderRadius: 5,
                border: "none",
                cursor: "pointer",
                backgroundColor: "white",
                fontSize: 18,
                display: "none",
              }}
            >
              <svg
                width={25}
                height={26}
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0635 5.48438H19.0635V2.98438C19.0635 1.88125 18.1666 0.984375 17.0635 0.984375H7.06348C5.96035 0.984375 5.06348 1.88125 5.06348 2.98438V5.48438H1.06348C0.510352 5.48438 0.0634766 5.93125 0.0634766 6.48438V7.48438C0.0634766 7.62187 0.175977 7.73438 0.313477 7.73438H2.20098L2.97285 24.0781C3.02285 25.1437 3.9041 25.9844 4.96973 25.9844H19.1572C20.226 25.9844 21.1041 25.1469 21.1541 24.0781L21.926 7.73438H23.8135C23.951 7.73438 24.0635 7.62187 24.0635 7.48438V6.48438C24.0635 5.93125 23.6166 5.48438 23.0635 5.48438ZM7.31348 3.23438H16.8135V5.48438H7.31348V3.23438ZM18.9166 23.7344H5.21035L4.4541 7.73438H19.6729L18.9166 23.7344Z"
                  fill="#6B6565"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <br />
      <button
        type="button"
        id="show"
        className
        style={{
          backgroundColor: "#FFBB00",
          height: 30,
          borderRadius: 5,
          border: "none",
          cursor: "pointer",
        }}
      >
        <p
          style={{ margin: "auto", textAlign: "center", color: "white" }}
          onClick={() => fileObjs.length < 3 && setFileObjs([...fileObjs, {}])}
        >
          <i className="fa fa-plus normal-text" style={{ fontWeight: 200 }} />
          &nbsp; Add another File
        </p>
      </button>
      <br style={{ height: 110 }} />
      <br />
      <button
        type="button"
        id="gotoad"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}
        style={{
          maxWidth: 216,
          height: 40,
          backgroundColor: "#6B6565",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        View your Ad and Post
      </button>
      <br />
      <br />
      <p className="normal-text" style={{ color: "#969393" }}>
        Once you are done with adding the content for your ad, view your ad and
        if you are satisfied ,tap the 'Post Ad' button for it to go live.
      </p>
    </div>
  );
};

export default UploadFileInput;
