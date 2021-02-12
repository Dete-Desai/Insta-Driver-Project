import React from 'react';
import LivestreamSearch from './LivestreamSearch';

const LivestreamHeader = ({ getSearchInput, hash }) => {  
  const videoChatActive = hash === '/video-chat-new' ? 'custom-active' : '';
  const videoChatHover = hash === '/video-chat-new' ? 'custom-hover' : '';
  const videoChatBold = hash === '/video-chat-new' ? 'custom-bold' : '';
  const livestreamActive = hash === '/livestream-home' ? 'custom-active' : '';
  const livestreamHover = hash === '/livestream-home' ? 'custom-hover' : '';
  const livestreamBold = hash === '/livestream-home' ? 'custom-bold' : '';
  return (
    <div className='row livestream-header'>
      <div className='col-sm-12 col-md-8 col-lg-8 livestream-section1'>
        <div>
          <a href='#!'>
            <i className='fas fa-paste'></i>
            <span>All Content</span>
          </a>
        </div>
        <div>
          <a href='#!'>
            <i className='fas fa-users'></i>
            <span>Instadriver Groups</span>
          </a>
        </div>
        <div>
          <a href='/video-chat-new' className={videoChatHover}>
            <i className={'fas fa-video '+videoChatActive}></i>
            <span className={videoChatBold}>Video Chat</span>
          </a>
        </div>
        <div>
          <a href='/livestream-home' className={livestreamHover}>
            <i className={'fas fa-video '+livestreamActive}></i>
            <span className={livestreamBold}>Livestream</span>
          </a>
        </div>
        <div>
          <a href='#!'>
            <i className='fas fa-gamepad'></i>
            <span>Gaming</span>
          </a>
        </div>
      </div>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <LivestreamSearch getSearchInput={getSearchInput} />
      </div>
    </div>
  );
};

export default LivestreamHeader;
