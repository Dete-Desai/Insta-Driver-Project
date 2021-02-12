import React from 'react'
import PropTypes from 'prop-types'

const VerifiedSearch = props => {
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
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-6 text-left mt-3 mb-3 pb-3">
                <img src="dist/img/Verified-Feature-1.png" className="img-fluid" />
              </div>
              <div className="col-lg-6 text-left mt-3 mb-3 pb-3 font-14">
                <h3 className="section-heading">Verified Search</h3>
                <img src="dist/img/ocean-waves.png" /><br /><br />
                By using Verified Search you will only view the results of all the drivers that have been verified by Instadriver. A driver who is marked verified means that:
                <br />
                <ul className="mt-3">
                  <li>He has been test-driven by Instadriver and rated competent to drive. This will help you not hire incompetent drivers and will surely cut the selection curve. It will also prevent accidents.
                  </li>
                  <li>His driving documents have been verified as valid documents and not forged. Hiring non-qualified drivers or drivers with fake documents will cost you a lot. 
                  </li>
                </ul>
                To use this feature, you will pay $ 20 (i.e. Kshs. 2,000) and a link of the verified search results will be shown and sent to your email. The link will automatically expire after 3 days. The shown results can be saved as PDF or printed.
                <br /><br />
                The difference between free search and verified search is that in free search, we dont subject drivers to test-driving and we do not validate whether his documents are valid. The employer will undertake these tasks by himself. With Verified search, we do it for you.
              </div>
            </div>
          </div>
          <section className="yellowbg12">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading mb-1">Watch This Video To Learn More About Verified Search</h2>
                  <video width={1104} height={508} controls className="mt-4 img-fluid">
                    <source src="{{get_video($setting->verified_search)}}" type="video/mp4" />
                    <source src="dist/images/uploads/setting/VSVDO_1576501484.mp4" type="video/mp4" />
                  </video>
                  <br /><br />
                </div>
              </div>
            </div>
          </section>
      </div>
        </div>
    )
}

VerifiedSearch.propTypes = {

}

export default VerifiedSearch
