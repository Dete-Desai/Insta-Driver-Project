import React from "react";

const PostSubNav = () => {
  return (
    <div className="post-sub-navbar">
        <a href="#home" className="active">All Posts</a>
        <a href="#news">My Personal Posts</a>
        <a href="#contact">My Group Posts</a>
        <a href="#about">Posts By Others</a>
    </div>
  );
};

export default PostSubNav;
