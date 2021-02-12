import React from 'react';

const ProfilePreview = () => {
  return (
    <div className="row mb-5">
      <div className="col-md-10 m-auto">
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-4">
            <div style={{ background: "#FFBB00" }} className="previewCard p-4 container-fluid">
              <p className="font-weight-bold">Get a Url for this profile and share in relevant platforms e.g. on social media</p>
              <div className="text-center py-2">
                <a className="btn UrlBtn px-3 py-1 font-weight-bold bg-white ml-auto" href="/#">Click here to get URL</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="previewCard p-4 bg-dark container-fluid">
              <p className="font-weight-bold text-white">Open Your Profile In a New Tab. And see how employers will see it</p>
              <div className="text-center py-2">
                <a style={{ background: "#FFBB00" }} className="btn UrlBtn px-3 py-1 font-weight-bold ml-auto" href="/#">Preview Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;