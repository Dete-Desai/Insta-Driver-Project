import React from 'react';
import { Col } from 'react-bootstrap';

const CardContent = ({ cardData }) => {
  const { title, text, image } = cardData;
  return (
    <>
      <Col md={5}>
        <div style={{width:"500px"}} className="p-5 bg-white m-sm-auto">
          <h1
            style={{ fontSize: "29px", fontFamily: "Rubik" }}
            className="text-dark"
          >
            {title}
          </h1>
          <p
            style={{ fontSize: "18px", fontFamily: "Rubik", fontWeight: 500, color: "#5B5B5B" }}
            className="py-3"
          >
            {text}
          </p>
          <img src={image} alt="" className="img-fluid" />
        </div>
      </Col>
    </>
  );
};

export default CardContent;