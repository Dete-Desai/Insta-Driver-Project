import React, { useState } from "react";
import path from "path";
import attachment from "../../../../../dist/icons/Attachment.png";
import emojiIcon from "../../../../../dist/icons/emoji.png";
import videoIcon from "../../../../../dist/icons/videoIcon.png";
import photoIcon from "../../../../../dist/icons/photo.png";
import fileIcon from "../../../../../dist/icons/file.png";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import "./index.css";
import { StyledPhoto } from "../../Photos/AvailablePhotos/PhotoStyled";

export default function PostForm({
  setContent,
  handleSubmit,
  content,
  handlePhotoUpload,
  handleVideoUpload,
  handleDocumentUpload,
  photos,
  textCount,
  setTextCount,
  documents,
}) {
  const [emojiShow, setEmojiShow] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setTextCount(e.target.value.length);
    setContent(e.target.value);
  };

  const addEmoji = (e) => {
    let emoji = e.native;
    setText(text + emoji);
  };

  console.log(documents);

  return (
    <div
      className="mt-4 position-relative"
      style={{
        maxHeight: "600px",
        maxWidth: "700px",
        margin: "1rem auto",
        background: "#fff",
        border: "1px solid rgba(0, 0, 0, 0.125)",
        borderRadius: "0.8rem",
      }}
    >
      <div className="chatFooter__input px-2 pt-2 w-100">
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            className="form-control input__style w-100 border-0"
            placeholder="Type your message"
            name="message"
            id="message"
            maxLength={1000}
            value={content}
            style={{ height: "150px" }}
          ></textarea>
        </form>
        {photos && photos.length > 0 && (
          <div
            className="d-flex justify-content-around align-items-center mb-3"
            style={{
              minHeight: "100px",
              marginTop: "-1rem",
            }}
          >
            <div className="postform-grid-container">
              {photos.map((photo) => (
                <StyledPhoto
                  className="mb-4"
                  image={photo}
                  style={{ borderRadius: "15px", minHeight: "300px" }}
                />
              ))}
            </div>
          </div>
        )}

        {documents && documents.length > 0 && (
          <div
            className="d-flex justify-content-around align-items-center mb-3"
            style={{ minHeight: "50px" }}
          >
            {documents.map((document) => (
              <div className="mb-4 mr-3">
                <a href={document} target="_blank">
                  <i className="fa fa-file"></i>&nbsp;
                  {path.basename(document)}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className="chatFoot__bottom  d-flex justify-content-between align-items-center mb-auto position-absolute fixed-bottom"
        style={{ height: "70px" }}
      >
        <div className="chatFooter__left d-flex justify-content-start align-items-center ">
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="btn iconBtn">
                <img className="mr-1" src={attachment} alt="" />
              </span>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div id="InputFile" className="py-3 pr-5 pl-4">
                <form>
                  <div className="file_photo">
                    <label for="img" className="custom-file-upload">
                      <img
                        className="mr-2 "
                        src={photoIcon}
                        alt=""
                        style={{
                          marginLeft: "-0.8rem",
                          marginBottom: "-0.5rem",
                        }}
                      />
                      <span> Attach Photo</span>
                    </label>
                    <input
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      // accept=".jpg, .jpeg, .png, .gif, .bmp, .tif, .jfif, .eps, .jfif"
                      onChange={handlePhotoUpload}
                    />
                  </div>
                  <div className="file_video">
                    <label for="video" className="custom-file-upload">
                      <img className="mr-2" src={videoIcon} alt="" />
                      <span> Attach Video</span>
                    </label>
                    <input
                      type="file"
                      id="video"
                      name="video"
                      accept="video/*"
                      onChange={handleVideoUpload}
                    />
                  </div>
                  <div className="file_doc">
                    <label for="file_extension" className="custom-file-upload">
                      <img className="mr-2" src={fileIcon} alt="" />
                      <span> Attach Document</span>
                    </label>
                    <input
                      type="file"
                      id="file_extension"
                      name="file_extension"
                      accept=".pdf, .doc, .docx, application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .xlsx, .xls, .ppt, .pptx, .txt, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.slideshow, application/vnd.openxmlformats-officedocument.presentationml.presentation"
                      onChange={handleDocumentUpload}
                    />
                  </div>
                </form>
              </div>
            </div>
            <span
              onClick={() => setEmojiShow(emojiShow ? "" : "show")}
              className="btn iconBtn"
            >
              <img className="mr-1" src={emojiIcon} alt="" />
            </span>
            <div
              className="position-absolute"
              style={{ left: "-8.7rem", bottom: 0 }}
            >
              {emojiShow && (
                <Picker
                  onSelect={addEmoji}
                  emojiTooltip={true}
                  title="weChat"
                />
              )}
            </div>

            <span style={{ fontSize: "17px" }} className="p-0 m-0">
              {textCount}/1000
            </span>
          </div>
        </div>
        <div className="chatFooter__right ">
          <button
            className="sendIcon btn text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
