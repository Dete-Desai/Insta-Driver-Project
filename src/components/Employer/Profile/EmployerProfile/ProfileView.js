import React from 'react';
import { useSelector } from 'react-redux';
import "./index.css";


const ProfileView = ({ user_profile }) => {
  return (
    <div className='card user-profile-card'>
      {
        user_profile && user_profile.cover ?
          <img
            src={user_profile.cover}
            alt='employer-cover'
            className="employer-cover"
          />
          :
          <img
            src='https://www.instadriver.co/images/employerbg.png'
            alt='employer-cover'
            className="employer-cover"
          />
      }

      <div className='row'>
        <div className='col-md-12 text-center'>
          <div className='profile-image'>
            {
              user_profile && user_profile.avatar ?
                <img
                  src={user_profile.avatar}
                  className='user-avatar'
                  width='150'
                  alt='profile'
                  style={{ border: '1px solid #ADADAD' }}
                />
                :
                <img
                  src={'https://www.instadriver.co/images/ellipse.png'}
                  className='user-avatar'
                  width='150'
                  alt='profile'
                />

            }


          </div>
        </div>
      </div>
      <div className='row meta-data-row'>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-5'>
              {
                user_profile && user_profile.businessName ?
                  <div className='text-center card-employer'>{user_profile.businessName}</div>
                  :
                  <div className='text-center card-employer'>Employer X</div>
              }
            </div>
            <div className='col-md-5'>
              <div className='card-website'>
                <h5>
                  <span className='card-website-label'>
                    <i
                      className='fas fa-link fa-lg'
                      style={{
                        color: "goldenrod",
                      }}
                    ></i>
                  </span>
                  {
                    user_profile && user_profile.website ?
                      <span className='website-info'>{user_profile.website}</span>
                      :
                      <span className='website-info'>No Website</span>
                  }
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card-tagline text-center'>
            <h5>
              {
                user_profile && user_profile.tagLine ?
                  <span className='website-info'>{user_profile.tagLine} </span>
                  :
                  <span className='website-info'>Employer has not yet added a tagline here </span>
              }
            </h5>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfileView;