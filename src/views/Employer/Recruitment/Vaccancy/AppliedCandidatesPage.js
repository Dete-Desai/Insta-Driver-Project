import React from 'react'
import PropTypes from 'prop-types'
import AppliedCandidates from '../../../../components/Employer/Recruitment/Vaccancy/AppliedCandidates'

const AppliedCandidatesPage = props => {
    const {params:{jobId}} = props.match;
    return (
        <div>
            <AppliedCandidates jobId={jobId} />
        </div>
    )
}

AppliedCandidatesPage.propTypes = {

}

export default AppliedCandidatesPage
