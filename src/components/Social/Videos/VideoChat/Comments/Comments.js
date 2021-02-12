import React from 'react';
import { Col } from 'react-bootstrap';



const Comments = ({ comment }) => {

  return (
    <div className="mb-4 row position-relative">
      <div 
      className="p-0 position-absolute"
      style={{ zIndex:"999" }}
      >
        <span><img style={{ width: "60px", height: "60px", borderRadius: '50%' }} src={comment.picture} alt="user" /></span>
      </div>
      <Col sm={12} className="pl-4 ml-auto">
        <div className="mb-2 pl-5">
          <span className="pr-2 font-weight-bold">{comment.name}</span>
          <span className="text-muted pr-3">{comment.username}</span>
          <span className="text-muted">{comment.time}</span>
        </div>
        <div className="p-2 commentStyle pl-5"> 
          <span className="">{comment.msg}</span>
        </div>
      </Col>
    </div>
  );
};

export default Comments;