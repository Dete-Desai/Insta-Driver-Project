import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import EmployerSideBarFunction from '../../../Layout/MainSideBar/Employer/EmployerSideBarFunction';
import { SearchPage } from '../../../Main/SearchBar';
import { DriverJobProfileCard, DriverJobProfileCard1 } from '../Vaccancy/DriverJobProfileCard';
import { useDispatch, useSelector } from 'react-redux';
import { employerGetJobPosts } from '../../../../redux/actions/employer_actions/job_post_actions';
import NoApplicants from './NoApplicants';
import * as timeHelpers from './helpers';
import DriverProfileCard from './DriverProfileCard';

const HiredApplicants = props => {
    const dispatch = useDispatch();
    const [applicants, setApplicants] = useState([])
    const jobs = useSelector(state => state.employer_reducers.job_posts);
    const token = useSelector(state => state.user_reducers.user_credentials.token);
    const [appliedOn, setAppliedOn] = useState("");
    const [applicationMethod, setApplicationMethod] = useState("");
    const [driving, setDriving] = useState(false);
    useEffect(() => {
        dispatch(employerGetJobPosts(token));
        setApplicants(getApplicants(jobs));
    }, [dispatch, token, jobs]);

    const getApplicants = (jobs) => {
        var applicants = [];
        jobs.forEach(job => applicants = applicants.concat(job.hired));
        console.log('inside get applicants');
        console.log(applicants);
        return applicants;
    }

    const onApplicationMethodSelection = (e) => {
        e.preventDefault();
        setApplicationMethod(e.target.value);
        //do your thing
        console.log(`application method changed ${e.target.value}`)
    }

    const onAllApplicants = e => {
        setDriving(false);
        setApplicants(getApplicants(jobs));
    }

    const getHired = () => {
        var applicants = [];
        jobs.forEach(job => applicants = applicants.concat(job.hired));
        return applicants.length;
    }

    const getAll = () => {
        var applicants = [];
        jobs.forEach(job => applicants = applicants.concat(job.hired, job.applied, job.rejected, job.shortlisted));
        return applicants;
    }

    const getAllApplicantsCount = () => {
        return getAll(jobs).length;
    }
    const getHiredPercent = () => {
        return Math.abs((getHired() / getAllApplicantsCount()) * 100);
    }

    const onDrivingJobs = (e) => {
        var drivingJobs = getDrivingJobs(jobs);
        setDriving(true);
        setApplicants(getApplicants(drivingJobs));
    }
    const onNonDrivingJobs = (e) => {
        var nonDrivingJobs = getNonDrivingJobs(jobs);
        setDriving(true);
        setApplicants(getApplicants(nonDrivingJobs));
    }

    const getDrivingJobs = (allJobs) => {
        return allJobs.filter(job => (job.adType === 'DRIVING JOBS' || job.adType === 'Driving Jobs'));
    }

    const getNonDrivingJobs = (allJobs) => {
        return allJobs.filter(job => !(job.adType === 'DRIVING JOBS' || job.adType === 'Driving Jobs'));
    }

    const onTimeAppliedSelection = e => {
        e.preventDefault();
        setAppliedOn(e.target.value);
        //change the filtering
        if (driving)
            setApplicants(getApplicants(getDrivingJobs(jobs)).filter(applicant => timeHelpers.isWithinDuration(applicant.timestamp, getDuration(e.target.value))));
        //else
        setApplicants(getApplicants(getNonDrivingJobs(jobs)).filter(applicant => timeHelpers.isWithinDuration(applicant.timestamp, getDuration(e.target.value))));
    }
    const getDuration = (timeSelected) => {
        switch (timeSelected) {
            case "ONE_HOUR":
                return timeHelpers.ONE_HOUR;
            case "TWELVE_HOURS":
                return timeHelpers.TWELVE_HOUR;
            case "ONE_DAY":
                return timeHelpers.ONE_DAY;
            case "ONE_WEEK":
                return timeHelpers.ONE_WEEK;
            case "ONE_MONTH":
                return timeHelpers.ONE_MONTH;
            default:
                return timeHelpers.ONE_YEAR;
        }
    }


    return (
        <div className="bg-white py-5">
            <div className="row">
                <div className="col-xl-2 col-sm-0">
                    <EmployerSideBarFunction />
                </div>
                <div className="col-xl-9 m-auto py-5 pl-5 pr-3">
                    <div className="row mb-5">
                        <div
                            className="col-xl-3 col-sm-4 col-md-3 first padding_left_25"
                            style={{ fontSize: 36, color: "#585858", width: 150, }}
                        >
                            Hired
                </div>
                        <div className="col-sm-6 col-lg-7">
                            <div
                                className="progress h-100"
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 35,
                                    width: 400,
                                }}
                            >
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={getHired()}
                                    style={{
                                        width: (getHired() === 0 ? '20%' : `${getHiredPercent()}%`),
                                        backgroundColor: "#FFBB00",
                                        borderRadius: 35,
                                    }}
                                    aria-valuemin={0}
                                    aria-valuemax={getAllApplicantsCount()}
                                >
                                    <div
                                        className="d-flex justify-content-end"
                                        style={{ marginLeft: 10 }}
                                    >
                                        <d
                                            style={{
                                                marginRight: 10,
                                                fontWeight: 900,
                                                fontSize: 30,
                                                color: "black",
                                                border: "1px solid white",
                                                width: 65,
                                                height: 35,
                                                borderRadius: 39,
                                                background: 'rgba(255, 255, 255, 0.86)'
                                            }}
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            {getHired()}
                                        </d>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="pt-2">
                        <p>
                            <font size="4">Types of Applicants</font>
                        </p>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-sm-auto mb-4">
                                        <button
                                            onClick={onAllApplicants}
                                            className="applicant_btn"
                                        >
                                            All Applicants
                    </button>
                                    </div>
                                    <div className="col-sm-auto mb-4">
                                        <button
                                            onClick={onDrivingJobs}
                                            className="applicant_btn"
                                        >
                                            Driving Jobs Applicants
                    </button>
                                    </div>
                                    <div className="col-sm-auto mb-4">
                                        <button
                                            onClick={onNonDrivingJobs}
                                            className="applicant_btn"
                                        >
                                            Non-driving Jobs Applicants
                    </button>
                                    </div>
                                    <div className="col-sm-auto mb-4">                                       
                                            <select id="cid" name="cid" value={appliedOn}
                                                className="form-control applicant_select"
                                                onChange={onTimeAppliedSelection}>
                                                <option value="">Time applied</option>
                                                <option value="ONE_HOUR">Last hour</option>
                                                <option value="TWELVE_HOURS">12 hrs Ago</option>
                                                <option value="ONE_DAY">Today</option>
                                                <option value="ONE_WEEK">This Week</option>
                                                <option value="ONE_MONTH">This Month</option>
                                                <option value="ONE_YEAR">This Year</option>
                                            </select>                                           
                                    </div>
                                    <div className="col-sm-auto mb-4">                                      
                                            <select id="cid" name="cid" value={appliedOn}
                                                className="form-control applicant_select"
                                                onChange={onTimeAppliedSelection}>
                                                <option value="">Time hired</option>
                                                <option value="ONE_HOUR">Last hour</option>
                                                <option value="TWELVE_HOURS">12 hrs Ago</option>
                                                <option value="ONE_DAY">Today</option>
                                                <option value="ONE_WEEK">This Week</option>
                                                <option value="ONE_MONTH">This Month</option>
                                                <option value="ONE_YEAR">This Year</option>
                                            </select>                                           
                                    </div>
                                    <div className="col-sm-auto mb-4">
                                        <select id="cid" name="cid" value={applicationMethod}
                                            onChange={onApplicationMethodSelection}
                                            className="form-control applicant_select">
                                            <option value="">Application method</option>
                                            <option value="VACANCY_ADS">Vacancy Ads</option>
                                            <option value="DRIVER_CARDS">Driver Cards</option>
                                            <option value="VACANCY_ADS_AND_DRIVER_CARDS">Vacancy Ads & Driver Cards</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-auto mb-4">
                                        <select
                                            id="cid" name="cid"
                                            className="form-control applicant_select"
                                        >
                                            <option value="ACTIVE">Select Ads</option>
                                            <option value="ACTIVE">Only Active Ads</option>
                                            <option value="ARCHIVED_ADS">Only Archived Ads</option>
                                            <option value="ARCHIVED_ACTIVE">Both Active and Archived</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-auto">
                                <SearchPage />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div style={{ border: '0.5px solid #C4C4C4', borderRadius: "0px" }} className="">

                        {/* <div style={{ minHeight: "300px", background:"#EDF5FA" }} className="row m-0">
                {applicants && applicants.length > 0 ? applicants.map(applicant => <DriverJobProfileCard applicant={applicant} />)
                  : <NoApplicants />}
              </div> */}

                        <div style={{ minHeight: "250px", background: "#fff" }} className="row m-0 pt-3 d-flex align-items-center">
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                        </div>
                        <div style={{ minHeight: "250px", background: "#EDF5FA" }} className="row m-0 pt-3 d-flex align-items-center">
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                        </div>
                        <div style={{ minHeight: "250px", background: "#fff" }} className="row m-0 pt-3 d-flex align-items-center">
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                        </div>
                        <div style={{ minHeight: "250px", background: "#EDF5FA" }} className="row m-0 pt-3 d-flex align-items-center">
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                            <DriverProfileCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

HiredApplicants.propTypes = {

}

export default HiredApplicants
