import React from 'react';
import MainFooter from '../../../Layout/MainFooter/MainFooter';
import { EmployerStaticNavBar } from '../../../Layout/StaticNavBar';
import Banner from './Content/Banner';
import Features from './Content/Features';

import chatBoxImg from '../../../../dist/images/chat-img.svg';
import OrgTypeImg from '../../../../dist/images/org-type.svg';
import OrgTypeImg2 from '../../../../dist/images/org-2.svg';
import OrgTypeImg3 from '../../../../dist/images/org-3.svg';
import OrgTypeImg4 from '../../../../dist/images/org-4.svg';


const featureData = [
  { id: "201", heading: 'Select Organisation type that is custom made for the type of business you run', text: 'We are creating one unified database of drivers. Great and ethical drivers would have an online presence on Instadriver. Learn about this driver before you hire him. It is safer  to hire a driver who has Instadriver account. Use our “Search For Mobility Player” feature to search for specific drivers.', img: OrgTypeImg },
  { id: "200A", heading: 'Chat with your team and customers', text: 'Organisations provides a working space where staff can communicate via a professional chat. One can initiate a conversation which once resolved, the conversation is ended and archived. You can also manage clients inquiries and communication.', img: chatBoxImg },
  { id: "202", heading: 'Be on point on vehicle inspection, maintenance, and issues management', text: 'custom', img: OrgTypeImg2 },
  { id: "200A", heading: 'Data, reports, and analysis to help you optimise on profitability', text: 'Imagine your fleet’s history and occurences stored smartly. And all that data is crunched to give critical reports and analysis and in turn making your business more sustainable.', img: OrgTypeImg3 },
  { id: "204", heading: 'Driver management', text: 'As of now, great driver equals great returns for your transport business. Hence the magic formula is the recruit the best, and managing him well. Utilise the amazing tools built with that aim in mind.', img: OrgTypeImg4 },
];

const CreateOrganizations = () => {
  return (
    <div className="professional-profile">
      <div className="top-navbar"><EmployerStaticNavBar /></div>
      <div className="banner"><Banner /></div>
      <div className="feature">
          {
            featureData.map((feature, i) => <Features feature={feature} key={i} />)
          }
      </div>
      <div className="MakeFriendship"><MainFooter /></div>
    </div>
  );
};

export default CreateOrganizations;