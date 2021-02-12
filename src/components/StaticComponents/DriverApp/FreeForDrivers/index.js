import React from 'react';
import { DriverStaticNavBar } from '../../../Layout/StaticNavBar';
import Banner from './Content/Banner';
import Features from './Content/Features';
import MainFooter from '../../../../components/Layout/MainFooter/MainFooter';


const FreeForDrivers = () => {
  return (
    <div className="professional-profile">
      <div className="Banner">
        <Banner />
      </div>
      <div style={{background:"#2A316E"}} className="Features">
        <Features />
      </div>
      <div className="Footer">
        <MainFooter />
      </div>
    </div>
  );
};

export default FreeForDrivers;