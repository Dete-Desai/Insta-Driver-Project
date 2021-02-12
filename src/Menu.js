import React, { Component } from 'react'
import "bootstrap/js/dist/tab"
import "jquery/dist/jquery"


export default class Menu extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Services */}
                    <section id="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="section-heading">How it works</h2>
                                    <img src="dist/img/ocean-waves.png" alt=""/>
                                    <br /><br />
                                    <div className="d-flex justify-content-center">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item tab">
                                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="/#/fake_urlpills-home" role="tab" aria-controls="pills-home" aria-selected="true">For Employers</a>
                                            </li>
                                            <li className="nav-item tab">
                                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="/#/fake_urlpills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">For Drivers</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="row text-center">
                                                <div className="col-md-4">
                                                    <br /><br />
                                                    <img src="dist/img/searchdriver.svg" alt="" />
                                                    <h4 className="service-heading">Search Drivers</h4>
                                                    <p className="text-muted">Visit Instadriver platform, select the driver category you want,
                                                    choose the location of the driver and you can either select all drivers or verified drivers and press search button.</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <br /><br />
                                                    <img src="dist/img/calldriver.svg" alt=""/>
                                                    <h4 className="service-heading">Call Driver</h4>
                                                    <p className="text-muted">After hitting search button, you will see summarised profiles of the
                                                    drivers with their contacts. Click view profile, to read the full profile. Access the contact number and call the driver.</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <br /><br />
                                                    <img src="dist/img/hiredriver.svg" alt="" />
                                                    <h4 className="service-heading">Hire Drivers</h4>
                                                    <p className="text-muted">On the call, discuss the job opportunity, terms and conditions, or
                                                    arrange a meetup to discuss further and if you are both a perfect fit, proceed to hire
                                                    that driver. As simple as that.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="row text-center">
                                                <div className="col-md-4">
                                                    <br /><br />
                                                    <img src="dist/img/searchdriver.svg" alt="" />
                                                    <h4 className="service-heading">Post Profile</h4>
                                                    <p className="text-muted">As a driver, all you need to do is to create an account with
                                                    Instadriver, go to your profile page and update your profile. Once you post your
                                                    profile, employers will be able to find you.</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <br /><br />
                                                    <img src="dist/img/calldriver.svg" alt="" />
                                                    <h4 className="service-heading">Employers find you and call you</h4>
                                                    <p className="text-muted">Employers normally come to Instadriver to find and hire drivers.
                                                    Employers will be able to view your profile, and if they are impressed, they will call
                                                    you and you instantly get a driving job.</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <br /><br />
                                                    <img src="dist/img/hiredriver.svg" alt="" />
                                                    <h4 className="service-heading">And you get hired</h4>
                                                    <p className="text-muted">Instadriver is the best and reliable platform for drivers to get
                                                    hired. When it comes to looking for drivers, employers only know of Instadriver.Leverage Instadriver to get a good job.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Portfolio Grid */}
                    <section className id="portfolio">
                        <div className="container-fluid">
                            <div className="row imagewave">
                                <div className="col-lg-6 bg-light text-center padding501">
                                    <div className="col-lg-9 float-right">
                                        <img src="dist/img/employees.svg" alt="" /><br /><br />
                                        <h2 className="section-heading text-center">Employers!</h2>
                                        <img src="dist/img/ocean-waves.png" alt="" />
                                        <p>You don’t have to waste money posting vacancy Ads. Stop posting vacancy ads on whatsapp groups
                                        and on social media. Stop making desperate hires because you have few choices. Stop nagging your
                                        friends to find you a driver. Get your driver from Instadriver and it is free. At Instadriver,
                                        you have a long list to choose a competent driver. Go to search bar, select the driver category
                                        you want, choose the location of the driver and press search button. Pick the driver you want. It is that simple and instantaneous.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 text-center yellowbg">
                                    <div className="col-lg-9 float-left">
                                        <img src="dist/img/drivers.svg" alt="" /><br /><br />
                                        <h2 className="section-heading text-center">Drivers!</h2>
                                        <img src="dist/img/ocean-waves-white.png" alt="" />
                                        <p>This is a platform to get employed faster and effortlessly. It is not fun staying unemployed.
                                        You don’t have to toil asking your relatives, friends and acquaintances to find you a job. Get a
                                        job instantly. Just post your profile on Instadriver and employers will find you
                                        instantaneously. You can increase your visibility and increase the odds of getting hired by
                                        using the <a href="/#/verified_search.html" style={{ color: '#fff' }}>Verified Feature</a> and the <a style={{ color: '#fff' }} href="/#/top_ad_features.html">Top Add Feature</a>. To create your profile
                                        for free, click <a style={{ color: '#fff' }} href="/#/login.html">here</a>. This is how millennials and
                                        Gen Z find employment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About */}
                    <div className="about">
                        <div className="container">
                            <div className="col-lg-12 text-center">
                                <div className="row text-center">
                                    <div className="col-md-4">
                                        <br /><br />
                                        <a href="/#/about_us.html"><img src="dist/img/aboutus.svg" alt="" />
                                            <h4 className="service-heading" onclick="location.href='https://www.instadriver.co/about_us">About us</h4>
                                        </a>
                                        <p className="text-muted" style={{ color: '#fff !important' }}>Learn how useful <br />Instadriver is to <br /> both the employer and drivers</p>
                                    </div>
                                    <div className="col-md-4">
                                        <br /><br />
                                        <a href="/#/verified_search.html"><img src="dist/img/verify.svg" alt="" />
                                            <h4 className="service-heading">Verified Search</h4>
                                        </a>
                                        <p className="text-muted" style={{ color: '#fff !important' }}>Learn how employers can <br />cut the curve and save <br /> a lot by using verified search</p>
                                    </div>
                                    <div className="col-md-4">
                                        <br /><br />
                                        <a href="/#/top_ad_features.html"><img src="dist/img/topadd.svg" alt="" />
                                            <h4 className="service-heading">Top Ad Feature</h4>
                                        </a>
                                        <p className="text-muted" style={{ color: '#fff !important' }}>See how top ad feature <br />can increase the odds <br /> of a driver getting hired</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team */}
                    <section className="bg-light country" id="team">
                        <div className="container-fluid">
                            <div className="row text-center">
                                <div className="col-lg-12">
                                    <h2 className="section-heading">Driver Profiles posted on Instadriver</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center" style={{ padding: '8px 0px' }}>
                                <div className="d-flex justify-content-center">
                                    <div className="col-sm-3 text-center">
                                        <div className="box1">
                                            <h2 className="service-heading boxstyle1 mb-0">108</h2>
                                            <h4 className="service-heading boxtext1">Free Driver Profiles </h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 text-center">
                                        <div className="box2">
                                            <h2 className="service-heading boxstyle2">7</h2>
                                            <h4 className="service-heading boxtext1">Verified Driver Profiles </h4>
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
}
