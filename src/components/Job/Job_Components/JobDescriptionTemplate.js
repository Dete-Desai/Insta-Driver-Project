import React from "react";

const JobDescriptionTemplate = ({ jobDetails, setJobDetails }) => {

  const setJobDescTemplate = (textTemplate) =>{

    console.log("==jobDetails", jobDetails);

    let tempJobDetails = { ...jobDetails };
    tempJobDetails.description=textTemplate
    setJobDetails(tempJobDetails)

    console.log("==tempJobDetails", tempJobDetails);

    

  }

  return (
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
                  We are looking for a hardworking and a competent driver . More
                  emphasis is on driving experience, ethics and the ability to
                  work under pressure. We have a great package for the position.
                  All the best
              </p>
              <br />
              <button
                onClick={() =>setJobDescTemplate("We are looking for a hardworking and a competent driver . More emphasis is on driving experience, ethics and the ability to work under pressure. We have a great package for the position. All the best")}
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
                  We are looking for a hardworking and a competent driver . More
                  emphasis is on driving experience, ethics and the ability to
                  work under pressure. We have a great package for the position.
                  All the best.
              </p>
              <br />
              <button
                onClick={() =>setJobDescTemplate("We are looking for a hardworking and a competent driver . More emphasis is on driving experience, ethics and the ability to work under pressure. We have a great package for the position. All the best.")}
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
                  We are looking for a hardworking and a competent driver . More
                  emphasis is on driving experience, ethics and the ability to
                  work under pressure. We have a great package for the position.
                  All the best.
              </p>
              <br />
              <button
                onClick={() =>setJobDescTemplate("We are looking for a hardworking and a competent driver . More emphasis is on driving experience, ethics and the ability to work under pressure. We have a great package for the position. All the best.")}
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
  );
};

export default JobDescriptionTemplate;
