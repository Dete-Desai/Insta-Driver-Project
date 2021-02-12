import React from 'react';
import searchImg from '../../../../../dist/images/searchBig.svg';
import phoneBig from '../../../../../dist/images/phoneBig.svg';
import wheelImg from '../../../../../dist/images/wheel.svg';

const HowItWorks = () => {
  return (
    <section> 
      <div className="row text-center">
        <div className="col-12 text-center py-5">
          <h1 style={{ fontSize: "54px", fontFamily: "Rubik" }} className="heading-color">How It works!</h1>
        </div>
        <div className="col-md-4">
          <br /><br />
          <img src={searchImg} alt="" className="mb-5" />
          <h4 style={{ fontSize: "19px", fontFamily: "Rubik", color:"black" }} className="service-heading my-0 mb-5">Create Profile</h4>
          <p style={{color: "#969393" }}>As a driver, all you need to do is to create an account with Instadriver, go to your profile page and update your profile. Once you post your profile, employers will be able to find you.</p>
        </div>
        <div className="col-md-4">
          <br /><br />
          <img src={phoneBig} alt="" className="mb-5" />
          <h4 style={{ fontSize: "19px", fontFamily: "Rubik", color:"black" }} className="service-heading mb-5">Employers find you and call you</h4>
          <p style={{color: "#969393" }}>Employers normally come to Instadriver to find and hire drivers. Employers will be able to view your profile, and if they are impressed, they will call you and you instantly get a driving job.</p>
        </div>
        <div className="col-md-4">
          <br /><br />
          <img src={wheelImg} alt="" className="mb-5" />
          <h4 style={{ fontSize: "19px", fontFamily: "Rubik", color:"black" }} className="service-heading mb-5">And you get hired</h4>
          <p style={{color: "#969393" }}>Instadriver is the best and reliable platform for drivers to get hired. When it comes to looking for drivers, employers only know of Instadriver. Leverage Instadriver to get a good job.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;