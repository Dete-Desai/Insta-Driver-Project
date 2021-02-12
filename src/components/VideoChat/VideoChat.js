import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LivestreamHeader from '../Livestream/LivestreamHeader';
import Map from './Map';
import { getUserLatLng } from '../../redux/actions/map_actions';
import './index.css';

const centers = [
  {
    id: 1,
    lat: -1.292066,
    lng: 36.821945,
    city: 'Nairobi',
    icon: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 2,
    lat: -1.281950,
    lng: 36.749880,
    city: 'Kawangware',
    icon: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 3,
    lat: -1.2439,
    lng: 36.8808,
    city: 'Ruaraka',
    icon: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 4,
    lat: -1.232328,
    lng: 36.807529,
    city: 'Gigiri',
    icon: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 5,
    lat: -1.148030,
    lng: 36.960590,
    city: 'ruiru',
    icon: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 6,
    lat: -1.189310,
    lng: 37.116371,
    city: 'Juja',
    icon: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 7,
    lat: -1.310360,
    lng: 36.789590,
    city: 'Kibera',
    icon: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 8,
    lat: -1.202510,
    lng: 36.904781,
    city: 'Kahawa',
    icon: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
];

const VideoChat = () => {
  const { markers } = useSelector(state => state.map_reducers)
  const hash = window.location.pathname;
  const dispatch = useDispatch();
  console.log(markers);

  return (
    <React.Fragment>
      <div className="container">
        <LivestreamHeader hash={hash} />
      </div>
      <div className="mt-4 bg-gray">
        <div className="row width-100">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="video-call-vectors">
              <div className="social-connect">
              All  drivers of the world. Social connect with fellow comrades via Group Video Calling
              </div>
              <img src="/images/Rectangle 361.png" alt="CurveRectange" className="curved-image-one"/>
              <img src="/images/Vector 54.png" alt="Vector54" className="curved-image-two"/>
              <img src="/images/Vector 55.png" alt="Vector55" className="curved-image-three"/>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="image-iphone-div">
            <img src="/images/131961762048538 1.png" alt="Iphone" className="image-iphone"/>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="video-signup">
              <div className="video-signup-text">
              Sign Up to Video Call Your Fellow Drivers!
              </div>
              <a href="#!" className="video-signup-link">Driver Sign Up</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="other-than">
              Other than connecting to your peers, know the traffic condition by entering a group call based on specific location.
              </div>
            </div>
            <div className="col-sm-12 col-md-9 col-lg-9">
              <div className="card card-body">
                <div className="tap-the-profile">Tap the profile icon to view location on map. You can also search by scrolling the map.</div>
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4 users-call-container">
                    <div onClick={() => dispatch(getUserLatLng(centers[0]))} className="users-call-box">
                      <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="UserAvatar" className="users-call-box-img"/>
                      <span className="user-name">Karry John</span>
                      <span className="username">@JohntheD</span>
                      <div className="user-location">New York, USA</div>
                    </div>
                    <div onClick={() => dispatch(getUserLatLng(centers[1]))} className="users-call-box">
                      <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="UserAvatar" className="users-call-box-img"/>
                      <span className="user-name">Karry John</span>
                      <span className="username">@JohntheD</span>
                      <div className="user-location">New York, USA</div>
                    </div>
                    <div onClick={() => dispatch(getUserLatLng(centers[2]))} className="users-call-box">
                      <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="UserAvatar" className="users-call-box-img"/>
                      <span className="user-name">Karry John</span>
                      <span className="username">@JohntheD</span>
                      <div className="user-location">New York, USA</div>
                    </div>
                    <div onClick={() => dispatch(getUserLatLng(centers[3]))} className="users-call-box">
                      <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="UserAvatar" className="users-call-box-img"/>
                      <span className="user-name">Karry John</span>
                      <span className="username">@JohntheD</span>
                      <div className="user-location">New York, USA</div>
                    </div>
                    <div onClick={() => dispatch(getUserLatLng(centers[4]))} className="users-call-box">
                      <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="UserAvatar" className="users-call-box-img"/>
                      <span className="user-name">Karry John</span>
                      <span className="username">@JohntheD</span>
                      <div className="user-location">New York, USA</div>
                    </div>
                    <div onClick={() => dispatch(getUserLatLng(centers[5]))} className="users-call-box">
                      <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="UserAvatar" className="users-call-box-img"/>
                      <span className="user-name">Karry John</span>
                      <span className="username">@JohntheD</span>
                      <div className="user-location">New York, USA</div>
                    </div>
                    <div onClick={() => dispatch(getUserLatLng(centers[6]))} className="users-call-box">
                      <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="UserAvatar" className="users-call-box-img"/>
                      <span className="user-name">Karry John</span>
                      <span className="username">@JohntheD</span>
                      <div className="user-location">New York, USA</div>
                    </div>
                    <div onClick={() => dispatch(getUserLatLng(centers[7]))} className="users-call-box">
                      <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="UserAvatar" className="users-call-box-img"/>
                      <span className="user-name">Karry John</span>
                      <span className="username">@JohntheD</span>
                      <div className="user-location">New York, USA</div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="card card-body py-0 px-0">
                      <div id="map-box-2">
                        <Map markers={markers} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="conference-img-box">
                <img src="/images/Rectangle 364.png" alt="AdvertImg" className="conference-img"/>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="conference-text">
              And ofcourse, you can do serious stuff. Like conference call with your organziation or employer you are working for
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoChat;