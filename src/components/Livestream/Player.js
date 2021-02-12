import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

const Player = ({
  playing,
  muted,
  width,
  height,
  pip,
  stopOnUnmount,
}) => {
  const { video } = useSelector(state => state.streams);

  let url;

  if (video !== null) {
    url = video.url
  } else {
    url = "https://player.vimeo.com/external/458870654.sd.mp4?s=916cda2ca52f2a77d377f13c2d05cd749c890190&profile_id=165&oauth2_token_id=57447761"
  }

  const styles = {
    borderRadius: '12px',
  };

  const config = {
    youtube: {
      playerVars: {
        modestbranding: 1,
        showinfo: 1,
      },
    },
  };

  const widthVar = width === undefined ? '100%' : '200px';
  const heightVar = height === undefined ? '100%' : '200px';

  return (
    <ReactPlayer
      url={url}
      height={heightVar}
      width={widthVar}
      playing={playing}
      style={styles}
      muted={muted}
      pip={pip}
      stopOnUnmount={stopOnUnmount}
      config={config}
    />
  );
};

export default Player;
