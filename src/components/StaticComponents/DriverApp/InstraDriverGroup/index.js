import React from 'react';
import { DriverStaticNavBar } from '../../../Layout/StaticNavBar';
import Banner from './Content/Banner';
import Group from './Content/Group';
import MakeFriendship from './Content/MakeFriendship';
import Media from './Content/Media';
import MainFooter from '../../../../components/Layout/MainFooter/MainFooter';


const ProfileHome = () => {
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
      <div className="Media">
        <Media />
      </div>
      <div className="MakeFriendship">
        <MakeFriendship />
      </div>
      <div className="MakeFriendship">
        <MainFooter />
      </div>
    </div>
  );
};

export default ProfileHome;