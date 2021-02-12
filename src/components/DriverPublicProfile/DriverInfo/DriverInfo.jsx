import React from 'react';

const DriverInfo = ({driver}) => {

  const getLanguages=()=>{
    if(!driver.personalInformation.languagesSpoken || driver.personalInformation.languagesSpoken.length===0){
      return <div className="alert-waring text-warning">Languages Spoken Not Added</div>
    }else{
    return driver.personalInformation.languagesSpoken.map(lan=><div>
         <span style={{color:"#787878"}}>{lan}</span>
         <br/>
      </div>
        )
    }
  }
  return (
    <div className="driver__info section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading mb-5">Personal Information</h5>
      <form className="row mt-2">
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="name">Full Name</label>
            <div className="col-sm-7">
              <span style={{color:"#787878"}}>{
                driver && driver.firstName+' '+driver.lastName
              }</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="location">Residential Location</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{
              driver && driver.personalInformation && driver.personalInformation.residentialLocation
            }</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="city">County/City</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{ driver && driver.personalInformation
            && driver.personalInformation.city}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="nationality">Nationality</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{ driver && driver.personalInformation &&
            driver.personalInformation.nationality}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="nationality">Languages Spoken</label>
            <div className="col-sm-7">
            {getLanguages()}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="born">Year Born</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{driver && driver.personalInformation
            && driver.personalInformation.yearBorn}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="gender">Gender</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{driver && driver.personalInformation &&
            driver.personalInformation.gender}</span>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label className="col-sm-5 text-left label__style" for="marital">Marital Status</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{driver && driver.personalInformation &&
            driver.personalInformation.maritialStatus}</span>
            </div>
          </div>
          <div className="form-group row align-items-center my-4">
            <label className="col-sm-5 text-left label__style" for="nationality">Do you drink?</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{driver && driver.personalInformation &&
             driver.personalInformation.drink?"Yes":"No"}</span>
            </div>
          </div>
          <div className="form-group row align-items-center mt-4">
            <label className="col-sm-5 text-left label__style" for="nationality">Do you smoke?</label>
            <div className="col-sm-7">
            <span style={{color:"#787878"}}>{driver && driver.personalInformation &&
             driver.personalInformation.smoke?"Yes":"No"}</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DriverInfo;