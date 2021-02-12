import React from 'react';
import MainFooter from '../../../Layout/MainFooter/MainFooter';
import { EmployerStaticNavBar } from '../../../Layout/StaticNavBar';
import Banner from './Content/Banner';
import Features from './Content/Features';

const VerifiedDriver = () => {
  return (
    <div className="professional-profile">
      <div className="top-navbar"><EmployerStaticNavBar /></div>
      <div className="banner"><Banner /></div>
      <div className="feature"><Features /></div>
      <div className="MakeFriendship"><MainFooter /></div>
    </div>
  );
};

export default VerifiedDriver;