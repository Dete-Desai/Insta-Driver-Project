import React from 'react';
import MainFooter from '../../../../components/Layout/MainFooter/MainFooter';
import {DriverStaticNavBar} from '../../../../components/Layout/StaticNavBar';
import Group from './Content/Banner';
import MakeFriendship from './Content/Feature';
import Media from './Content/StartLivestream';



const LiveStream = () => {
  return (
    <div className="professional-profile">
      <div className="top-navbar">
        <DriverStaticNavBar />
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

export default LiveStream;