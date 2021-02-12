import React from 'react';

const NoApplicants=()=>{
    return(
        <div className="alert alert-warning mx-auto" style={{width:'100%',border: '1px solid white',borderRadius:20}}>
            <h4 className="system-text-color">There are no Applicants for that Selection</h4>
        </div>
    )
}

export default NoApplicants;