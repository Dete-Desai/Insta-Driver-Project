import React from 'react';
import driverImg from '../../../../../dist/images/MaskGroup.svg'
import ShareIcon from '../../../../../dist/images/Share-icon.svg'

const DriverFeatureCard = () => {
  return (

    <>
      <div className="m-auto">
        <div className="row m-auto pb-2 pl-2" style={{ width: 375 }}>
          <div className="col-sm d-flex">
            <span style={{ fontSize: 14 }} className="text-white mr-4">Posted 2 hours ago</span> &nbsp;
            <span style={{ fontSize: 14 }} className="text-white"> 24 hours remaining</span> &nbsp;&nbsp;&nbsp; &nbsp;
            <span className=""> <img src={ShareIcon} alt=""/></span>
            
          </div>
        </div>
        <div className="card card-bg p-2 m-auto bt-0"
          style={{ cursor: 'pointer', borderRadius: 60, height: 535, width: 336 }}
        >
          <img className="card-img-top bt-0" src="https://instadriver.co/img/card/top_card.PNG"
            alt="card-img" style={{
              width: '105%', marginLeft: '-8px', marginTop: '-10px',
              height: 260, borderTopRightRadius: 60, borderTopLeftRadius: 60
            }} />
          <img id="preview_image" loading="lazy"
            src={driverImg}
            className="w-60" alt="profile_photo"
            style={{ position: 'absolute', margin: '0 auto', top: 35, left: 100, borderRadius: '50%', width: 130, height: 130, }}
          />
          <div className="card-body align-items-center d-flex justify-content-center">
            <p className="card-text py-2"
              style={{ textAlign: 'center', color: '#000000', fontWeight: 600, top: 180, position: 'absolute', fontSize: 17 }}>
              <b>John Doe</b>
            </p>
            <p className="p-0 text-justify"
              style={{ color: '#5B5B5B', marginTop: '-50px' }}>
              I am a very hard-working driver. I am in three apps, Uber, Bolt and Little Cab. Looking for a car, preferably Toyota Passo, 1200CC. I am ready to remit $20 a day for 6 days a week.
            </p>
            <p className="card-text"
              style={{ textAlign: 'center', color: '#F8BD00', fontWeight: 600, bottom: 32, marginLeft: 10, position: 'absolute', fontSize: 15 }}>
              Contact
                                                        </p>
            <a href="tel:0790943918" className="card-text"
              style={{ textAlign: 'center', bottom: 22, marginLeft: 10, position: 'absolute', fontWeight: 600, color: '#575353' }}>
              0790943918
            </a>
          </div>
        </div>
        <br />
        <table className="table-borderless m-auto"
          style={{ borderCollapse: 'separate', borderSpacing: '5px 20px' }}>
          <thead>
            <tr>
              <td scope="col">
                <div className=" btn  category-box tableWidth" style={{ width: "213px" }}>
                  <d style={{ position: 'relative', bottom: 4, cursor: 'default' }}>
                    Personal Driver
                                                            </d>
                </div>
              </td>
              <td scope="col">
                <div className=" btn category-box tableWidth" style={{ width: "213px" }}>
                  <d style={{ position: 'relative', bottom: 4, cursor: 'default' }}>
                    Truck Driver
                                                            </d>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="btn category-box tableWidth" style={{ width: "213px" }}>
                  <d style={{ position: 'relative', bottom: 4, cursor: 'default' }}>
                    3+ years Experience
                                                            </d>
                </div>
              </td>
              <td>
                <div className="btn category-box tableWidth" style={{ width: "213px" }}>
                  <d style={{ position: 'relative', bottom: 4, cursor: 'default' }}>
                    2 years Licence
                                                            </d>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="btn  category-box tableWidth" style={{ width: "213px" }}>
                  <d style={{ position: 'relative', bottom: 4, cursor: 'default' }}>
                    Nairobi, Kenya
                                                            </d>
                </div>
              </td>
              <td>
                <div className="btn category-box tableWidth" style={{ width: "213px" }}>
                  <d style={{ position: 'relative', bottom: 4, cursor: 'default' }}>
                    Salary (Kes) 20,000 - 40,000
                                                </d>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="cards m-auto bg-white" style={{ borderRadius: 9, width: 336, height: 40, border: '1px solid #C4C4C4' }}>
          <div className="card-body" style={{ marginTop: '-9px' }}>
            <div className="container">
              <div className="row">
                <div className="col-sm d-flex justify-content-start"
                  style={{ marginTop: '-4px', fontSize: 15 }}>
                  <d style={{ fontWeight: 510, color: 'black' }}>Views<d>  <d style={{ color: '#F8BD00', fontWeight: 600 }}>3</d>
                  </d></d></div>
                <div className="col-sm d-flex justify-content-end shortlisted-view" style={{ marginTop: '-3px', fontSize: 15 }}>
                  <d style={{ fontWeight: 510, color: 'black' }}>Shortlisted<d>  <d style={{ color: '#F8BD00', fontWeight: 600 }}>0 X </d>
                  </d></d></div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-6 m-auto">
          <div className="">
            <button style={{ width: '100%' }} className="btn tap-express">Tap to ShortList</button>
          </div>
        </div>
        <div className="cus-space-30" />
        <div className="cus-space-20" />
      </div>
    </>
  );
};

export default DriverFeatureCard;