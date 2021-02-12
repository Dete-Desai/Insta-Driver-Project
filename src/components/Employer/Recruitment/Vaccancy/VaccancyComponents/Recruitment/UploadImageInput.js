import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const UploadImageInput = ({ handleChange, setImgObj, imgObj }) => {
  const MyDropzone = () => {
    const onDrop = useCallback((acceptedFile) => {
      // let formdata = new FormData();
      // formdata.append("file", acceptedFile[0]);
      setImgObj(acceptedFile[0]);
      console.log("img file --", acceptedFile[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false,
      accept: "image/jpeg, image/png",
    });

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <React.Fragment>
            <label className="normal-text" htmlFor="upload_image">
              Upload image &nbsp;
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

  //Handling Images
  const [selectedImages, setSelectedImage] = useState([]);

  const imageHandleChange = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log(fileArray);

      setSelectedImage((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };
  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          className="card-img-top"
          id="blah"
          src={photo}
          key={photo}
          alt="adImage"
          style={{
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            minHeight: "auto",
          }}
        />
      );
    });
  };

  return (
    <div>
      <d className="normal-text" style={{ fontWeight: 500 }}>
        Upload Image (Optional)
      </d>
      {/* <input
        type="file"
        id="upload_image"
        accept="image/x-png,image/gif,image/jpeg"
        defaultValue="https://instadriver.co/images/placeholder.png"
        name="file"
        onChange={handleChange && imageHandleChange}
        oninput="showprogressbar();"
        style={{ display: "none" }}
        value=""
      /> */}
      <p className="normal-text" style={{ color: "grey" }}>
        It can be the image of the vehicle you are looking a driver for, an
        image of your company or any Ad Image. You can leave it blank too.
      </p>
      <MyDropzone />
      {imgObj && (
        <div className="d-flex flex-row align-content-center">
          <i
            style={{ transform: "rotate(45deg)" }}
            className="fas fa-paperclip fa-lg"
          >
            {" "}
          </i>
          <p className="ml-3" style={{ minWidth: "15rem" }}>
            {imgObj.path}{" "}
          </p>
          <i
            style={{ color: "#279F2C" }}
            className="fas fa-check-circle fa-lg ml-3 mt-1"
          ></i>
          <i
            style={{ color: "#6B6565", cursor: "pointer" }}
            onClick={() => {
              setImgObj(undefined);
            }}
            className="fas fa-trash fa-lg ml-3 mt-1"
          ></i>
        </div>
      )}
      <div>{renderPhotos(selectedImages)}</div>
    </div>
  );
};

export default UploadImageInput;
