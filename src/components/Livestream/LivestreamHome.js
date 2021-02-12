import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import LivestreamHeader from './LivestreamHeader';
import LivestreamUserSection from './LivestreamUserSection';
import LivestreamMoreSection from './LivestreamMoreSection';
import LivestreamMainPlayer from './LivestreamMainPlayer';
import LivestreamComments from './LivestreamComments';
import LivestreamSearchResult from './LivestreamSeachResult';
import RegisterPopUp from './RegisterPopup';
import './index.css';

const LivestreamHome = () => {
  const [search, setSearch] = useState(null);
  const [showChat, setShowChat] = useState(true);
  const [sereneMode, setSereneMode] = useState(false);
  const [pastStream, setPastStream] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const livestream = true;

  const toggleChatDiv = () => setShowChat(!showChat);
  const toggleSereneMode = () => setSereneMode(!sereneMode);
  const getSearchInput = (search) => {
    setSearch(search);
    if (search === '') {
      setPastStream(false);
    }
  };
  const viewPastStream = () => setPastStream(true);
  const goBack = () => {
    setSearch(null);
    setSereneMode(false);
    setPastStream(false);
  };
  const triggerPopUp = () => {
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  const currPlayingVideo = (videoId, url) => {
    return {videoId, url};
  }

  let leftOveralColumns =
    search && search !== ''
      ? 'col-sm-12 col-md-5 col-lg-5'
      : 'col-sm-12 col-md-8 col-lg-8';
  let rightOveralColumns =
    search && search !== ''
      ? 'col-sm-12 col-md-7 col-lg-7'
      : 'col-sm-12 col-md-4 col-lg-4';

  const hash = window.location.pathname;

  return (
    <div className='container livestream-relative'>
      <LivestreamHeader getSearchInput={getSearchInput} hash={hash} />
      {livestream ? (
        <div className='row livestream-body'>
          {search === null || search === '' ? (
            <React.Fragment>
              {!pastStream ? (
                <React.Fragment>
                  <div className={leftOveralColumns}>
                    <div className='row width-100'>
                      <div className='col-sm-12 col-md-6 col-lg-6'>
                        {sereneMode ? null : (
                          <React.Fragment>
                            <LivestreamUserSection
                              viewPastStream={viewPastStream}
                            />
                            <LivestreamMoreSection currPlayingVideo={currPlayingVideo} />
                          </React.Fragment>
                        )}
                      </div>
                      <div className='col-sm-12 col-md-6 col-lg-6'>
                        <LivestreamMainPlayer
                          toggleChatDiv={toggleChatDiv}
                          showChat={showChat}
                          search={search}
                          pastStream={pastStream}
                          toggleSereneMode={toggleSereneMode}
                          sereneMode={sereneMode}
                          goBack={goBack}
                          triggerPopUp={triggerPopUp}
                          currPlayingVideo={currPlayingVideo}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={rightOveralColumns}>
                    {(search === null || search === '') &&
                    showChat &&
                    !sereneMode ? (
                      <LivestreamComments />
                    ) : null}
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className='col-sm-12 col-md-7 col-lg-7'>
                    <Fade cascade direction={'right'}>
                      <LivestreamSearchResult pastStream={pastStream} currPlayingVideo={currPlayingVideo} />
                    </Fade>
                  </div>
                  <div className='col-sm-12 col-md-5 col-lg-5 mx-auto'>
                    <div className='py-5 px-5'>
                      <Fade cascade direction={'left'}>
                        <LivestreamMainPlayer
                          toggleChatDiv={toggleChatDiv}
                          showChat={showChat}
                          search={search}
                          pastStream={pastStream}
                          toggleSereneMode={toggleSereneMode}
                          sereneMode={sereneMode}
                          goBack={goBack}
                          triggerPopUp={triggerPopUp}
                          currPlayingVideo={currPlayingVideo}
                        />
                      </Fade>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={leftOveralColumns}>
                <div className='py-5 px-5'>
                  <Fade cascade direction={'left'}>
                    <LivestreamMainPlayer
                      toggleChatDiv={toggleChatDiv}
                      showChat={showChat}
                      search={search}
                      pastStream={pastStream}
                      toggleSereneMode={toggleSereneMode}
                      sereneMode={sereneMode}
                      goBack={goBack}
                      triggerPopUp={triggerPopUp}
                      currPlayingVideo={currPlayingVideo}
                    />
                  </Fade>
                </div>
              </div>
              <div className={rightOveralColumns}>
                <Fade cascade direction={'right'}>
                  <LivestreamSearchResult currentPlayingVideo={currPlayingVideo} />
                </Fade>
              </div>
            </React.Fragment>
          )}
        </div>
      ) : (
        <div className='row'>
          <div className='col-md-6 mx-auto no-livestream'>
            Oops! No streams available! <br /> Visit later and check out the
            streams that will be available
          </div>
        </div>
      )}
      {showPopUp && <RegisterPopUp closePopUp={closePopUp} />}
    </div>
  );
};

export default LivestreamHome;
