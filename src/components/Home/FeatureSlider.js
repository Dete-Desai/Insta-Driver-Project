import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SliderImg from '../../dist/images/home-slide-img.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderContents from './SliderContents';
import './index.css';

const slideContentsData = [
  { id: '201', img: SliderImg, heading: 'Cloud based Fleet Management Software For Transport Bussinesses.', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level. Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level' },
  { id: '202', img: SliderImg, heading: 'Cloud based Fleet Management Software For Transport Bussinesses.', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level. Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level' },
  { id: '203', img: SliderImg, heading: 'Cloud based Fleet Management Software For Transport Bussinesses.', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level. Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level' },
  { id: '204', img: SliderImg, heading: 'Cloud based Fleet Management Software For Transport Bussinesses.', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level. Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level' },
  { id: '205', img: SliderImg, heading: 'Cloud based Fleet Management Software For Transport Bussinesses.', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level. Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level' },
]


const FeatureSlider = () => {

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    // cssEase: "linear"

  };
  return (
    <>
      <Col xl={12} className="m-auto py-5">
        <h1
          style={{ fontSize: "40px", fontFamily: "Rubik" }}
          className="heading-color pb-5 text-center"
        >
          FOR EMPLOYERS & BUSINESSES IN MOBILITY
        </h1>
        <Container className="pt-5">
          <div id="homeSlide" className="mt-5">
            <Slider {...settings}>
              {
                slideContentsData.map((content, i) => <SliderContents content={content} key={i} />)
              }
            </Slider>
          </div>
        </Container>
      </Col>
    </>
  );
};

export default FeatureSlider;