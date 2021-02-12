import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AvailablePosts from "./AvailablePosts";
import AddPosts from "./AddPosts";
import NoPosts from "./NoPosts";
import {
  createPost,
  deletePost,
  listPosts,
  listBusinessPosts,
  uploadPostDocument,
  uploadPostPhoto,
  uploadPostVideo,
} from "../../../../redux/actions/post_actions";
import Loading from "../../../../layouts/Loading";

const PostsComponent = (props) => {
  const [showAddPosts, setShowAddPosts] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [content, setContent] = useState("");
  const [textCount, setTextCount] = useState("0");
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [attachmentErrorMessage, setAttachmentErrorMessage] = useState("");
  const [attachmentSuccessMessage, setAttachmentSuccessMessage] = useState("");
  const dispatch = useDispatch();

  const credentials = useSelector(
    (state) => state.user_reducers.user_credentials
  );

  const employer = useSelector(
    (state) => state.employer_reducers.employer_profile
  );

  const { posts, loading } = useSelector((state) => state.posts_reducer);

  const handlePhotoUpload = async (e) => {
    const formData = new FormData();

    const { files } = e.target;

    formData.append("file", files[0]);

    const photo = await dispatch(uploadPostPhoto(credentials.token, formData));

    if (photo !== undefined) {
      setPhotos([...photos, photo.media]);

      setAttachmentSuccessMessage("Photo uploaded successfully!");
    } else {
      setAttachmentErrorMessage("Photo not uploaded, please try again!");
    }
  };

  const handleVideoUpload = async (e) => {
    const formData = new FormData();

    const { files } = e.target;

    formData.append("file", files[0]);

    const video = await dispatch(uploadPostVideo(credentials.token, formData));

    if (video !== undefined) {
      setVideos([...videos, video.media]);

      setAttachmentSuccessMessage("Video uploaded successfully!");
    } else {
      setAttachmentErrorMessage("Video not uploaded, please try again!");
    }
  };

  const handleDocumentUpload = async (e) => {
    const formData = new FormData();

    const { files } = e.target;

    formData.append("file", files[0]);

    const document = await dispatch(
      uploadPostDocument(credentials.token, formData)
    );

    // console.log(document.media);

    if (document !== undefined) {
      setDocuments([...documents, document.media]);

      setAttachmentSuccessMessage("Document uploaded successfully!");
    } else {
      setAttachmentErrorMessage("Document not uploaded, please try again!");
    }
  };

  if (attachmentErrorMessage || attachmentSuccessMessage) {
    setTimeout(() => {
      setAttachmentErrorMessage("");
      setAttachmentSuccessMessage("");
    }, 7000);
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const media = {
        photos,
        videos,
        documents,
      };

      const post = {
        content,
        media,
      };

      if (employer) {
        if (employer.handle) {
          await dispatch(createPost(credentials.token, post));

          const posts = await dispatch(listPosts(credentials.token));

          setAllPosts(posts.reverse().slice(0, 2));

          setContent("");
          setPhotos([]);
          setDocuments([]);
          setVideos([]);
          setTextCount("0");
        } else {
          throw Error("Please ensure that your profile handler exists ");
        }
      } else {
        throw Error("Please login to continue");
      }
    } catch (err) {
      setAttachmentErrorMessage(err.message);
    }
  };

  const handlePostDelete = async (e, postId) => {
    try {
      e.preventDefault();
      e.stopPropagation();

      await dispatch(deletePost(credentials.token, postId));

      const posts = await dispatch(listPosts(credentials.token));

      setAllPosts(posts.reverse().slice(0, 5));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (!credentials) {
        const { handle } = props.match.params;

        const posts = await dispatch(listBusinessPosts(handle));

        setAllPosts(posts.reverse().slice(0, 5));
      } else {
        const posts = await dispatch(listPosts(credentials.token));

        setAllPosts(posts.reverse().slice(0, 5));
      }
    };

    getData();
  }, []);

  const url = props.location.pathname.split("/")[1];

  // if (loading) return <Loading />;

  return (
    <>
      {posts.length <= 0 ? (
        <>
          {!showAddPosts && url !== "business" && (
            <NoPosts
              credentials={credentials}
              setShowAddPosts={setShowAddPosts}
            />
          )}
          {showAddPosts && url !== "business" && (
            <>
              {attachmentErrorMessage && (
                <div
                  style={{
                    background: "#ff4f4f",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                >
                  {attachmentErrorMessage}
                </div>
              )}
              {attachmentSuccessMessage && (
                <div
                  style={{
                    background: "#3ee074",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                >
                  {attachmentSuccessMessage}
                </div>
              )}
              {url !== "business" && (
                <AddPosts
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
              )}
            </>
          )}
        </>
      ) : (
        <>
          {attachmentErrorMessage && (
            <div
              style={{ background: "#ff4f4f", color: "#fff", fontSize: "1rem" }}
            >
              {attachmentErrorMessage}
            </div>
          )}
          {attachmentSuccessMessage && (
            <div
              style={{ background: "#3ee074", color: "#fff", fontSize: "1rem" }}
            >
              {attachmentSuccessMessage}
            </div>
          )}
          {credentials && url !== "business" && (
            <AddPosts
              setShowAddPosts={setShowAddPosts}
              setContent={setContent}
              handleSubmit={handleSubmit}
              content={content}
              handlePhotoUpload={handlePhotoUpload}
              handleVideoUpload={handleVideoUpload}
              handleDocumentUpload={handleDocumentUpload}
              photos={photos}
              textCount={textCount}
              documents={documents}
              setTextCount={setTextCount}
            />
          )}

          <AvailablePosts
            posts={allPosts}
            handlePostDelete={handlePostDelete}
          />

          {allPosts && allPosts.length < posts.length && (
            <div className="mt-4  mb-5 d-flex justify-content-center align-items-center">
              <button
                style={{ width: "150px" }}
                className="btn createVideo bg-orange mt-4 font-weight-bold"
                onClick={() => setAllPosts(posts)}
              >
                Show More
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default withRouter(PostsComponent);
