import React from 'react'
import PropTypes from 'prop-types'
import RejectedCandidates from '../../../../components/Employer/Recruitment/Vaccancy/RejectedCandidates';

const RejectedCandidatesPage = props => {
    const {params:{jobId}} = props.match;
    return (
        <div>
            <RejectedCandidates jobId={jobId}/>
        </div>
    )
}

RejectedCandidatesPage.propTypes = {

}

export default RejectedCandidatesPage
