import React from 'react'
import PropTypes from 'prop-types'

const ABoutPage = props => {
    return (
        <div>
                  <div>
        <section className="searchbg title">
          <div className>
            <div className="container">
              <div className>
                About Us 
              </div>
            </div>
          </div></section>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 text-left mt-3 mb-3 pb-3">
              <h3 className="section-heading">About Us</h3>
              <img src="images/ocean-waves.png" /><br /><br />
              Instadriver wants to simplify your life. Instadriver is a portal to connect employers with drivers and a portal to assist drivers find employment with ease. Hiring a driver should be fast as sending a message to your friend’s inbox. Instantly. See below the benefits you will get.
              <br /><br />
              Institutions that are using this platform to hire drivers include: Schools and school transport companies; corporations and government institutions, ride-hailing partners, individuals looking for personal drivers, truck-companies, companies looking for forklift drivers, et cetera. It is a platform to make anything moving, get moved. 
            </div>
            <div className="col-lg-7 text-left mt-3 mb-3 pb-3">
              <img src="dist/img/about.svg"  className="img-fluid" />
            </div>
          </div>
        </div>
        <section className="yellowbg12">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading mb-1">Benefits of Using InstaDriver</h2>
                <img src="images/ocean-waves.png" />
                <br /><br />
                <div className="d-flex justify-content-center">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item tab">
                      <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">For Employers</a>
                    </li>
                    <li className="nav-item tab">
                      <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">For Drivers</a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row text-left mt-5">
                      <div className="col-lg-6 sample mb-5">
                        <img src="images/save.svg" className="iconleft" /><span>1. Save Time and Money</span><br />
                        No more paying for costly vacancy ads. Instadriver is free. Speed is the new currency, and with Instadriver, you cut the “find-a-driver” curve. All you need is to visit our platform and do an online search and Lo behold, you instantaneously view all the listed drivers.
                      </div>
                      <div className="col-lg-6 sample mb-5">
                        <img src="images/simpel process.svg" className="iconleft" /><span>2. Simple Process</span><br />
                        Instadriver has simplified the process of hiring a driver. You only need to select driver category, his location, and click search button. That’s it. All the drivers in the search results have contact numbers alongside their profile. You call and hire. As simple as that.
                      </div>
                      <div className="col-lg-6 sample mb-5">
                        <img src="images/desperate.svg" className="iconleft" /><span>3. Avoid Desperate Hire</span><br />
                        You have heard the phrase, “clever among fools”? If you hire a driver from a list of 3 applicants, you may end up hiring an average or poor driver. But if you have a long list of applicants to select from, you will pick the best. People hire desperately due to limited options. 
                      </div>
                      <div className="col-lg-6 sample mb-5">
                        <img src="images/friends.svg" className="iconleft" /><span>4. Stop Nagging Friends and Acquaintances</span><br />
                        You are looking for a driver, and the conventional way to go about it is to ask your close friends and acquaintances if they know of a driver looking for a job. These times are long gone. Everything is now online, just go to Instadriver, select location and search drivers.
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="row text-left mt-5">
                      <div className="col-lg-6 sample mb-5">
                        <img src="images/employeed.svg" className="iconleft" /><span>1. Increase the Odds of Getting Employed</span><br />
                        As a driver, you need to widen your job search. Don’t be naive to rely on 1 or 2 companies you have applied to. At Instadriver, your profile will be viewed by the entire country and by the whole world. No geographical boundary. Hence, you increase the odds of getting employed.
                      </div>
                      <div className="col-lg-6 sample mb-5">
                        <img src="images/simpel process.svg" className="iconleft" /><span>2. Simple Process</span><br />
                        Just few clicks, and your profile will be viewed by the entire world. Drivers can create their profiles in under 8 minutes. The process is very simple. It is 3 steps: 1) Create your profile; 2) Employers find you and call you; 3) And you get hired. It’s that stupidly simple.
                      </div>
                      <div className="col-lg-6 sample mb-5">
                        <img src="images/unemployeed.svg" className="iconleft" /><span>3. Don't stay for months unemployed. It's Not Fun.</span><br />
                        It pains staying without a job. We know how tough it is to reply to someone who asked, “What do you do for a living?” if you are jobless. All you have to do is to create your profile and get employed in few days or weeks. You don't want to stay for a year looking for a job.
                      </div>
                      <div className="col-lg-6 sample mb-5">
                        <img src="images/friends.svg" className="iconleft" /><span>4. Stop Nagging Friends and Acquaintances</span><br />
                        Stop harassing your uncle and cousin to find you a job. Just go to Instadriver and create your profile and employers will find you. Not everyone is dedicated to helping you with your unemployment problem. Stop embarrassing yourself in front of your relatives and friends.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        </div>
    )
}

ABoutPage.propTypes = {

}

export default ABoutPage
