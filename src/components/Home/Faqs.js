import React from 'react'
import PropTypes from 'prop-types'

const Faqs = props => {
    return (
        <div>
                    <div>
                  <div>
        <section className="searchbg title">
          <div className>
          </div></section>
        <header className="masthead" style={{backgroundImage: 'url({{ get_banner_image($banner->banner,"resize") }})'}}>
          <header className="masthead" style={{backgroundImage: 'url("/images/header-bg.png")'}}>
            <div className="container">
              <div className="col-lg-5 intro-text" style={{height: '280px'}}>
              </div>
            </div>
          </header>
          <div className="container mt-5 mb-5">
            <div className="wrapper center-block">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading{{$k}}">
                    <h4 className="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse{{$k}}" aria-expanded="true" aria-controls="collapse{{$k}}">
                      </a>
                    </h4>
                  </div>
                  <div id="collapse{{$k}}" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{$k}}">
                    <div className="panel-body">
                    </div>
                  </div>
                </div>
                <p className="error-root">No Faqs Found</p>
              </div>
            </div>
          </div>
        </header></div>
        </div>
        </div>
    )
}

Faqs.propTypes = {

}

export default Faqs
