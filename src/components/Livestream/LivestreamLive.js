import React, { useState } from 'react';
import AllowMicCam from './AllowMicCam';
import AgreeToTerms from './AgreeToTerms';
import LivestreamComments from './LivestreamComments';
import EndLivestreamPopUp from './EndLivestreamPopUp';
import './index.css';

const LivestreamLive = () => {
  const [formData, setFormData] = useState({
    streamTo: 'streamToWorld',
    useCustom: 'customDescription',
    title: '',
    description: '',
    cusTitle: 'Check Out This Stream!',
    cusDescription: 'I wanted to quickly livestream this. Should I say you will be amazed or shocked!? Anyway, just watch the stream for yourself and share your comments!'
  });
  const [showPopUp, setShowPopUp] = useState(false);
  const [liveStreamStarted, setLivestreamStarted] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [agreed, setAgreed ]= useState(false);
  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const { streamTo, useCustom, title, description, cusTitle, cusDescription } = formData;

  const closePopUp = () => {
    setShowPopUp(false);
  }

  return (
    <React.Fragment>
      { !agreed ? (
        <React.Fragment>
        { !allowed ? (
          <AllowMicCam setAllowed={setAllowed} />
        ) : (
          <AgreeToTerms setAgreed={setAgreed} />
        ) }
        </React.Fragment>
      ) : (
        <div className="bg-cyan">
          <div className="container livestream-setup">
            { !liveStreamStarted ? (
              <React.Fragment>
                <div className="intro"> Let’s Set Up Things Quickly Before You Go Live
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5 col-lg-5">
                    <div className="card card-body mb-3">
                      <form>
                      <div className="stream-to-row">
                        <div className='form-check upper'>
                          <input
                            type='radio'
                            name='streamTo'
                            value="streamToWorld"
                            onChange={(e) => handleChange(e)}
                            checked={streamTo === 'streamToWorld'}
                            id='radio1'
                            className='form-check-input'
                          />
                          <label htmlFor='radio1'></label>
                        </div>
                        <div className="helper-text">
                          <h4>Stream to the world</h4>
                          <p>Viewers include anyone who visits Instadriver stream whether he has account or not</p>
                        </div>
                      </div>
                      <div className="stream-to-row">
                        <div className='form-check upper'>
                          <input
                            type='radio'
                            name='streamTo'
                            value="streamToComrades"
                            onChange={(e) => handleChange(e)}
                            checked={streamTo === 'streamToComrades'}
                            id='radio2'
                            className='form-check-input'
                          />
                          <label htmlFor='radio2'></label>
                        </div>
                        <div className="helper-text">
                          <h4>Stream to comrades on Instadriver</h4>
                          <p>Your stream will be watched only by drivers who have created account on Instariver.</p>
                        </div>
                      </div>
                      </form>
                    </div>
                    <div className="card card-body">
                      <form>
                      <div className="stream-to-row mb-3">
                        <div className='form-check upper'>
                          <input
                            type='radio'
                            name='useCustom'
                            value="customDescription"
                            onChange={(e) => handleChange(e)}
                            checked={useCustom === 'customDescription'}
                            id='radio3'
                            className='form-check-input'
                          />
                          <label htmlFor='radio3'></label>
                        </div>
                        <div className="helper-text">
                          <h4>Custom describe your stream</h4>
                        </div>
                      </div>
                      <div className="stream-to-row mb-3">
                        <div className='form-check upper'>
                          <input
                            type='radio'
                            name='useCustom'
                            value="useTemplates"
                            onChange={(e) => handleChange(e)}
                            checked={useCustom === 'useTemplates'}
                            id='radio4'
                            className='form-check-input'
                          />
                          <label htmlFor='radio4'></label>
                        </div>
                        <div className="helper-text">
                          <h4>Use template to describe your stream</h4>
                        </div>
                      </div>
                      </form>
                      { useCustom === 'customDescription' && (
                        <div className="description">
                          <div className="mb-3">
                            <h5>Stream Title</h5>
                            <p>It can be as simple title like, “Accident at Westy Road” or “At the garage”</p>
                            <input
                            type="text" 
                            name="title" 
                            id="title" 
                            value={title}
                            maxLength={50}
                            onChange={e => handleChange(e)}
                            className="form-control"/>
                            <span>0/50</span>
                          </div>
                          <div>
                            <h5>Quick description for your stream. </h5>
                            <p>In few words, describe what you are streaming about.  </p>
                            <textarea
                            name="description" 
                            id="description" 
                            cols="30" 
                            rows="10" 
                            maxLength={100}
                            value={description}
                            onChange={e => handleChange(e)}
                            className="form-control"></textarea>
                            <span>0/100</span>
                          </div>
                        </div>
                      )}
                      { useCustom === 'useTemplates' && (
                        <div className="description">
                          <div className="mb-3">
                            <h5>Stream Title</h5>
                            <input
                            type="text" 
                            name="title" 
                            id="title" 
                            value={cusTitle}
                            maxLength={50}
                            disabled
                            onChange={e => handleChange(e)}
                            className="form-control bg-gray"/>
                          </div>
                          <div>
                            <h5>Quick description for your stream. </h5>
                            <textarea
                            name="description" 
                            id="description" 
                            disabled
                            cols="30" 
                            rows="10" 
                            maxLength={100}
                            value={cusDescription}
                            onChange={e => handleChange(e)}
                            className="form-control bg-gray"></textarea>
                          </div>
                        </div>
                      )}
                    </div>
                    <button className="start-livestream" onClick={() => {setLivestreamStarted(true);}}>Start Livestream</button>
                  </div>
                  <div className="col-sm-12 col-md-7 col-7">
                  <div className="video-wrapper">
                    <img src="/images/Rectangle 383.png" alt="UserImage" className="user-video-img"/>
                  </div>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <div className="row py-5 user-live">
                <div className="col-sm-12 col-md-5 col-lg-5">
                  <LivestreamComments />
                  <button className="start-livestream mb-2" onClick={() => setShowPopUp(true)}>End Livestream</button>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7">
                  <div className="video-wrapper">
                    <img src="/images/Rectangle 383.png" alt="UserImage" className="user-video-img"/>
                    <span>LIVE</span>
                  </div>
                  <div className='livestream-poster'>
                    <div className='poster-title'>
                      <h4>Driver Protests in Bombay</h4>
                      <span>You started streaming 2 seconds ago</span>
                    </div>
                    <p className="bg-white stretch-less">
                      I attended the drivers protestation in Bombay. Very interesting events unfolding. Streaming it for the world to see the grievances of drivers. Enjoy Stream!
                    </p>
                  </div>
                </div>
                { showPopUp && <EndLivestreamPopUp closePopUp={closePopUp} />}
              </div>
            ) }
          </div>
        </div>
      ) }
    </React.Fragment>
  );
}

export default LivestreamLive;