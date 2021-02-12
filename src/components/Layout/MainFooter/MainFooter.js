import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as GreaterIcon } from "../../../dist/icons/greaterIcon.svg"

export default function MainFooter() {
  return (
    <div style={{ background: "#3B3B3B" }} className="py-5 pl-5">
      <div className="col-xl-11 m-auto">
        <footer>
          <div className="row">
            <div className="col-md-6 col-lg-3 col-sm-6 text-left p-0">
              <h4 className="service-heading text-left text-white mb-3 mb-4">Features for drivers app</h4>
              <NavLink
                to="/professional-profile"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Professional Profile
                <br />
              </NavLink>
              <NavLink
                to="/instadriver-groups"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Instadriver Groups
                <br />
              </NavLink>
              <NavLink
                to="/group-video-call"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Group Video Call
                <br />
              </NavLink>
              <NavLink
                to="/livestream-page"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Livestream
                <br />
              </NavLink>
              <NavLink
                to="/gaming"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Gaming
                <br />
              </NavLink>
              <NavLink
                to="/free-for-drivers"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Why free for drivers
                <br />
              </NavLink>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 text-left p-0">
              <h4 className="service-heading text-left text-white mb-4">Features for employers app</h4>
              <NavLink
                to="/driver-recruitment-static"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Driver Recruitment
            </NavLink>
              <NavLink
                to="/create-organizations"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Create Organizations
              </NavLink>
              <NavLink
                to="/business-page"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Business Page
              </NavLink>
              <NavLink
                to="/verified-driver"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Access Verified Drivers
              </NavLink>
              <NavLink
                to="/pricing-page"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Pricing
              </NavLink>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 text-left pr-0">
              <h4 className="service-heading text-left text-white mb-4">Social Media</h4>
              <ul className="pl-0">
                <li className="list-inline-item">
                  <a
                    href="/#/https://www.facebook.com/instadrivers"
                    target="_blank"
                  >
                    <img src="dist/img/facebook.svg" alt="" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/#/https://twitter.com/Instadriver1" target="_blank">
                    <img src="dist/img/twitter.svg" alt="" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="/#/https://www.youtube.com/channel/UCIyNdSi0KEi0mIGblffLkpg/featured?disable_polymer=1"
                    target="_blank"
                  >
                    <img src="dist/img/youtube.svg" alt="" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="/#/https://www.instagram.com/instadriverx/"
                    target="_blank"
                  >
                    <img src="dist/img/instagram.svg" alt="" />
                  </a>
                </li>
              </ul>
              <br />
            </div>
            <div className="col-md-6 col-lg-3 col-sm-6 text-left p-0">
              <h4 className="service-heading text-left text-white mb-4">Important Links</h4>
              <NavLink
                to="/jobs-all"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Driving Jobs
            </NavLink>
              <NavLink
                to="/jobs-all"
                style={{ hover: "#fed136" }}
                className="links"
              >
                I'm a driver,hire me
            </NavLink>
              <NavLink
                to="/"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Get Social
              </NavLink>
              <NavLink
                to="/"
                style={{ hover: "#fed136" }}
                className="links"
              >
                FAQs
              </NavLink>
              <NavLink
                to="/"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Terms &amp; Conditions
              </NavLink>
              <NavLink
                to="/"
                style={{ hover: "#fed136" }}
                className="links"
              >
                Homepage
            </NavLink>
            </div>
            <div className="col-12 text-left p-0">
              <Link to="/contact-us">
                <button
                  style={{
                    fontSize: '23px',
                    height: "55px",
                    background: "#f8bd00",
                    color: 'black'
                  }}
                  className="btn font-weight-bold mt-4"
                >
                  Contact Us
                  <GreaterIcon
                    fill='black'
                    className='ml-3'
                    style={{ height: '23px' }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
