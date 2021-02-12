import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SliderImg from '../../../../../dist/images/business-feature.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderContents from './SliderContents';
import './index.css';

const slideContentsData = [
  { id:'201', img: SliderImg, heading: 'Get a unique Instadriver url for your mobility business', text: 'No need of creating a website for your transport business. You can if you want. We provide you with a unique url and you can direct your clients and partners to this url.'},
  { id:'202', img: SliderImg, heading: 'Get a unique Instadriver url for your mobility business', text: 'No need of creating a website for your transport business. You can if you want. We provide you with a unique url and you can direct your clients and partners to this url.'},
  { id:'203', img: SliderImg, heading: 'Get a unique Instadriver url for your mobility business', text: 'No need of creating a website for your transport business. You can if you want. We provide you with a unique url and you can direct your clients and partners to this url.'},
  { id:'204', img: SliderImg, heading: 'Get a unique Instadriver url for your mobility business', text: 'No need of creating a website for your transport business. You can if you want. We provide you with a unique url and you can direct your clients and partners to this url.'},
  { id:'205', img: SliderImg, heading: 'Get a unique Instadriver url for your mobility business', text: 'No need of creating a website for your transport business. You can if you want. We provide you with a unique url and you can direct your clients and partners to this url.'},
]


const Features = () => {
  
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
    <section className="feature-bg">
      <Row className="py-5 d-flex align-items-center">
        <Col xl={10} className="m-auto">
          <Container>
            <div id="sliderStatic" className="">
              <Slider {...settings}>
                {
                  slideContentsData.map((content, i) => <SliderContents content={content} key={i} />)
                }
              </Slider>
            </div>
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default Features;