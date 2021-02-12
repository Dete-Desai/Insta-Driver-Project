import React from 'react'
import PropTypes from 'prop-types'
import HiredCandidates from '../../../../components/Employer/Recruitment/Vaccancy/HiredCandidates';

const HiredCandidatesPage = props => {
    const {params:{jobId}} = props.match;
    return (
        <div>
            <HiredCandidates jobId={jobId} />
        </div>
    )
}

HiredCandidatesPage.propTypes = {

}

export default HiredCandidatesPage
