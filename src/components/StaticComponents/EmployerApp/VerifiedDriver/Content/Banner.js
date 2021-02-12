import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';



const Banner = () => {
  let url = `https://youtu.be/GhEQ37BiNJI`;

  const config={
    youtube: {
      playerVars: { showinfo: 1 }
    },
    facebook: {
      appId: '12345'
    }
  }
  return (
    <section className="p-5">
      <Row className="">
        <Col md={12} className="">
          <Row className="">
            <Col xl={6} className="p-0">
              <div className="pl-5 pt-4">
                <h1
                  style={{ fontSize: "50px", fontFamily: "Rubik" }}
                  className="heading-color pb-5"
                >
                  Hire the genuinely competent drivers
                </h1>
                <Row>
                  <Col xl={10} className="pr-5 pb-3">
                    <span
                      style={{ fontSize: "23px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
                      className=""
                    >
                      Verified drivers get verification badge. We give you exclusive access to view and recruit them.
                      Be safe and make your business more sustainable by hiring verified drivers.
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xl={6} className="p-0">
              <ReactPlayer
                url={url}
                playing={false}
                controls={true}
                muted={false}
                config={config}
                pip={true}
                stopOnUnmount={false}
                width='100%'
                height='500px'
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;