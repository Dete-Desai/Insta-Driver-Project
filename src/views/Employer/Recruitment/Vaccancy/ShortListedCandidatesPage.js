import React from 'react'
import PropTypes from 'prop-types'
import ShortlistedCandidates from "../../../../components/Employer/Recruitment/Vaccancy/ShortlistedCandidates";

const ShortListedCandidatesPage = props => {
    const {params:{jobId}} = props.match;
    return (
        <div>
            <ShortlistedCandidates jobId={jobId} />
        </div>
    )
}

ShortListedCandidatesPage.propTypes = {

}

export default ShortListedCandidatesPage
