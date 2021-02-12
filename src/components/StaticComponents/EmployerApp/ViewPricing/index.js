import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PricingMenu from './PricingMenu';
import TableContent from './TableContent';



 const ViewPricing = () => {

  const [showYearlyPrice, setShowYearlyPrice] = useState(false)


  return (
    <div className="view-pricing px-2 py-4">
      <Col xl={12} className="py-5">
        <Row>
          <PricingMenu
            showYearlyPrice={showYearlyPrice}
            setShowYearlyPrice={setShowYearlyPrice}
          />
        </Row>
      </Col>
      <Col xl={12} className="pb-5">
        <TableContent showYearlyPrice={showYearlyPrice} />
      </Col>
    </div >
  );
};
export default ViewPricing;
