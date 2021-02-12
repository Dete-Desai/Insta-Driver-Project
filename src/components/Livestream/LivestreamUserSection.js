import React from 'react';

const LivestreamUserSection = ({ viewPastStream }) => {
  return (
    <div className='livestream-user-section'>
      <div className='livestream-user-info'>
        <img
          src='https://images.unsplash.com/photo-1608050803820-ff8aba70184a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
          alt='UserImage'
          className='livestream-user-img'
        />
        <button className='livestream-user-btn'>Arnold Johnson Lead</button>
      </div>
      <div className='livestream-user-counts'>
        <div className='row'>
          <div className='col-md-6 flex-horizontal px-0'>
            <div className='flex-horizontal'>
              <i className='fas fa-users'></i> <span>Connections</span>
            </div>
            <span className='badge badge-pill badge-dark'>23</span>
          </div>
          <div className='col-md-6 flex-horizontal px-0'>
            <div className='flex-horizontal'>
              <i className='fas fa-user-friends'></i> <span>Following</span>
            </div>
            <span className='badge badge-pill badge-dark'>10</span>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 flex-horizontal px-0'>
            <div className='flex-horizontal'>
              <i className='fas fa-user-friends'></i> <span>Followers</span>
            </div>
            <span className='badge badge-pill badge-secondary'>23</span>
          </div>
          <div className='col-md-6 flex-horizontal px-0'>
            <div className='flex-horizontal'>
              <i className='fas fa-users'></i> <span>Groups Joined</span>
            </div>
            <span className='badge badge-pill badge-secondary'>10</span>
          </div>
        </div>
      </div>
      <div className='more-past-stream'>
        <a href='#!' onClick={() => viewPastStream()}>View Arnold's Past Streams</a>
      </div>
    </div>
  );
};

export default LivestreamUserSection;
