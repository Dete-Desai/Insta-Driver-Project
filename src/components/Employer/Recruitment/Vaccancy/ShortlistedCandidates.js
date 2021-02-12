import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import EmployerSideBarFunction from '../../../Layout/MainSideBar/Employer/EmployerSideBarFunction';
import {connect} from "react-redux"
import {getEmployerJobCandidates} from "../../../../redux/actions/employer_actions/employer_recruitment_actions"
import Candidates from "./Candidates"


const ShortlistedCandidates = props => {
    const [jobData,setJobData] = useState(null);
    const [data,setData] = useState(null);
    const jobId = props.jobId;
    const [firstRow,setFirstRow] = useState(null);
    const [secondRow,setSecondRow] = useState(null)
    const [thirdRow,setThirdRow] = useState(null)
    const [others,setOthers] = useState(null)
    


    useEffect(async ()=>{
        let responseData = await props.getEmployerJobCandidates(props.user.token,jobId)
        setData(responseData && responseData.response_data[0].shortlisted)
        if (responseData){
            setJobData(responseData.response_data[0])
            const data = responseData.response_data[0].shortlisted
            setData(data)
            setFirstRow(data.slice(0,4))
            setSecondRow(data.slice(4,8))
            setThirdRow(data.slice(8,12))
            setOthers(data.slice(12,data.length))
        }
    },[jobId])



    const history = useHistory();


    const appliedCandidates = () => {
        let route = `/employer-applied-candidates-page/${jobId}`;
        history.push(route);
    }

    const shortlistedCandidates = () => {
        let route = `/employer-shortlisted-candidates-page/${jobId}`;
        history.push(route)
    }

    const hiredCandidates = () => {
        let route = `/employer-hired-candidates-page/${jobId}`;
        history.push(route)
    }

    const rejectedCandidates = () => {
        let route = `/employer-rejected-candidates-page/${jobId}`;
        history.push(route);
    }

    return (
        <div>
            <div id="content">
                <div className="row">
                    <EmployerSideBarFunction />
                    <div className="col-md-10">
                        <br />
                        <Candidates data={data} jobData={jobData} appliedCandidates={appliedCandidates} shortlistedCandidates={shortlistedCandidates} hiredCandidates={hiredCandidates} rejectedCandidates={rejectedCandidates} firstRow={firstRow} secondRow={secondRow} thirdRow={thirdRow} others={others} />
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}

ShortlistedCandidates.propTypes = {

}


const mapStateToProps = state=>{
    return {
        user:state.user_reducers.user_credentials
    }
}


export default connect(mapStateToProps,{getEmployerJobCandidates})(ShortlistedCandidates)
