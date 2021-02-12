import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import JobCardModal from "./JobCardModal"
import {Modal,Button} from 'react-bootstrap';
import set from "lodash/set"
import { useHistory } from "react-router-dom";
import { activeJobCards, addJobCard, inactiveJobCards, updateJobcardStatus } from "../../redux/actions/driver_actions/job_card_actions";
import JobCardForm from "./JobCardForm"
import ArchivedCard from "./ArchivedCard"
import "../../dist/css/jobcard.css";
import ActiveCard from "./ActiveCard";
import { getDriverProfilePercent } from "../../Util/ProfilePercent";
import { getDriverStaticFormData } from "../../Api/index";


const DriverCongratsModal=(props)=>{
  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Body>
            <div className="d-flex flex-column align-items-center alert-success">
                <i style={{ color: "#279F2C" }} class="fas fa-check-circle my-3 fa-lg" />
                <p className="card-title2 text-success my-2">
                Congrats! Your profile is completed 100% and you are now live 
                </p>
                <br/>
               
            </div>
            
        </Modal.Body>
      
    </Modal>
);
}

const JobcardProfile = () => {
  const role = useSelector(
    (state) => state.user_reducers.user_credentials.role
  );
  const current_active_card = useSelector(state => state.driver_reducers.current_active_card);
  const achieved_job_cards = useSelector(state => state.driver_reducers.achieved_job_cards);

  const [showCongrats,setShowCongrats]=useState(false);

  const[ formDataStatic,setFormSDataStatic] = useState(undefined)


  const onCongratsDismiss=()=>{
    setShowCongrats(false);
  }

  //const profile=useSelector(state=>state.driver_reducers.driver_profile);
  let history = useHistory();
  const dispatch = useDispatch();
  //check the role of the user
  if (role !== "DRIVER") {
    history.push("/");
  }
  //get driver profile data
  const token = useSelector(
    (state) => state.user_reducers.user_credentials.token
  );
  const driver_profile = useSelector(
    (state) => state.driver_reducers.driver_profile
  );

  useEffect(() => {
    dispatch(activeJobCards(token));
    dispatch(inactiveJobCards(token));
    if(getDriverProfilePercent(driver_profile)===100){
      setShowCongrats(true);
    }

  //wait four seconds and then disappear the congrats message
    setTimeout(()=>{setShowCongrats(false)},4000);
  }, [dispatch,driver_profile,token])

  useEffect(() => {
    const formReq = async () => {
      let formDataStatictemp = await getDriverStaticFormData();
      setFormSDataStatic(formDataStatictemp)
      console.log(
        "added static form data for job card",
        formDataStatictemp
      );
    };
    formReq();
  }, [])

  
  

  const [modalShow, setModalShow] = useState(false);
  const [jobCardDetails, setJobCardDetails] = useState({})

  const handleChange = (e) => {
    let tempCardDetails = { ...jobCardDetails };
    set(tempCardDetails, e.target.name, e.target.value);
    setJobCardDetails(tempCardDetails);
  }

  const handleCreateCard = (e) => {
    e.preventDefault();
    setModalShow(true)
    var future = new Date();
    future.setDate(future.getDate() + 3);

    let body = {
      name: `${driver_profile.firstName} ${driver_profile.lastName} `,
      description: jobCardDetails.card_description,
      mobileNumber: driver_profile.mobileNumber,
      category: [jobCardDetails.driver_category1, jobCardDetails.driver_category2],
      experience: driver_profile.qualification.drivingExperience,
      licenseAge: driver_profile.qualification.licensePeriod,
      location: {
        city: driver_profile.personalInformation.city,
        country: driver_profile.personalInformation.nationality ,
        latitude: 0,
        longitude: 0,
      },
      salary: {
        min: driver_profile.salaryRangeforFullTime.MinimumPay,
        max: driver_profile.salaryRangeforFullTime.MaximumPay,
      },
      expireAt: future
    };

    dispatch(addJobCard(token, body));
    if (current_active_card !== null) {
      dispatch(updateJobcardStatus(token, current_active_card._id, { status: 'EXPIRED' }));
    }

  
   
  };
  return (
    <>
      <JobCardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <DriverCongratsModal show={showCongrats}
      onHide={onCongratsDismiss}/>
      <div id="content">
        <div className>
          <div className="row">
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 px-4 minheight300 padding_left_25 padding_right_40"
            >
              <div
                className="alert alert-success successMsg margin_top_20"
                style={{ display: "none" }}
              >
                Job Card Created Successfully!!
              </div>
              <div className="space" style={{ height: "30" }} />
              <div className="container">
              {driver_profile && getDriverProfilePercent(driver_profile) < 100 &&
              <div className="row">
                  <div className="col-sm">
                    <div className="card alert alert-danger" style={{ border: "none" }}>
                        <h5 className="card-title2">Please Complete Your Profile</h5>
                        <p style={{ fontFamily: "Rubik" }}>
                        Dear driver, you will be able to post a “hire-me-card” once your profile is filled up 100% 
                        and has gone live. Go to Edit Profile to complete your profile     
                        </p>
                    </div>
                  </div>
                </div>}
                <div className="row">
                  <div className="col-sm">
                    <div className="card" style={{ border: "none" }}>
                      <div className="card-body" style={{ color: "#4B4747" }}>
                        <h5 className="card-title2">Create Job Cards</h5>
                        <p style={{ fontFamily: "Rubik" }}>
                          Job Cards will run for 3 days then stop showing.
                          You will be able to renew it from the Archived Job
                          Cards section or by posting a new card. You will only
                          have 1 active Job card running at any given time. If
                          you post a new one, it will replace the last one
                          posted.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <JobCardForm formDataStatic={formDataStatic} setJobCardDetails={setJobCardDetails} jobCardDetails={jobCardDetails} handleCreateCard={handleCreateCard} handleChange={handleChange} />

                <hr />
                <br />

                <ActiveCard current_active_card={current_active_card} token={token} />

                <div className="space" />
                <div className="space" />

                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <h5 className="card-title2">
                        Archived Job Cards that are now Inactive
                    </h5>
                      <p>
                        In this "Archived Jobs" section, you are limited to only
                        4 cards. If you post a new card, the old card will be
                        replaced.
                    </p>
                      <br />
                      <br />
                      <div className="container">
                        <div className="row">
                          {achieved_job_cards && achieved_job_cards.length > 0 ? (
                            achieved_job_cards.map((card, index) => (
                              <ArchivedCard key={index} cardValues={card} token={token} />
                            ))
                          ) : (
                              <div className="card  no-active-job-card">
                                <div className="card-body d-flex justify-content-center">
                                  <d>
                                    {" "}
                                    <svg
                                      width={69}
                                      height={68}
                                      viewBox="0 0 69 68"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M66.9233 29.9979L38.7627 1.83435C37.6816 0.759541 36.219 0.15625 34.6946 0.15625C33.1701 0.15625 31.7076 0.759541 30.6264 1.83435L2.46582 29.9979C1.39101 31.079 0.78772 32.5415 0.78772 34.066C0.78772 35.5905 1.39101 37.053 2.46582 38.1341L30.6293 66.2947C32.8661 68.5315 36.5231 68.5315 38.7656 66.2947L66.9291 38.1312C68.0007 37.0496 68.602 35.5886 68.602 34.066C68.602 32.5434 68.0007 31.0823 66.9291 30.0007L66.9233 29.9979ZM32.4032 15.3181C33.0357 14.6367 33.8407 14.2946 34.8297 14.2946C35.8187 14.2946 36.6237 14.6338 37.2562 15.3095C37.8887 15.9851 38.2049 16.8332 38.2049 17.8538C38.2049 18.7336 37.9174 21.6862 37.3338 26.7146C36.7588 31.7458 36.2413 36.6046 35.8101 41.2966H33.7487C33.3606 36.6017 32.8862 31.743 32.3112 26.7146C31.7419 21.6833 31.4544 18.7336 31.4544 17.8538C31.4544 16.8476 31.7707 16.0081 32.4032 15.3238V15.3181ZM37.3769 52.1756C36.664 52.8656 35.8158 53.2106 34.8297 53.2106C33.8436 53.2106 32.9954 52.8656 32.2853 52.1756C31.5752 51.4798 31.2216 50.6404 31.2216 49.6542C31.2216 48.6681 31.5752 47.82 32.2853 47.1099C32.9983 46.3969 33.8465 46.0404 34.8326 46.0404C35.8187 46.0404 36.6668 46.3969 37.3769 47.1099C38.0957 47.82 38.4493 48.6681 38.4493 49.6542C38.4493 50.6404 38.0928 51.4799 37.3798 52.1727L37.3769 52.1756Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </d>
                                </div>
                                <p className="d-flex justify-content-center"> There are no achieved cards </p>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <br />
              <br />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobcardProfile;
