import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import arrowBack from '../../../../../dist/images/arrowBack.svg';
import './index.css';

import PostedPhoto1 from '../../../../../dist/images/postPhoto1.png';
import PostedPhoto2 from '../../../../../dist/images/postPhoto2.png';
import PostedPhoto3 from '../../../../../dist/images/postPhoto3.png';
import PostedPhoto4 from '../../../../../dist/images/postPhoto4.png';
import PostedPhoto5 from '../../../../../dist/images/postPhoto5.png';
import PostedPhoto6 from '../../../../../dist/images/postPhoto6.png';
import profileImg from '../../../../../dist/images/profilebanner2.png';


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

const VideoView = () => {

  const history = useHistory();
  const directToPhotoPost = () => { let route = `/employer-profile`; history.push(route); }

  const { key } = useParams()
  const [singleVideoPost, setSingleVideoPost] = useState(null)

  useEffect(() => {
    const postVideoItem = AllPostedData.find(data => data.key === key)
    setSingleVideoPost(postVideoItem)
  }, [key])


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1

  };


  let url = `http://media.w3.org/2010/05/sintel/trailer.mp4`;

  const config = {
    youtube: {
      playerVars: { showinfo: 1 }
    },
    facebook: {
      appId: '12345'
    }
  }

  return (
    <div style={{ background: '#E5E5E5' }} className="pb-5 mx-auto">
      <div className="row">
        <div className="col-md-11 m-auto">
          <div className="row">
            <div className="col-lg-8">
              <span onClick={directToPhotoPost} style={{ cursor: 'pointer' }} className="">
                <img src={arrowBack} alt="" className="w-100" />
              </span>
              <div id="customSlider">
                <Slider {...settings}>
                  {
                    singleVideoPost &&
                    <div>
                      <ReactPlayer
                        url={singleVideoPost.videoUrl}
                        controls={true}
                        playing={true}
                        muted={true}
                        config={config}
                        pip={true}
                        stopOnUnmount={false}
                        width='100%'
                        height='600px'
                      />
                    </div>
                  }
                  <div>
                    <ReactPlayer
                      url={url}
                      controls={true}
                      playing={true}
                      muted={true}
                      config={config}
                      pip={true}
                      stopOnUnmount={false}
                      width='100%'
                      height='600px'
                    />
                  </div>
                  <div>
                    <ReactPlayer
                      url={'http://media.w3.org/2010/05/bunny/trailer.mp4'}
                      controls={true}
                      playing={true}
                      muted={true}
                      config={config}
                      pip={true}
                      stopOnUnmount={false}
                      width='100%'
                      height='600px'
                    />
                  </div>
                </Slider>
              </div>
            </div>
            {
              singleVideoPost &&
              <div className="col-lg-4 mt-4">
                <div className="text-center">
                  <div className="mb-2">
                    <img
                      src={singleVideoPost.businessLogo}
                      className='rounded-circle'
                      height="90"
                      width="90"
                      alt='profile'
                      style={{ border: '1px solid #ADADAD' }}
                    />
                  </div>
                  <h6 className="mb-1">{singleVideoPost.businessName}</h6>
                  <span className="text-muted"> {singleVideoPost.businessUserName}</span>
                  <hr
                    style={{
                      width: "40%",
                      marginTop: 4,
                      marginBottom: 10,
                    }}
                  />
                  <span className="text-orange font-weight-bold">{singleVideoPost.website}</span>
                  <div className="mt-4">
                    <button className="btn View-business bg-orange font-weight-bold">View Business Page</button>
                  </div>
                </div>
                <div className='card mt-4 pb-2'>
                  <div className='card-header card-header-post pb-0'>
                    <span className='float-left post-meta-header'>
                      <span className='posted-title font-weight-bold'>{singleVideoPost.businessName}</span> &nbsp;
                    <span className='hrs-posted'>{singleVideoPost.businessUserName}</span>&nbsp;
                    <span className='hrs-posted'>Posted &nbsp; {singleVideoPost.postTime}</span>
                    </span>
                  </div>
                  <div className='card-body pb-0'>
                    <div className='container'>
                      <div className='card-body-post'>
                        {/* <h6 className='post-title'></h6> */}
                        <p>
                          <span>
                            {singleVideoPost.postText.substr(0, 250)} <span className="font-weight-bold">......</span>
                          </span>
                        </p>
                      </div>
                      <div className="my-4 d-flex justify-content-center align-items-center">
                        <i className="fa fa-eye iconDesign" aria-hidden="true" />&nbsp;
                        <span style={{ color: "#5B5B5B", fontSize: 23 }} className="">90</span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <i className='fas fa-share-alt ml-2 iconDesign' ></i>
                      </div>
                      <div className="text-center pb-3">
                        <Link to={"/post-with-video/" + key}>
                          <button className="open-media">Open post containing this media</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoView;