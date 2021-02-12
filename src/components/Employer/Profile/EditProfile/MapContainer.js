import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import PropTypes from 'prop-types'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const center = {
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

const options = {
  disableDefaultUI: true,
};

const MapContainer = ({ getLocation, title }) => {
  const [marker, setMarker] = useState(null);
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

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(17);
    setMarker({ lat, lng });
  }, []);

  if (loadError) return 'Error loading map';
  if (!isLoaded) return 'Loading Maps...';

  return (
    <React.Fragment>
      <Search panTo={panTo} getLocation={getLocation} title={title} />
      <div id='map-box'>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
          onLoad={onMapLoad}
        >
          {marker && <Marker position={{ lat: marker.lat, lng: marker.lng }} />}
        </GoogleMap>
      </div>
    </React.Fragment>
  );
};

export const Search = ({ panTo, getLocation, title }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => -1.292066, lng: () => 36.821945 },
      radius: 5000,
    },
  });

  return (
    <Combobox
      onSelect={async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
          const results = await getGeocode({ address });
          const { lat, lng } = await getLatLng(results[0]);
          getLocation(address, lat, lng);
          panTo({ lat, lng });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <ComboboxInput
        value={value ? value : title}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder='Nairobi, Kenya'
        className='form-control lacation-input'
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

MapContainer.propTypes = {
  getLocation: PropTypes.func.isRequired
}

export default MapContainer;