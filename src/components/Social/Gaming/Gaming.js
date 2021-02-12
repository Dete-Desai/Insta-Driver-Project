import React from "react";
import { useHistory } from "react-router-dom";
import { SearchPage } from "../../../components/Main/SearchBar";
import { AdvertisementCard2 } from "../ComponentsPackages/TrendCards/TrendCardsComponents";

const Gaming = (props) => {
  const history = useHistory();

  const directToInstadriverGroups = () => {
    let route = `instadriver-group`;
    history.push(route);
  };
  const directToVideoChat = () => {
    let route = `video-chat`;
    history.push(route);
  };
  const directToGaming = () => {
    let route = `gaming-page`;
    history.push(route);
  };

  return (
    <div className="container">
      <main role="main" className="col-lg-12  px-1" style={{ right: 80 }}>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-9">
            <div>
              <b
                onClick={directToInstadriverGroups}
                style={{ fontSize: 24, marginLeft: 50, cursor: "pointer" }}
              >
                Instadriver Groups
              </b>
              <b
                onClick={directToVideoChat}
                style={{ fontSize: 24, marginLeft: 150, cursor: "pointer" }}
              >
                Video Chat
              </b>
              <b
                onClick={directToGaming}
                style={{ fontSize: 24, marginLeft: 150, cursor: "pointer" }}
              >
                Gaming
              </b>
              <div className="row">
                <button
                  className="line-button"
                  style={{ width: 150, marginLeft: 675 }}
                />
                <hr
                  style={{
                    width: "95%",
                    textAlign: "left",
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <SearchPage />
          </div>
          <div className="col-md-1" style={{ left: 230 }}>
            <i
              className="fa fa-caret-down"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ fontSize: 36 }}
            />
            <div
              className="dropdown-menu dropdown-account-card-center"
              aria-labelledby="dropdownMenuButton"
            >
              <div className="col-sm-12 account-card">
                <AdvertisementCard2 />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-12" style={{ left: "20%" }}>
            <section className="searchbg pb-3">
              <div className>
                <div className="container mt-4">
                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm">
                          <div
                            className="card"
                            style={{ width: "100%", border: "none" }}
                          >
                            <div className="cus-space" style={{ height: 20 }} />
                            <div className="card-body  w_100">
                              <h1
                                className="card-title"
                                style={{ fontSize: 21, color: "#5B5B5B" }}
                              >
                                Feature Coming Soon
                              </h1>
                              <p
                                className="card-text"
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
                                className="card-text"
                                style={{ fontSize: 16, color: "#969393" }}
                              >
                                <li className="card-text custom-list">
                                  Employer profile.
                                </li>
                                <li className="card-text custom-list">
                                  Inbox.
                                </li>
                                <li className="card-text custom-list">
                                  Recruitment.
                                </li>
                              </ul>
                              <p />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm">
                          <img
                            src="https://instadriver.co/images/Under_Construction1.png"
                            alt="in_the_works"
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "cover",
                            }}
                          />
                          <div className="cus-space" style={{ height: 20 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <br />
        <br />
      </main>
      <br />
    </div>
  );
};

Gaming.propTypes = {};

export default Gaming;
