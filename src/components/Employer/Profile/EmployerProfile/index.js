import React, { useCallback} from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from 'react-redux';
import { addPic} from "../../../../redux/actions/employer_actions/employer_profile_actions";
import "./index.css";

const EmployerProfile = () => {
  const employer_profile = useSelector(state => state.employer_reducers.employer_profile);
  const { token } = useSelector(state => state.user_reducers.user_credentials);
  const dispatch = useDispatch();

  const { 
    firstName,
    lastName, 
    cover, 
    avatar, 
    tagLine, 
    website 
  } = employer_profile;

  const MyDropzone = ({ picId }) => {
    const onDrop = useCallback((acceptedFile) => {

      let formdata = new FormData();
      formdata.append("file", acceptedFile[0]);

      dispatch(addPic(token, formdata, picId));
    }, [picId]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false,
      accept: "image/jpeg, image/png",
    });

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <React.Fragment>
            { picId === 'avatar' ?  
              <i className='fas fa-edit fa-stack-1x fa-inverse' style={{cursor:'pointer'}}></i> : <i className='fas fa-edit fa-lg' style={{cursor:'pointer'}}></i>
            }
          </React.Fragment>
        )}
      </div>
    );
  };
  
  return (
    <div className='card user-profile-card'>
      <div className='btn btn-labeled btn-light button-cp'>
        <div className='btn-label'>
            <MyDropzone picId={'cover'} />
          </div>
          Add Cover
      </div>
      <img
        src={cover ? cover :'https://www.instadriver.co/images/employerbg.png'}
        alt='employer-cover'
        className="employer-cover"
      />
      <div className='row'>
        <div className='col-md-12 text-center'>
          <div className='profile-image'>
            <img
              src={avatar ? avatar : 'https://www.instadriver.co/images/ellipse.png'}
              className='user-avatar'
              width='150'
              alt='profile'
            />
            <span className='fa-stack fa-lg'>
              <i className='fas fa-circle fa-stack-2x'></i>
              <MyDropzone picId={'avatar'} />
            </span>
          </div>
        </div>
      </div>
      <div className='row meta-data-row'>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='text-center card-employer'>{firstName && lastName ? firstName+' '+lastName : 'Employer X'}</div>
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
                  <span className='website-info'>{website ? website : 'No Website'}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card-tagline text-center'>
            <h5>
              <span className='website-info'>
                {tagLine ? tagLine :'Employer has not yet added a tagline here'}
              </span>
            </h5>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default EmployerProfile;
