import React from "react";
import HireDriverCard from "./HireDriverCard";

const JobCardForm = ({
  handleCreateCard,
  handleChange,
  jobCardDetails,
  setJobCardDetails,
  formDataStatic,
}) => {
  return (
    <div>
      <form onSubmit={handleCreateCard} className="row">
        <div className="col-sm">
          <div className="card" style={{ border: "none" }}>
            <div className="card-body">
              <p
                className="card-title2"
                style={{ color: "#4B4747", fontWeight: "500" }}
              >
                Pick a template message or create yours.
              </p>
              <br />
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
                style={{ height: "200" }}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div
                      className="card"
                      style={{
                        width: "auto",
                        margin: "0 auto",
                        height: 201,
                        background: "#F5F5F5",
                      }}
                    >
                      <div className="card-body card-body row justify-content-center">
                        <p className="card-text carousel-card-text">
                          I am Looking for a driving job. I am a competent
                          driver. I am also very responsible and will take care
                          of your car. Check out my profile and hire me.
                        </p>
                        <br />
                        <button
                          onClick={(e) =>{
                            e.preventDefault()
                            setJobCardDetails({
                              ...jobCardDetails,
                              card_description:
                                "I am Looking for a driving job. I am a competent driver. I am also very responsible and will take care of your car. Check out my profile and hire me.",
                            })}
                          }
                          className="btn shadow-sm"
                          style={{
                            backgroundColor: "white",
                            color: "#FFBB00",
                            boxShadow: "15px 10px 3px",
                            cursor: "pointer",
                            margin: "0 auto",
                            fontWeight: 490,
                            borderRadius: 10,
                            width: 187,
                            height: 40,
                            border: "none",
                            borderBottom: 1,
                          }}
                        >
                          Use this template
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div
                      className="card"
                      style={{
                        width: "auto",
                        margin: "0 auto",
                        height: 201,
                        background: "#F5F5F5",
                      }}
                    >
                      <div className="card-body row justify-content-center">
                        <p className="card-text carousel-card-text">
                          I am very honest and responsible. I promise to take
                          care of the car given to me and ensure my safety as
                          well as that of my employer. Hire me for top notch
                          service.
                        </p>
                        <br />
                        <button
                          onClick={(e) =>{
                            e.preventDefault()
                            setJobCardDetails({
                              ...jobCardDetails,
                              card_description:
                                "I am very honest and responsible. I promise to take care of the car given to me and ensure my safety as well as that of my employer. Hire me for top notch service.",
                            })}
                          }
                          className="btn shadow-sm"
                          style={{
                            backgroundColor: "white",
                            color: "#FFBB00",
                            boxShadow: "15px 10px 3px",
                            cursor: "pointer",
                            fontWeight: 490,
                            borderRadius: 10,
                            width: 187,
                            height: 40,
                            border: "none",
                            borderBottom: 1,
                          }}
                        >
                          Use this template
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div
                      className="card"
                      style={{
                        width: "auto",
                        margin: "0 auto",
                        height: 201,
                        background: "#F5F5F5",
                      }}
                    >
                      <div className="card-body row justify-content-center">
                        <p className="card-text carousel-card-text">
                          I am Looking for a driving job. I am very diligent,
                          attentive and I promise a very professional and
                          committed service to you and your vehicle. I am also
                          very responsible. Check my profile to hire me.
                        </p>
                        <br />
                        <button
                          onClick={(e) =>{
                            e.preventDefault()
                            setJobCardDetails({
                              ...jobCardDetails,
                              card_description:
                                "I am Looking for a driving job. I am very diligent, attentive and I promise a very professional and committed service to you and your vehicle. I am also very responsible. Check my profile to hire me.",
                            })}
                          }
                          className="btn shadow-sm"
                          style={{
                            backgroundColor: "white",
                            color: "#FFBB00",
                            boxShadow: "15px 10px 3px",
                            cursor: "pointer",
                            fontWeight: 490,
                            borderRadius: 10,
                            width: 187,
                            height: 40,
                            border: "none",
                            borderBottom: 1,
                          }}
                        >
                          Use this template
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <i
                    className="fa fa-angle-left"
                    style={{
                      fontSize: 25,
                      color: "#FFBB00",
                      marginLeft: "-95px",
                    }}
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <i
                    className="fa fa-angle-right"
                    style={{
                      fontSize: 25,
                      color: "#FFBB00",
                      marginLeft: 95,
                    }}
                  />
                  <span className="sr-only">Next</span>
                </a>
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleControls"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleControls"
                    data-slide-to={1}
                    className
                  />
                  <li
                    data-target="#carouselExampleControls"
                    data-slide-to={2}
                    className
                  />
                </ol>
              </div>
              <div className="space" />
              <div className="space" />
              <div className="space" />
              <br />
              <br />
              <h1
                className="display-4 temp
              late-message header-text"
                style={{
                  color: "#4B4747",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Type your custom message here
              </h1>
              <div className="cus-space" style={{ height: 20 }} />
              <textarea
                onChange={handleChange}
                id="myTextarea"
                name="card_description"
                value={jobCardDetails.card_description || ""}
                rows={5}
                cols={80}
                maxLength={200}
                minLength={100}
                className="form-control"
                onkeyup="countChars(this);"
                placeholder="(Minimum of 100 characters and maximum of 200 characters.)"
                data-mirror
                style={{ fontSize: 15, backgroundColor: "#F5F5F5" }}
                required
              />
              <p id="charNum" style={{ float: "right" }}>
                0 /200
              </p>
              <div className="space" />
              <div className="space" />
              <h6 className="card-title2 mt-5">
                Select driver categories you are applying for
              </h6>
              <p style={{ color: "#969393" }}>
                By default the job card will populate the driver categories you
                have in your profile. You can change here for this Job card
              </p>
              <br />
              <div
                className="form-group col-md-12"
                style={{ marginLeft: "-15px" }}
              >
                <p>Add First driver category </p>
                <div className="select mb-0">
                  <div className="input-container">
                    <select
                      onChange={handleChange}
                      className="form-control normal-text"
                      id="mySelect"
                      name="driver_category1"
                      style={{
                        borderRadius: 4,
                        height: 40,
                        backgroundColor: "#F5F5F5",
                      }}
                      required
                    >
                      <option value="" selected>
                        Select category
                      </option>
                      {formDataStatic &&
                        formDataStatic.driverCategory.map((dCat, i) => (
                          <option key={i} value={dCat.category}>
                            {dCat.category}
                          </option>
                        ))}
                      {/* <option value="Personal Driver">Personal Driver</option>
                      <option value="Truck Driver">Truck Driver</option>
                      <option value="School Bus Driver">
                        School Bus Driver
                      </option>
                      <option value="Forklift Driver">Forklift Driver</option>
                      <option value="On-Demand Driver">On-Demand Driver</option>
                      <option value="Ride-sharing Driver">
                        Ride-sharing Driver e.g uber, Taxify
                      </option>
                      <option value="Public Commuter Driver">
                        Public Commuter Driver (e.g Bus, Ambulance)
                      </option> */}
                    </select>
                  </div>
                  <div
                    className="select__arrow1"
                    style={{ top: 15, right: 5 }}
                  ></div>
                </div>
              </div>
              <br />
              <div
                className="form-group col-md-12"
                style={{ marginLeft: "-15px" }}
              >
                <p>Select second category(Optional) </p>
                <p style={{ color: "#969393" }}>
                  You may want to get hired for multiple driver categories.
                  Select the category you picked above if you still want to get
                  hired for one category.
                </p>
                <div className="select mb-0" id="p_scents">
                  <div className="input-container">
                    <select
                      onChange={handleChange}
                      className="form-control normal-text"
                      name="driver_category2"
                      id="mySelect1"
                      style={{
                        borderRadius: 4,
                        height: 40,
                        backgroundColor: "#F5F5F5",
                      }}
                      required
                    >
                      <option value="" selected>
                        Select category
                      </option>

                      {formDataStatic &&
                        formDataStatic.driverCategory.map((dCat, i) => (
                          <option key={i} value={dCat.category}>
                            {dCat.category}
                          </option>
                        ))}

                      {/* <option value="Personal Driver">Personal Driver</option>
                      <option value="Truck Driver">Truck Driver</option>
                      <option value="School Bus Driver">
                        School Bus Driver
                      </option>
                      <option value="Forklift Driver">Forklift Driver</option>
                      <option value="On-Demand Driver">On-Demand Driver</option>
                      <option value="Ride-sharing Driver">
                        Ride-sharing Driver e.g uber, Taxify
                      </option>
                      <option value="Public Commuter Driver">
                        Public Commuter Driver (e.g Bus, Ambulance)
                      </option> */}
                    </select>
                  </div>
                  <div
                    className="select__arrow1"
                    style={{ top: 15, right: 5 }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <br />
          <HireDriverCard jobCardDetails={jobCardDetails} />
        </div>
      </form>
    </div>
  );
};

export default JobCardForm;
