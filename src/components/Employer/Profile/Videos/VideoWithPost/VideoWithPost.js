import React, { useEffect, useState } from 'react';
import './index.css';
import { useHistory, useParams } from 'react-router-dom';
import arrowBack from '../../../../../dist/images/arrowBack.svg';
import ReactPlayer from 'react-player';

import PostedPhoto1 from '../../../../../dist/images/postPhoto1.png';
import PostedPhoto2 from '../../../../../dist/images/postPhoto2.png';
import PostedPhoto3 from '../../../../../dist/images/postPhoto3.png';
import PostedPhoto4 from '../../../../../dist/images/postPhoto4.png';
import PostedPhoto5 from '../../../../../dist/images/postPhoto5.png';
import PostedPhoto6 from '../../../../../dist/images/postPhoto6.png';
import profileImg from '../../../../../dist/images/profilebanner2.png'

var AllPostedData = [
  {
    key: "2020A",
    PostedPhoto: PostedPhoto1,
    businessLogo: profileImg,
    businessName: "Hud Hud",
    businessUserName: "@Hudhud",
    postTime: "2h ago",
    website: "www.hudhud.co",
    videoUrl: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    postText: "This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear masks as they drive for the ride-hailing taxis. Keep safe, life matters.",
  },
  {
    key: "2020B",
    PostedPhoto: PostedPhoto2,
    businessLogo: profileImg,
    businessName: "Hud Hud",
    businessUserName: "@Hudhud",
    postTime: "2h ago",
    website: "www.hudhud.co",
    videoUrl: "http://www.w3schools.com/html/mov_bbb.mp4",
    postText: "This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear masks as they drive for the ride-hailing taxis. Keep safe, life matters.",
  },
  {
    key: "2020C",
    PostedPhoto: PostedPhoto3,
    businessLogo: profileImg,
    businessName: "Hud Hud",
    businessUserName: "@Hudhud",
    postTime: "2h ago",
    website: "www.hudhud.co",
    videoUrl: "http://media.w3.org/2010/05/bunny/trailer.mp4",
    postText: "This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear masks as they drive for the ride-hailing taxis. Keep safe, life matters.",
  },
  {
    key: "2020D",
    PostedPhoto: PostedPhoto4,
    businessLogo: profileImg,
    businessName: "Hud Hud",
    businessUserName: "@Hudhud",
    postTime: "2h ago",
    website: "www.hudhud.co",
    videoUrl: "http://media.w3.org/2010/05/sintel/trailer.mp4",
    postText: "This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear masks as they drive for the ride-hailing taxis. Keep safe, life matters.",
  },
  {
    key: "2020E",
    PostedPhoto: PostedPhoto5,
    businessLogo: profileImg,
    businessName: "Hud Hud",
    businessUserName: "@Hudhud",
    postTime: "2h ago",
    website: "www.hudhud.co",
    videoUrl: "http://www.w3schools.com/html/mov_bbb.mp4",
    postText: "This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear masks as they drive for the ride-hailing taxis. Keep safe, life matters.",
  },
  {
    key: "2020F",
    PostedPhoto: PostedPhoto6,
    businessLogo: profileImg,
    businessName: "Hud Hud",
    businessUserName: "@Hudhud",
    postTime: "2h ago",
    website: "www.hudhud.co",
    videoUrl: "http://media.w3.org/2010/05/bunny/trailer.mp4",
    postText: "This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear masks as they drive for the ride-hailing taxis. Keep safe, life matters.",
  },
]



const VideoWithPost = () => {
  const history = useHistory();
  const directToPhotoPost = () => { let route = `/employer-profile`; history.push(route); }
  const directToPost = () => { let route = `/employer-profile`; history.push(route); }

  const { key } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const postItem = AllPostedData.find(data => data.key === key)
    setPost(postItem)
  }, [key])

  //for video player custom control
  const config = {
    youtube: {
      playerVars: { showinfo: 1 }
    },
    facebook: {
      appId: '12345'
    }
  }
  return (
    <div style={{ background: '#E5E5E5' }} className="py-5">
      {
        post &&
        <div className="row">
          <div className="col-md-10 m-auto text-center">
            <span onClick={directToPhotoPost} style={{ cursor: 'pointer', }} className="">
              <img src={arrowBack} alt="" className="img-fluid" />
            </span>
            <div className="col-md-9 col-lg-6 col-xl-5 m-auto py-5">
              <div className='card'>
                <div className='card-header card-header-post pb-0'>
                  <span className='float-left post-meta-header'>
                    <span className='posted-title'>Posted</span>&nbsp;
                  <span className='hrs-posted'>{post.postTime}</span>
                  </span>
                  <span className='float-right post-meta-header-icon d-flex align-items-center pt-3'>
                    <i className='fas fa-share-alt mr-2' style={{ color: "rgb(224 221 221)" }}></i>
                  </span>
                </div>
                <div className='card-body pb-0'>
                  <div className='container'>
                    <div className='card-body-post'>
                      {/* <h6>{title}</h6> */}
                      <p>{post.postText}</p>
                    </div>

                    <div className="my-3">
                      <ReactPlayer
                        url={post.videoUrl}
                        controls={true}
                        playing={false}
                        muted={true}
                        config={config}
                        pip={true}
                        stopOnUnmount={false}
                        width='100%'
                        height='280px'
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div onClick={directToPost} className="text-center pb-3">
              <button className="see-all-post">See all posts from this business</button>
            </div>
          </div>

        </div>
      }
    </div>
  );
};

export default VideoWithPost;