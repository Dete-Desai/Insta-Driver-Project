import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StartLivestreamImg from '../../../../../dist/images/start-livestream.svg';


const StartLivestream = () => {
  return (
    <section className="profile-feature pb-5 mt-5 px-3">
      <Row className="">
        <Col md={9} className="m-auto">
          <h1
            style={{ fontSize: "39px", fontFamily: "Rubik" }}
            className="heading-color mb-4 text-center"
          >
            Instadriver is the medium for <br /> drivers to self-express
          </h1>
          <div className="py-4 text-center">
            <img src={StartLivestreamImg} alt="" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default StartLivestream;