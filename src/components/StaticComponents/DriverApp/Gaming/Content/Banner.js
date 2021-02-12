import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BannerImg from "../../../../../dist/images/gaming-banner.svg";
import {ReactComponent as PointerImg} from "../../../../../dist/images/poniter.svg";


const Banner = () => {
  return (
    <section style={{ background: '#0F0E0E' }} className="py-5 px-4">
      <Row className="">
        <Col lg={11} className="ml-auto">
          <Row className="">
            <h1
              style={{ fontSize: "39px", fontFamily: "Rubik" }}
              className="text-white my-5"
            >
              Connecting drivers globally  with online Multiplayer games
          </h1>
            <Col lg={7} className="pl-0">
              <img src={BannerImg} alt="" className="img-fluid" />
            </Col> <Col lg={5} className="pr-0">
              <p
                style={{ fontSize: "26px", fontFamily: "Rubik" }}
                className="text-white pb-3"
              >
                <PointerImg className="mr-2" fill="white" /> Let’s unite drivers through <br /> &nbsp;&nbsp;&nbsp;&nbsp; gaming
              </p>
              <p
                style={{ fontSize: "26px", fontFamily: "Rubik" }}
                className="text-white pb-3"
              >
                <PointerImg className="mr-2" fill="white" /> Enjoy online-multiplayer <br /> &nbsp;&nbsp;&nbsp;&nbsp; games like racing games
              </p>
              <p
                style={{ fontSize: "26px", fontFamily: "Rubik" }}
                className="text-white pb-3"
              >
                <PointerImg className="mr-2" fill="white" /> Time to have fun with fellow <br /> &nbsp;&nbsp;&nbsp;&nbsp; comrades
              </p>
              <p
                style={{ fontSize: "26px", fontFamily: "Rubik" }}
                className="text-white pb-3"
              >
                <PointerImg className="mr-2" fill="white" /> Uber drivers, don’t ge bored <br /> &nbsp;&nbsp;&nbsp;&nbsp; waiting for rides, play <br /> &nbsp;&nbsp;&nbsp;&nbsp; Instadriver games
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;