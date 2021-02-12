import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"
const ProfilePreview = ({setShareModalShow}) => {
  const user_credentials = useSelector(state => state.user_reducers.user_credentials)
  console.log("-------------------- cred ",user_credentials);
  return (
    <div className="row mb-5">
      <div className="col-md-10 m-auto">
        <div className="row d-flex">
          <div className="col-sm mb-4">
            <div style={{ background: "#FFBB00" }} className="card previewCard">
              <div className="card-body">
                <p className="card-title font-weight-bold text-center">
                  Get a Url for this profile and share in relevant platforms
                  e.g. on social media
                </p>
                <div className="text-center py-2">
                  <a className="btn UrlBtn px-3 py-1 font-weight-bold bg-white ml-auto" onClick={()=>setShareModalShow(true)}>Click here to get URL</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div style={{ background: "#3B3B3B" }} className="card previewCard">
              <div className="card-body">
                <p className="card-title font-weight-bold text-center text-white">
                  Open Your Profile In a New Tab. And see how employers will see
                  it
                </p>
                <div className="text-center py-2">
                  <Link style={{ background: "#FFBB00" }} className="btn UrlBtn px-3 py-1 font-weight-bold bg-white ml-auto" 
                  to={`/drivers/public-profile/${user_credentials.id}`} >Preview Profile</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
