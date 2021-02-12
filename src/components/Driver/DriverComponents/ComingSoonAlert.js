import React from "react";
import Organization from "../../Employer/MyOrganization/Organization";

const ComingSoonAlert = () => {
  return (
    <>
      <span
        className="btn btn-outline-warning"
        alt=""
        data-toggle="modal"
        data-target="#myModal"
        style={{
          backgroundColor: "#F0F0F0",
          border: "2px solid #C4C4C4",
          color: "#6B6565",
        }}
      >
        <img
          id="preview_image"
          height={30}
          src={process.env.PUBLIC_URL + "/images/addfolder.png"}
          alt=""
        />
        Add Folder
      </span>
      <div className="modal fade show" id="myModal" aria-modal="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Add Folder</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="padding_left_25 padding_right_25" style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: 21, color: "#5B5B5B" }}>
                Feature Coming Soon
              </h1>
              <p style={{ fontSize: 16, color: "#969393" }}>
                We are building fleet management modules to help automate your
                transport business, solve painful problems, and consequently
                make your business sustainable. This feature is in the works.
                Meanwile, you can try out the following features:
              </p>
              <ul
                style={{ fontSize: 16, color: "#969393" }}
              >
                <li className="card-text custom-list">Employer profile.</li>
                <li className="card-text custom-list">Inbox.</li>
                <li className="card-text custom-list">Recruitment.</li>
              </ul>
            </div>
            <main
              role="main"
              className="col-md-12 ml-sm-auto col-lg-10 px-4 padding_left_25 padding_right_25"
            >
              <section className="searchbg pb-3">
                <div className>
                  <div className="container mt-4">
                    <div className="card-body">
                      <div className="container">
                        <div className="row">
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
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonAlert;
