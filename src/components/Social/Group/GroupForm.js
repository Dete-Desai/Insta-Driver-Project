import React from "react";
import { useHistory } from "react-router-dom";
import { SearchPage } from "../../../components/Main/SearchBar";
import { AdvertisementCard2 } from "../ComponentsPackages/TrendCards/TrendCardsComponents";
import { AboutCardGroupRules } from "../ComponentsPackages/AboutCards/AboutCardsComponents";
import "../../../dist/css/forms.css";

const GroupForm = props => {
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
                <button className="line-button" style={{ marginLeft: 50 }} />
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
            <br />
            <br />
            <form>
              <div className="row">
                <div className="col-md-12" style={{ right: 150 }}>
                  <label>
                    <font size="6">
                      <b>Group Name:</b>
                    </font>
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    name="group_name"
                    placeholder="0/100"
                    style={{
                      height: 70,
                      direction: "ltr",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col-md-12" style={{ right: 150 }}>
                  <label>
                    <font size="6">
                      <b>Group Description:</b>
                    </font>
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    name="group_description"
                    placeholder="0/5000"
                    style={{
                      height: 300,
                      direction: "ltr",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col-md-12" style={{ right: 150 }}>
                  <label>
                    <font size="6">
                      <b>Privacy:</b>
                    </font>
                  </label>
                  <select
                    type="text"
                    className="form-control"
                    name="privacy"
                    style={{ height: 70, borderRadius: "20px" }}
                  >
                    <option value="">....Choose Privacy Status....</option>
                    <option value="privacy">Private</option>
                    <option value="publicity">Public</option>
                  </select>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col-md-12" style={{ right: 150 }}>
                  <label>
                    <font size="6">
                      <b>Visibility:</b>
                    </font>
                  </label>
                  <select
                    type="text"
                    className="form-control"
                    name="visibility"
                    style={{ height: 70, borderRadius: "20px" }}
                  >
                    <option value="">....Choose Visibility Status....</option>
                    <option value="visibility">visible</option>
                    <option value="opaquity">Opaque</option>
                  </select>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col-md-11" style={{ right: 150 }}>
                  <label>
                    <font size="6">
                      <b>Add Group Rules:</b>
                    </font>
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    name="group_rules"
                    placeholder="0/200"
                    style={{
                      width: "1100px",
                      height: 70,
                      direction: "ltr",
                      borderRadius: "20px",
                    }}
                  />
                </div>
                <div className="col-md-1" style={{ right: 50, top: 35 }}>
                  <button
                    className="social-button-2"
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "50px",
                      width: 70,
                      height: 70,
                      fontSize: 40,
                      textAlign: "center",
                    }}
                  >
                    <b>+</b>
                  </button>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col-md-12" style={{ right: 150 }}>
                  <AboutCardGroupRules />
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col-md-12" style={{ right: 150 }}>
                  <button className="Social-button  social-button2 social-button-1">
                    <b>Launch Group</b>
                  </button>
                </div>
              </div>
            </form>
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
      </main>
      <br />
    </div>
  );
};

GroupForm.propTypes = {};

export default GroupForm;
