import React from 'react';
import serviceIcon1 from '../../../../../dist/images/Mail-file.svg';
import serviceIcon3 from '../../../../../dist/images/job-file.svg';
import serviceIcon5 from '../../../../../dist/images/user-file.svg';

const Services = () => {
  return (
    <section className="">
      <div className="row">
        <div className="col-lg-12">
          <h2 style={{ fontSize: "37px", fontFamily: "Rubik" }} className="section-heading py-4 text-center">Why create a professional Profile on Instadriver!</h2>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="row text-left mt-5">
                <div className="col-lg-6 mb-5">
                  <div className="row">
                    <div className="col-sm-1 text-center mb-4">
                      <img src={serviceIcon1} className="" alt="icon1" />
                    </div>
                    <div className="col-sm-11 px-5">
                      <span style={{ fontSize: "19px", fontFamily: "Rubik", color: "black", fontWeight: "bold" }}>1. Increase the Odds of Getting Employed</span>
                      <div className="row">
                        <div className="col-sm-7">
                          <p className="text-color mt-2">As a driver, you need to widen your job search. Don’t be naive to rely on 1 or 2 companies you have applied to. At Instadriver, your profile will be viewed by the entire country and by the whole world. No geographical boundary. Hence, you increase the odds of getting employed.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="row">
                    <div className="col-sm-1 text-center mb-4">
                      <img src="images/simpel process.svg" className="" alt="icon1" />
                    </div>
                    <div className="col-sm-11 px-5">
                      <span style={{ fontSize: "19px", fontFamily: "Rubik", color: "black", fontWeight: "bold" }}>2. Simple Process</span>
                      <div className="row">
                        <div className="col-sm-7">
                          <p className="text-color mt-2">Just few clicks, and your profile will be viewed by the entire world. Drivers can create their profiles in under 8 minutes. The process is very simple. It is 3 steps: 1) Create your profile; 2) Employers find you and call you; 3) And you get hired. It’s that stupidly simple.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="row">
                    <div className="col-sm-1 text-center mb-4">
                      <img src={serviceIcon3} className="" alt="icon1" />
                    </div>
                    <div className="col-sm-11 px-5">
                      <span style={{ fontSize: "19px", fontFamily: "Rubik", color: "black", fontWeight: "bold" }}>3. Don't stay for months unemployed. It's Not Fun.</span>
                      <div className="row">
                        <div className="col-sm-7">
                          <p className="text-color mt-2">It pains staying without a job. We know how tough it is to reply to someone who asked, “What do you do for a living?” if you are jobless. All you have to do is to create your profile and get employed in few days or weeks. You don't want to stay for a year looking for a job.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="row">
                    <div className="col-sm-1 text-center mb-4">
                      <img src="images/friends.svg" className="" alt="icon1" />
                    </div>
                    <div className="col-sm-11 px-5">
                      <span style={{ fontSize: "19px", fontFamily: "Rubik", color: "black", fontWeight: "bold" }}>4. Stop Nagging Friends and Acquaintances</span>
                      <div className="row">
                        <div className="col-sm-7">
                          <p className="text-color mt-2">Stop harassing your uncle and cousin to find you a job. Just go to Instadriver and create your profile and employers will find you. Not everyone is dedicated to helping you with your unemployment problem. Stop embarrassing yourself in front of your relatives and friends.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm-1 text-center mb-4">
                      <img src={serviceIcon5} className="" alt="icon1" />
                    </div>
                    <div className="col-sm-11 px-5">
                      <span style={{ fontSize: "19px", fontFamily: "Rubik", color: "black", fontWeight: "bold" }}>5. Leverage the driver connection and network</span>
                      <div className="row">
                        <div className="col-sm-7">
                          <p className="text-color mt-2">Most people who made it in life did it with the help of connections and network. Imagine all the drivers of the world converging in one place! What amazing stuff will be shared, how many business and job opportunities fellow comrades will share. Leverage this and change your life.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;