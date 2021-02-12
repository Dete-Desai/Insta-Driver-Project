import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MapContainer from './MapContainer';
import ParticipantsProfile from './ParticipantsProfile';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserLatLng } from '../../redux/actions/map_actions';

const AllRoomParticipants = () => {
  const { markers } = useSelector(state => state.map_reducers)
  const dispatch = useDispatch();
  console.log(markers);

  return (
    <Container fluid>
      <Row>
        <Col lg={11} className="m-auto">
          <h2 className="text-gray pt-5 pb-3">Video Call Participants & Their Locations</h2>
          <p style={{ fontSize: "25px" }} className="text-gray">Tap the profile icon to view location on map. You can also search by scrolling the map.</p>
          <Row className="mt-5">
            <Col sm={12}>
              <Row className="">
                <Col lg={3} className="">
                  <Row>
                    <Col xs={6} sm={4} md={3} lg={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} sm={4} md={3} lg={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} sm={4} md={3} lg={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} sm={4} md={3} lg={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} sm={4} md={3} lg={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} sm={4} md={3} lg={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} sm={4} md={3} lg={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} sm={4} md={3} lg={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col lg={9} className="ml-auto d-flex justify-content-end">
                  <div className="map-container">
                    <MapContainer markers={markers} />
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-4">
                  <Row>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                    <Col xs={6} className=""> <ParticipantsProfile /> </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AllRoomParticipants;