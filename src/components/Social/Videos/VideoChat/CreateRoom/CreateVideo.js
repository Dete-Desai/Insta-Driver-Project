import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import MemberProfile from './MemberProfile';
import SearchMember from './SearchMember';

const CreateVideo = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={10} className="ml-auto">
          <Row>
            <Col md={5} className="my-5">
              <h2
                className="text-gray p-2"
                style={{ borderBottom: '1px solid #787878', width: "250px" }}
              >
                Create Video
                </h2>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="">
              <h4 className="text-gray p-2 mb-4">Video Status</h4>
            </Col>
            <Col md={10} className="">
              <Form>
                <fieldset>
                  <Form.Group as={Row}>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Public (Random Drivers Can Join)"
                        name="videoStatus"
                        id="publicRadio"
                        className="video-chat-radio"
                        checked
                      />
                      <Form.Check
                        type="radio"
                        label="Private (Only drivers you invite can join)"
                        name="videoStatus"
                        id="privateRadio"
                        className="video-chat-radio"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={10} className="my-2">
              <SearchMember />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={10} className="my-2">
              <h5 className="text-gray pl-5 py-2">Added Driver</h5>
              <div className="driverCard py-5">
                <Row className="">
                  <Col sm={12} className="my-3">
                    <Row className="">
                      <Col sm={6} md={4} xl={3} className="mb-5"> <MemberProfile /> </Col>
                      <Col sm={6} md={4} xl={3} className="mb-5"> <MemberProfile /> </Col>
                      <Col sm={6} md={4} xl={3} className="mb-5"> <MemberProfile /> </Col>
                      <Col sm={6} md={4} xl={3} className="mb-5"> <MemberProfile /> </Col>
                      <Col sm={6} md={4} xl={3} className="mb-5"> <MemberProfile /> </Col>
                      <Col sm={6} md={4} xl={3} className="mb-5"> <MemberProfile /> </Col>
                      <Col sm={6} md={4} xl={3} className="mb-5"> <MemberProfile /> </Col>
                      <Col sm={6} md={4} xl={3} className="mb-5"> <MemberProfile /> </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="mt-2">
                <button className="btn createVideo bg-orange mt-4 font-weight-bold">Create Video</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateVideo;