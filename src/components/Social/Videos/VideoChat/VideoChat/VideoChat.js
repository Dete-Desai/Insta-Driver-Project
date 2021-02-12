import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import MainTab from '../MainTab/MainTab';

const VideoChat = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={11} className="ml-auto">
          <MainTab />
        </Col>
      </Row>
    </Container>
  );
};

export default VideoChat;