import React from "react";
import "../../../../dist/css/driverpostreposts.css";
import ProfileBar from "./ProfileBar";
import LivestreamPlayer from "./LivestreamPlayer";
import PostComments from "./PostComments";
import CommentInput from "./CommentInput";

const LiveStreamPostCard = () => {
  return (
    <div className="live-stream-post-card">
        <ProfileBar />
        <LivestreamPlayer />
      <div className="row">
        <div className="live-stream-comment-card1">
            <PostComments />
            <CommentInput />
        </div>
      </div>
    </div>
  );
};

export default LiveStreamPostCard;
