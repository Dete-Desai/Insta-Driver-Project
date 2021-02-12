import React from "react";
import PostForm from "../PostForm";

const AddPosts = ({
  setShowAddPosts,
  setContent,
  handleSubmit,
  content,
  handlePhotoUpload,
  handleVideoUpload,
  handleDocumentUpload,
  photos,
  documents,
  textCount,
  setTextCount,
}) => {
  return (
    <>
      <PostForm
        setShowAddPosts={setShowAddPosts}
        setContent={setContent}
        handleSubmit={handleSubmit}
        content={content}
        handlePhotoUpload={handlePhotoUpload}
        handleVideoUpload={handleVideoUpload}
        handleDocumentUpload={handleDocumentUpload}
        photos={photos}
        documents={documents}
        textCount={textCount}
        setTextCount={setTextCount}
      />
    </>
  );
};

export default AddPosts;
