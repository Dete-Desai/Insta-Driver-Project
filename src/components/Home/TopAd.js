import React from 'react'
import PropTypes from 'prop-types'

const TopAd = props => {
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
                <img src="dist/img/Top-Ad-Feature.png" className="img-fluid" />
              </div>
              <div className="col-lg-6 text-left mt-3 mb-3 pb-3 font-14">
                <h3 className="section-heading">Top Ad Feature</h3>
                <img src="dist/img/ocean-waves.png" /><br /><br />
                <strong>What This Feature?</strong><br />
                This is a feature that will make your profile get priority on Instadriver search results hence you get more visibility.
                <br /><br />
                <strong>Benefit</strong><br />
                Top Ad Feature will help you get more visibility when employers run a drivers’ search. You appear at the top, hence employers would likely pick your profile. The results is that you increase the odds of getting employment.
                <br /><br />
                <strong>How Much Does It Cost</strong><br />
                There are two packages: Two week Top Ad and One Month Top Ad. When you purchase the “Two Week Top Ad”, your profile will appear above search results for two weeks. And it costs $ 10 (Kshs. 1,000). If you choose the “One Month Top Ad”, your profile will appear above search results for one whole month. This will cost you $18 (Kshs. 1,800).
                <br /><br />
                <strong>How Do I Buy Top Ad</strong><br />
                Just log in to your account, buy your prefered Package and that’s it. The rest will be handled by Instadriver.
              </div>
            </div>
          </div>
          <section className="yellowbg12">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading mb-1">Watch This Video To Learn More About Top Ad Feature</h2>
                  <video width={1104} height={508} controls className="mt-4 img-fluid">
                    <source src="{{get_video($setting->top_ad_features)}}" type="video/mp4" />
                    <source src="images/uploads/setting/TFVDO_1576244122.mp4" type="video/mp4" /> 
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

TopAd.propTypes = {

}

export default TopAd
