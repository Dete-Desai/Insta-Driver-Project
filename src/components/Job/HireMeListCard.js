import { Archive } from "@material-ui/icons"
import React from "react"
import {connect} from "react-redux"

const HireMeListCard = ({ cardValues,user }) => {
    const showShortListButton = ()=>{
        if (user){        
            if (user.role === "DRIVER"){
                return false;
            }return true;
        }return false;

    }
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">

            <small className="archived_on_text">
                Archived on 23rd November 2020
        </small>
            <div className="card shadow archived-job-cards">
                <img
                    src="https://instadriver.co/img/card/top_card.PNG"
                    className="card-img-top"
                    alt="top_card"
                />
                <img
                    id="preview_image"
                    src={cardValues ? cardValues.imageUrl : "https://instadriver.co/images/uploads/user/thumb/IMG_2751604304202.png"}
                    className="w-90"
                    alt="profile_photo"
                    style={{
                        position: "absolute",
                        top: 25,
                        left: 35,
                        borderRadius: "50%",
                        width: 133,
                        height: 132,
                    }}
                />
                <div className="card-body d-flex justify-content-center">
                    <h5
                        className="card-title"
                        style={{
                            position: "absolute",
                            margin: "0 auto",
                            top: 185,
                            fontWeight: 500,
                        }}
                    >
                        {cardValues ? cardValues.name : `John Doe`}
                    </h5>
                    <p
                        className="card-text text-center output"
                        style={{
                            display: "inline-block",
                            width: 300,
                        }}
                    >

                        {cardValues ? cardValues.description : `I am very honest and responsible.`}

                    </p>
                    <p
                        className="card-text"
                        style={{
                            textAlign: "center",
                            color: "#F8BD00",
                            fontWeight: 600,
                            position: "absolute",
                            bottom: 55,
                            fontSize: 16,
                        }}
                    >
                        Contact
            </p>
                    <p
                        className="card-text align-text-bottom"
                        style={{
                            textAlign: "center",
                            fontWeight: 600,
                            color: "#575353",
                            position: "absolute",
                            bottom: 30,
                        }}
                    >
                        {cardValues ? cardValues.mobileNumber : `9993339993`}
                    </p>
                </div>
            </div>
            <br />
            <table className="table-borderless archived-table">
                <thead>
                    <tr>
                        <td scope="col">
                            <div className=" btn  non-box" id="demo">
                                {cardValues ? cardValues.category[0] : `NA`}
                            </div>
                        </td>
                        <td scope="col">
                            <div className=" btn non-box" id="demo1">
                                {cardValues ? cardValues.category[1] : `NA`}
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {" "}
                            <div className="btn non-box">
                                {cardValues ? `${cardValues.experience} +years experience` : `NA`}
                            </div>
                        </td>
                        <td>
                            <div className="btn non-box">
                                {cardValues ? `${cardValues.licenseAge} +years licence` : `NA`}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            <div className="btn  non-box">
                                {cardValues ? `${cardValues.location.city} ,${cardValues.location.country} ` : `NA`}

                            </div>
                        </td>
                        <td>
                            <div className="btn non-box">
                                {cardValues ? `Salary ${cardValues.salary.min} to ${cardValues.salary.max}` : `NA`}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
      {showShortListButton()?      <button
                type="button"
                data-target="#newCardModal1"
                data-toggle="modal"
                className="btn-block custom-archive1 repost-button"
            >
                Tap to short list
        </button>:null}
            <br />
            <br />
            <div
                className="modal fade"
                id="newCardModal1"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLongTitle"
                            >
                                Create a Job Card
                </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                                You already have one job card that is
                                active and running. If you proceed to post
                                a new one, it will replace the active one.
                                Are you sure you want to replace the
                                current card with this one?
                </p>
                        </div>
                        <div className="modal-footer">
                            <form
                                action="https://instadriver.co/job_card/repost"
                                method="post"
                                id="archive1"
                                name="archive1"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="JBo6F2sEJNVoH9ExGJAyxbqqIv3giPXBz4iXB7x1"
                                />
                                <input
                                    type="hidden"
                                    name="user_id"
                                    defaultValue={275}
                                />
                                <input
                                    type="hidden"
                                    name="name"
                                    defaultValue="Frankline Wakasiaka"
                                />
                                <input
                                    type="hidden"
                                    name="profile_photo"
                                    defaultValue="https://instadriver.co/images/uploads/user/thumb/IMG_2751604304202.png"
                                />
                                <input
                                    type="hidden"
                                    name="contact_no"
                                    defaultValue="0790943918"
                                />
                                <input
                                    type="hidden"
                                    name="card_description1"
                                    defaultValue="I am very honest and responsible. I promise to take care of the car given to me and ensure my safety as well as that of my employer. Hire me for top notch service."
                                />
                                <input
                                    type="hidden"
                                    name="driver_category1"
                                    defaultValue="Personal Driver"
                                />
                                <input
                                    type="hidden"
                                    name="driver_category2"
                                    defaultValue="Truck Driver"
                                />
                                <input
                                    type="hidden"
                                    name="salary"
                                    defaultValue="2000 to 50000"
                                />
                                <input
                                    type="hidden"
                                    name="years_licence"
                                    defaultValue="2 years Licence"
                                />
                                <input
                                    type="hidden"
                                    name="years_experience"
                                    defaultValue="3+ years Experience"
                                />
                                <input
                                    type="hidden"
                                    name="location"
                                    defaultValue="Nairobi, Kenya"
                                />
                                <input
                                    type="hidden"
                                    name="slug"
                                    defaultValue="frankline-wakasiaka-27503509"
                                />
                                <input
                                    type="hidden"
                                    name="status"
                                    defaultValue="active"
                                />
                                <input
                                    type="hidden"
                                    name="currency"
                                    id="currency"
                                    defaultValue="KES"
                                />
                                <input
                                    type="hidden"
                                    name="jobcard_id"
                                    defaultValue={216322417}
                                />
                                <button
                                    type="button"
                                    className="btn btn-dark mr-auto"
                                    data-dismiss="modal"
                                >
                                    Cancel
                  </button>
                                <button
                                    type="submit"
                                    className="btn btn-secondary"
                                    onclick="removeRequired()"
                                >
                                    Yes, Replace
                  </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state)=>{
    return {
        user:state.user_reducers.user_credentials
    }
}

export default connect(mapStateToProps)(HireMeListCard);