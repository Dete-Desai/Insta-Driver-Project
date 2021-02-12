import React from 'react';

const DriverProfileCard = () => {
  return (
    <>
      <div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0">
        <div className="text-center">
          <div className="mb-2">
            <img
              src='https://picsum.photos/130/130?image=1027'
              className="rounded-circle"
              height="85px"
              width="85px"
              alt="members"
            />
          </div>
          <h6 className="mb-0 textHeading">
           John Doe
          </h6>
          <span className="text-muted textStyle"> @JohntheD &nbsp; 5d</span>
          <hr
            style={{
              width: "50%",
              marginTop: 4,
              marginBottom: 1,
            }}
          />
          <h6 className="textStyle mt-1">
           5 years licence
          </h6>
          <h6 className="textStyle">
           2 years experience
          </h6>
        </div>
      </div>
    </>
  );
};

export default DriverProfileCard;