import React from "react";
import PropTypes from "prop-types";
import EmployerSideBarFunction from "../../Layout/MainSideBar/Employer/EmployerSideBarFunction";

const Onboard = (props) => {
  return (
    <div>
      <div id='content'>
        <div className='row'>
          <EmployerSideBarFunction />
          <main
            role='main'
            className='col-md-9 ml-sm-auto col-lg-10 px-4 padding_left_25 padding_right_40'
          >
            <section className='searchbg pb-3'>
              <div className>
                <div className='container mt-4'>
                  <div className='card-body'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-sm'>
                          <div
                            className='card'
                            style={{ width: "100%", border: "none" }}
                          >
                            <div className='cus-space' style={{ height: 20 }} />
                            <div className='card-body  w_100'>
                              <h1
                                className='card-title'
                                style={{ fontSize: 21, color: "#5B5B5B" }}
                              >
                                Feature Coming Soon
                              </h1>
                              <p
                                className='card-text'
                                style={{ fontSize: 16, color: "#969393" }}
                              >
                                We are building fleet management modules to help
                                automate your transport business, solve painful
                                problems, and consequently make your business
                                sustainable. This feature is in the works.
                                Meanwile, you can try out the following
                                features:
                              </p>
                              <ul
                                className='card-text'
                                style={{ fontSize: 16, color: "#969393" }}
                              >
                                <li className='card-text custom-list'>
                                  Employer profile.
                                </li>
                                <li className='card-text custom-list'>
                                  Inbox.
                                </li>
                                <li className='card-text custom-list'>
                                  Recruitment.
                                </li>
                              </ul>
                              <p />
                            </div>
                          </div>
                        </div>
                        <div className='col-sm'>
                          <img
                            src='https://instadriver.co/images/Under_Construction1.png'
                            alt='in_the_works'
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "cover",
                            }}
                          />
                          <div className='cus-space' style={{ height: 20 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

Onboard.propTypes = {};

export default Onboard;
