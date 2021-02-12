import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LivestreamSearch = ({ getSearchInput }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const handleSubmit = e => {
    if (e.keyCode === 13) {
      getSearchInput(search);
    }
  }

  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className='form-group has-search'>
        <span className='fas fa-search form-control-feedback custom-color'></span>
        <input
          value={search}
          onChange={e => handleChange(e)}
          onKeyDown={e => handleSubmit(e)}
          className=''
          placeholder='Search topics, drivers or location'
          type='text'
        />
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="livestream-create">
          <Link to="/livestream-live-create" className="btn-create">Create Livestream</Link>
          <span><i className="fas fa-chevron-down"></i></span>
        </div>
      </div>
    </div>
  );
}

export default LivestreamSearch;