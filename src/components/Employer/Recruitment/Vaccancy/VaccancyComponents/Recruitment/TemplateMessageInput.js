import React from "react";

const TemplateMessageInput = () => {
  return (
    <div>
      <h5 className="display-12 template-message header-text">
        Pick Template message or create yours
      </h5>
      <div
        id="carouselExampleControls"
        className="carousel slide main-carousel"
        data-ride="carousel"
        id="drivercat2"
        style={{ marginLeft: "-15px", maxWidth: 462 }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              <div
                className="card-body card-body row justify-content-center"
                style={{
                  maxWidth: 460,
                  margin: "0 auto",
                  height: 201,
                  background: "#F5F5F5",
                }}
              >
                <p className="card-text carousel-card-text">
                  We are looking for a hardworking and a competent driver . More
                  emphasis is on driving experience, ethics and the ability to
                  work under pressure. We have a great package for the position.
                  All the best
                </p>
                <br />
                <br />
                <button
                  onclick="quote();"
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
                    marginTop: "-5px",
                  }}
                >
                  Use this template
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <div
                className="card-body card-body row justify-content-center"
                style={{
                  maxWidth: 462,
                  margin: "0 auto",
                  height: 201,
                  background: "#F5F5F5",
                }}
              >
                <p className="card-text carousel-card-text">
                  We are looking for a hardworking and a competent driver . More
                  emphasis is on driving experience, ethics and the ability to
                  work under pressure. We have a great package for the position.
                  All the best
                </p>
                <br />
                <button
                  onclick="quote2();"
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
                    marginTop: "-5px",
                  }}
                >
                  Use this template
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <div
                className="card-body card-body row justify-content-center"
                style={{
                  maxWidth: 462,
                  margin: "0 auto",
                  height: 201,
                  background: "#F5F5F5",
                }}
              >
                <p className="card-text carousel-card-text">
                  We are looking for a hardworking and a competent driver . More
                  emphasis is on driving experience, ethics and the ability to
                  work under pressure. We have a great package for the position.
                  All the best.
                </p>
                <br />
                <button
                  onclick="quote3();"
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
                    marginTop: "-5px",
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
            style={{ fontSize: 36, color: "#FFBB00", marginLeft: "-6px" }}
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
            style={{ fontSize: 36, color: "#FFBB00", marginLeft: 19 }}
          />
          <span className="sr-only">Next</span>
        </a>
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleControls"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleControls" data-slide-to={1} />
          <li data-target="#carouselExampleControls" data-slide-to={2} />
        </ol>
      </div>
    </div>
  );
};

export default TemplateMessageInput;
