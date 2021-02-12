import React from 'react'
import PropTypes from 'prop-types'

const ContactUs = props => {
    return (
        <div>
                  <div>
        <section className="searchbg title">
          <div className>
          </div></section>
        <header className="masthead" style={{backgroundImage: 'url("/images/header-bg.png")'}}>
          <div className="container">
            <div className="col-lg-5 intro-text" style={{height: '280px'}}>
            </div>
          </div>
        </header>
        <div className="container mt-5 mb-5">
          <section className="mbr-section form4 cid-qv5Aq4h3k3" id="form4-2y" data-rv-view={5142}>
            <div className="container">
              <div className="row">
                <div className="container text-center mb-4">
                  <h2 className="section-heading">Contact Us</h2>
                  <img src="images/ocean-waves.png" />
                </div>
                <div className="col-md-6">
                  <div className="google-map"><iframe frameBorder={0} style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&q=place_id:ChIJBalHArARLxgRO0PRL8W2xYU" allowFullScreen width="100%;" height="350px" /></div>
                </div>
                <div className="col-md-6">
                  <div className=""> </div>
                  {/* <div className="alert alert-danger">
                    <strong>Whoops!</strong> There were some problems with your input.<br /><br />
                    <ul>
                      <li></li>
                    </ul>
                  </div> */}
                  <div>
                    <div className="icon-contacts pb-3">
                      <p className="mbr-text align-left mbr-fonts-style display-7">
                        {/*                        Phone: +254722334455, +254711887754<br>*/}
                        Email: <a href="mailto:saysomething@instadriver.co">saysomething@instadriver.co</a>
                      </p>
                    </div>
                  </div>
                  <div data-form-type="formoid">
                    <div data-form-alert hidden>
                      Thanks for filling out the form!
                    </div>
                    <form name="frmContact" id="frmContact" action="{{ route('cms.save_contact') }}" method="post" encType="multipart/form-data">
                      <div className="row">
                        <div className="col-md-6 multi-horizontal" data-for="name">
                          <input type="text" className="form-control input" data-form-field="Name" placeholder="Your Name" id="name" name="name" autofocus />
                        </div>
                        <div className="col-md-6 multi-horizontal" data-for="phone">
                          <input type="text" className="form-control input" data-form-field="Phone" placeholder="Your Mobile Number" id="mobile" name="mobile" autofocus />
                        </div>
                        <div className="col-md-12 mt-3 mb-3" data-for="email">
                          <input type="text" className="form-control input" data-form-field="Email" placeholder="Your Email" id="email" name="email" autofocus />
                        </div>
                        <div className="col-md-12" data-for="message">
                          <textarea className="form-control input" data-form-field="Message" placeholder="Message" style={{resize: 'none'}} id="msg" name="msg" rows={3} cols={3} autofocus defaultValue={""} />
                        </div>
                        <div className="input-group-btn col-md-12" style={{marginTop: '10px'}}>
                          <button href type="submit" className="btn btn-primary btn-form display-4">SEND MESSAGE</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
        </div>
    )
}

ContactUs.propTypes = {

}

export default ContactUs
