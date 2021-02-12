import React from 'react';
import { Row } from 'react-bootstrap';
import featureImg1 from '../../dist/images/Feature-img1.svg';
import featureImg2 from '../../dist/images/Feature-img2.svg';
import featureImg3 from '../../dist/images/Feature-img3.svg';
import featureImg4 from '../../dist/images/Feature-img4.svg';
import featureImg5 from '../../dist/images/Feature-img5.svg';
import CardContent from './CardContent';

const featureCardData = [
  { id:'FC1', title:'Connect. Self-express', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level', image:featureImg1},
  { id:'FC2', title:'Create and join groups', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level', image:featureImg2},
  { id:'FC3', title:'Livestream', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level', image:featureImg3},
  { id:'FC4', title:'Group Video Call', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level', image:featureImg4},
  { id:'FC5', title:'Online games with comrades', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level', image:featureImg5},
  { id:'FC6', title:'Create a Professional Profile', text: 'Instadriver Groups enables drivers to create and join groups. A tool to help create unity, join a cause, take your business to the next level', image:featureImg2},
]

const FeatureCard = () => {
  return (
    <>
      <Row className="d-flex justify-content-between">
        {
          featureCardData.map((cardData, i) =><CardContent cardData={cardData} key={i}/>)
        }
      </Row>
    </>
  );
};

export default FeatureCard;