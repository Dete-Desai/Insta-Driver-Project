import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types'

const defaultCenter = {
  lat: -1.292066,
  lng: 36.821945,
};

const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderBottomLeftRadius: '15px',
  borderBottomRightRadius: '15px',
};

const ZOOM=process.env.MAP_ZOOM || 14;

const options = {
  disableDefaultUI: true,
};

const MapViewer = ({ location }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      process.env.REACT_APP_GOOGLE_MAP_API_KEY ||
      'AIzaSyCigKo_qdgK82NOWQNOhUcltn_ELubfD00',
    libraries: libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);


  if (loadError) return 'Error loading map';
  if (!isLoaded) return 'Loading Maps...';
  console.log('inside map viewer');
  console.log(location);
  return (
    <React.Fragment>
      <div id='map-box'>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={ZOOM}
          center={(location.longitude && location.latitude)?{lat:location.latitude,lng:location.longitude}:defaultCenter}
          options={options}
          onLoad={onMapLoad}
        >
        <Marker position={{ lat: location.latitude, lng: location.longitude }} />
        </GoogleMap>
      </div>
    </React.Fragment>
  );
};



MapViewer.propTypes = {
  location: PropTypes.object.isRequired
}

export default MapViewer;