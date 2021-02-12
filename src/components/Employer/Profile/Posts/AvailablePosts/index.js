import React from "react";
import "./index.css";
import PostContainer from "./PostContainer";

const AvailablePosts = ({ posts, handlePostDelete }) => {
  return (
    <>
      <div>
        {posts &&
          posts.length &&
          posts
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((post) => (
              <PostContainer
                post={post}
                key={post._id}
                handlePostDelete={handlePostDelete}
              />
            ))}
      </div>
    </>
  );
};

export default AvailablePosts;
