import React from 'react';
import { Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  let url = `https://www.w3schools.com/tags/movie.mp4`;

  const config={
    youtube: {
      playerVars: { showinfo: 1 }
    },
    facebook: {
      appId: '12345'
    }
  }

  return (
    <Col className="pr-0" xs={4} sm={4} md={4} lg={4}>
      <ReactPlayer
        url={url}
        playing={true}
        muted={true}
        config={config}
        pip={true}
        stopOnUnmount={false}
        width='100%'
        height='120px'
      />
    </Col>
  );
};

export default VideoPlayer;