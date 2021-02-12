import React from 'react'

const  Singledriver=()=> {
    return (
        <>
            <div id="content">
  <section className="searchbg">
    <div className="container">
      <div className="space" style={{height: 40}} />
    </div>
    <div className="container" style= {{"display": "none"}} >
      <div className="row">
        <div className="col-sm">
          <div className="container">
            <br /><br />
            <p className="d-flex justify-content-center" style={{fontWeight: 500}}>Tap the driver Job Card to be redirected to driver's detailed profile</p>
            <small className="d-flex justify-content-center" style={{color: '#969393'}}>Posted Today &nbsp;&nbsp;  ends in 5 days  &nbsp;&nbsp;
              <a href="#" data-target="#frankline-wakasiaka-27503509" data-toggle="modal" className="text-success">
                <img id="preview_image" height={20} src={process.env.PUBLIC_URL + '/images/share_icon.jpg'} alt="profile_photo" />
              </a>
              <div className="modal fade" id="frankline-wakasiaka-27503509">
                <div className="modal-dialog">
                  <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                      <h4 className="modal-title">Get Job Card URL</h4>
                      <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body text-left">
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <div className="row">
                            <div className="col-lg-12">
                              <input type="text" className="form-control" id="profile_url" name="profile_url" defaultValue="https://instadriver.co/driver/jobcards/frankline-wakasiaka-27503509" readOnly="readonly" autoComplete="off" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer text-center ">
                      <button type="button" id="copyButton" className="btn btn-primary btn-form display-4 pr-3 pl-3" onclick="toast_success('Link copied to clipboard')">Copy to clipboard</button>
                      <button type="button" className="btn btn-dark btn-form display-4 pr-3 pl-3" data-dismiss="modal">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </small>
            <br />
            <div className="card shado this" onclick="#" style={{width: 336, margin: '0 auto', borderRadius: 70, borderTop: 'none', border: '1px solid #FFBB00', borderTopLeftRadius: 70, borderTopRightRadius: 70, transition: '.3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,  .3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12)', cursor: 'pointer', height: 535}}>
              <img src={process.env.PUBLIC_URL + '/images/top_card.png'} className="card-img-top" alt="Top card image" style={{height: 260}} />
              <img id="preview_image" src={process.env.PUBLIC_URL + '/images/frank.png'} className="w-90" alt="profile_photo" style={{position: 'absolute', margin: '0 auto', top: 0, left: 9, borderRadius: '50%'}} />
              <div className="card-body align-items-center d-flex justify-content-center">
                <p className="card-title">Frankline Wakasiaka</p>
                <p style={{fontSize: 16, width: 300, marginTop: '-50px', textAlign: 'center', color: 'black'}}>I am very honest and responsible. I promise to take care of the car given to me and ensure my safety as well as that of my employer. Hire me for top notch service.</p>
                <p className="card-text" style={{textAlign: 'center', color: '#F8BD00', fontWeight: 600, bottom: 32, marginLeft: 10, position: 'absolute', fontSize: 15}}>Contact</p> 
                <a href="tel:0790943918" className="card-text" style={{textAlign: 'center', bottom: 22, marginLeft: 10, position: 'absolute', fontWeight: 600, color: '#575353'}}>0790943918</a>
              </div>
            </div>
            <table className="table-borderless " style={{width: 316, marginLeft: 40, borderCollapse: 'separate', borderSpacing: '10px 20px'}}>
              <thead>
                <tr>
                  <td scope="col">
                    <div className=" btn  non-box">
                      <d style={{position: 'relative', bottom: 4, cursor: 'default'}}>Personal Driver</d>
                    </div>
                  </td>
                  <td scope="col">
                    <div className=" btn non-box">
                      <d style={{position: 'relative', bottom: 4, cursor: 'default'}}>Truck Driver</d>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <div className="btn non-box">
                      <d style={{position: 'relative', bottom: 4, cursor: 'default'}}>3+ years Experience</d>
                    </div></td>
                  <td><div className="btn non-box">
                      <d style={{position: 'relative', bottom: 4, cursor: 'default'}}>2 years Licence</d>
                    </div></td>
                </tr>
                <tr>
                  <td> <div className="btn  non-box">
                      <d style={{position: 'relative', bottom: 4, cursor: 'default'}}>Nairobi, Kenya</d>
                    </div></td>
                  <td><div className="btn non-box">
                      <d style={{position: 'relative', bottom: 4, cursor: 'default'}}>Salary KES 2000 to 50000
                      </d>
                    </div></td>
                </tr>
              </tbody>
            </table><br />
            <div className="card" style={{width: 336, margin: '0 auto', height: 40, border: '2px solid #C4C4C4'}}>
              <div className="card-body" style={{marginTop: '-9px'}}>
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <d style={{fontWeight: '510', color: '#575353'}}><b>Views</b></d> <d style={{fontWeight: 510, color: '#FFBB00'}}><b>2</b></d>
                      </div>
                    <div className="col-sm">
                      <d style={{fontWeight: 510, color: '#575353'}}><b>Shortlisted</b></d>  <d style={{fontWeight: 510, color: '#FFBB00'}}><b>20</b></d>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <button type="button" className="btn-block custom-archive1" style={{width: '60%', backgroundColor: '#FFBB00', border: 'none', color: 'white', fontWeight: 500, borderRadius: 5, height: 40, cursor: 'pointer', margin: '0 auto'}}>Tap to Shortlist</button>
          </div>
               </div>
        <div className="col-sm">
          <div className="space" style={{height: 100}} />
          <div className="card text-center" style={{border: 'none', float: 'left'}}>
            <div className="card-body">
              <p className="card-text" style={{fontSize: 17}}>Dear Employer, we have many more driver Job cards on our platform, click the button below
                to be redirected to the driver Job cards page
              </p>
              <a href="/hire_drivers" className="btn btn-outline-warning" style={{border: '2px solid #C4C4C4', color: '#6B6565', fontWeight: 500}}>  View more Driver Job cards</a>
            </div>
          </div>
          {/* expired url */}
            
        </div>
      </div>
    </div>

    {/* expired url */}
   <div className="container" >
  <div className="card text-center shadow" style={{margin: '0 auto', maxWidth: 690, borderRadius: 10}}>
    <div className="card-body">
      
      <div className="card-title1 " style={{display: "inline-block", marginLeft :"-2em"}} >
          
      <svg width={49} height={49} viewBox="0 0 69 69"preserveAspectRatio="xMidYMin" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        <path d="M66.6039 30.5091L38.4432 2.34558C37.3621 1.27077 35.8996 0.66748 34.3751 0.66748C32.8506 0.66748 31.3881
       1.27077 30.307 2.34558L2.14636 30.5091C1.07155 31.5902 0.468262 33.0527 0.468262 34.5772C0.468262 36.1017 1.07155
       37.5642 2.14636 38.6453L30.3099 66.806C32.5466 69.0427 36.2036 69.0427 38.4461 66.806L66.6096 38.6425C67.6813 
       37.5608 68.2825 36.0998 68.2825 34.5772C68.2825 33.0546 67.6813 31.5936 66.6096 30.512L66.6039 30.5091ZM32.0837 
       15.8293C32.7162 15.148 33.5212 14.8058 34.5102 14.8058C35.4992 14.8058 36.3042 15.1451 36.9367 15.8207C37.5692 
       16.4963 37.8855 17.3445 37.8855 18.3651C37.8855 19.2448 37.598 22.1975 37.0144 27.2258C36.4394 32.2571 35.9219 
       37.1158 35.4906 41.8078H33.4292C33.0411 37.113 32.5667 32.2542 31.9917 27.2258C31.4225 22.1946 31.135 19.2448 
       31.135 18.3651C31.135 17.3588 31.4512 16.5193 32.0837 15.8351V15.8293ZM37.0575 52.6868C36.3445 53.3768 35.4964 
       53.7218 34.5102 53.7218C33.5241 53.7218 32.676 53.3768 31.9659 52.6868C31.2557 51.9911 30.9021 51.1516 30.9021 
       50.1655C30.9021 49.1793 31.2557 48.3312 31.9659 47.6211C32.6789 46.9081 33.527 46.5516 34.5131 46.5516C35.4992
       46.5516 36.3474 46.9081 37.0575 47.6211C37.7762 48.3312 38.1299 49.1793 38.1299 50.1655C38.1299 51.1516 37.7734
       51.9911 37.0604 52.684L37.0575 52.6868Z" fill="black" />
      </svg>
      </div><br/><br/><br/><h2>Oops!</h2>
      <p className="card-text1 text-center" style={{fontSize: 18}}>This "Job Card" has expired or has been deleted by the driver. To find and hire drivers, go to
        <a href="/" style={{color: '#fdd02e', fontWeight: 400}}>www.instadriver.co</a>. For a driver who would like to post a "Job Card", you can do that after signing up
        with Instadriver here <a href="/driver-login" style={{color: '#fdd02e', fontWeight: 400}}>www.instadriver.co/login</a>
      </p>
      <div className="space" style={{height: 30}} />
      <p className="card-text1" style={{fontSize: 18}}>Employers! <br />
        Dont worry, we have many other Job Cards from many other drivers. Click this button to view other Driver Job Cards.
      </p>
      <a href="/hire_drivers" id="view" className="btn btn-outline-warning" style={{border: '2px solid black', color: 'black'}}>View more Driver Job Cards</a>
    </div>
  </div>
</div>

   

    {/* <div className="space" style={{height: 40}} />   */}
    
  </section>
</div>



<div id="content">
  <section className="searchbg">
    
    <div className="container">
   
    </div>
    <div className="space" style={{height: 40}} />  
  </section>
</div>

        </>
    )
}
export default Singledriver;