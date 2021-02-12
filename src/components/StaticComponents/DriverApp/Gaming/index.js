import React from 'react';
import { DriverStaticNavBar } from '../../../Layout/StaticNavBar';
import Banner from './Content/Banner';
import Group from './Content/Group';
import MainFooter from '../../../Layout/MainFooter/MainFooter';


const Gaming = () => {
  return (
    <div className="professional-profile">
      <div className="top-navbar">
        <DriverStaticNavBar />
      </div>
      <div className="Banner">
        <Banner />
      </div>
      <div className="Group">
        <Group />
      </div>
      <div className="MainFooter">
        <MainFooter />
      </div>
    </div>
  );
};

export default Gaming;