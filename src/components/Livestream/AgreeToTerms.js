import React from 'react';

const AgreeToTerms = ({ setAgreed }) => {
  return (
    <div className="row">
      <div className="col-md-4 mx-auto mt-5 mb-5">
        <div className="card card-body livestream-navigator">
          <div className="agreeto">Agree to Terms</div>
          <div>
            <div className="warning">
              <p>
              No nudity, offensive  and indecent content. Dangerous content is now allowed.
              </p>
            </div>
            <div className="actions">
              <button onClick={() => setAgreed(true)}>I Agree</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgreeToTerms;