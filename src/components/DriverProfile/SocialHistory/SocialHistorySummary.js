import React from 'react';
import SummaryCard from './SummaryCard';
import connectionIcon from '../../../dist/icons/connection.png';
import followingIcon from '../../../dist/icons/following.png';
import postIcon from '../../../dist/icons/post.png';
import followersIcon from '../../../dist/icons/followers.png';
import videoIcon from '../../../dist/icons/video.png';
import groupIcon from '../../../dist/icons/group.png';
import rePostIcon from '../../../dist/icons/Repost.png';
import liveStreamIcon from '../../../dist/icons/liveStream.png';

const SummaryData = [
  {id: "20201", icon: connectionIcon, value: '23', heading: 'Connections'},
  {id: "20202", icon: groupIcon, value: '2', heading: 'Groups Joined'},
  {id: "20203", icon: postIcon, value: '1K', heading: 'Posts'},
  {id: "20204", icon: rePostIcon, value: '23', heading: 'Reposts'},
  {id: "20205", icon: followersIcon, value: '50', heading: 'Followers'},
  {id: "20206", icon: followingIcon, value: '23', heading: 'Following'},
  {id: "20207", icon: videoIcon, value: '50', heading: 'Group Video Calls Joined'},
  {id: "20208", icon: liveStreamIcon, value: '12', heading: 'Livestreams'},
]

const SocialHistorySummary = () => {
 
  return (
    <div className="row my-4">
    {
      SummaryData.map(summary => <SummaryCard summary={summary} key={summary.id}/>)
    }
  </div>
  );
};

export default SocialHistorySummary;