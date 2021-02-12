import React from 'react';
import { GoogleMap, Marker, useLoadScript,  } from '@react-google-maps/api';

const center = {
  lat: -1.292066,
  lng: 36.821945,
};

const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
};

const options = {
  disableDefaultUI: true,
};

const MapContainer = ({ markers }) => {
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCigKo_qdgK82NOWQNOhUcltn_ELubfD00',
    libraries: libraries
  });

  if (loadError) return 'Error loading Map'
  if (!isLoaded) return 'Loading...';

  
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      options={options}
      zoom={12}
      center={center}
      >
      { markers.map(marker => (
        <Marker
         key={marker.id} 
         position={{lat: marker.lat, lng: marker.lng}} 
         icon={{
           url: marker.icon,
           scaledSize: new window.google.maps.Size(50,50),
           origin: new window.google.maps.Point(0, 0),
           anchor: new window.google.maps.Point(15, 15),
         }} />
      )) }
    </GoogleMap>
  );
}

export default MapContainer;