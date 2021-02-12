import React, { useEffect } from "react";
// import usePlacesAutoComplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";
import styled from "styled-components";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import {PostRoute} from "../../../Api"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
const {Get} = PostRoute()

export default function InputPlacesWidget(
  {
    //   preferedLocation,
    setLocation,
    setCurrency
  }
) {
  // const libraries = ["places"];

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyCigKo_qdgK82NOWQNOhUcltn_ELubfD00",
  //   libraries: libraries,
  // });

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();


  // adding country restriction
  // const {
  //   ready,
  //   value,
  //   suggestions: { status, data },
  //   setValue,
  // } = usePlacesAutocomplete({
  //   requestOptions:{
  //     componentRestrictions:{country:["fr"]}
  //   }
  // });


  // useEffect(() => {
  //   console.log("map load rerender");
  //   console.log("---- is ready ",);
  // }, [ready,isLoaded,loadError])

  // if (loadError) return "Error loading map";
  // if (!isLoaded) return "Loading Maps...";

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (val) => {
    setValue(val, false);
    console.log("val --- selected", val);
    setLocation(val)

    const parameter = {
      address: val,
    };


    try {
    
      
    let geoCodeRes = await getGeocode(parameter);
    console.log("geo code res", geoCodeRes);
    let countryObj = geoCodeRes[0].address_components.filter((adObj) =>
      adObj.types.includes("country")
    );
    console.log("countryobj ---", countryObj[0].short_name);
    let countryDetails = await Get(`https://restcountries.eu/rest/v2/name/${countryObj[0].short_name}?fullText=true`)

    console.log("country details res",countryDetails.data[0].currencies[0].code);
    setCurrency(countryDetails.data[0].currencies[0].code)

    } catch (error) {
      console.log("error in location & currency",error);
    }

    // .then((results) => {

    //   console.log("res --- ",results[0].address_components);

    //   let countryObj=results[0].address_components.filter((adObj)=> adObj.types.includes("country") )
    //   console.log("country",countryObj);

    //   }
    // .then((latLng) => {
    //   const { lat, lng } = latLng;

    //   console.log("Coordinates: ", { lat, lng });

    //   let newLocation = { location: val, latitude: lat, longitude: lng };
    //   // setPreferedLocation(newLocation);
    //   // console.log("------ location new ", newLocation);
    //   // console.log("------ location pref state ", preferedLocation);
    // })
    // .catch((error) => {
    //   console.log("Error: ", error);
    // });
  };

  const renderSuggestions = () => {
    const suggestions = data.map(({ place_id, description }) => (
      <StyledComboBoxOption key={place_id} value={description} />
    ));

    return <>{suggestions}</>;
  };

  return (
    <StyledDiv>
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <ComboboxInput
          style={{width:"100%"}}
          placeholder="Enter location"
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
        <StyledComboboxPopover>
          <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
        </StyledComboboxPopover>
      </Combobox>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  input {
    font-size: 1rem;
    border-width: 0;
    border-style: solid;
    border-radius: 5px;
    outline: none;
    padding-left: 1.1rem;
    padding-top: 5px;
    padding-bottom: 5px;

    width: 83%;
    height: 2rem;
    :focus {
      border-width: 0.1px;
      border-color: lightgray;
    }
  }
`;
const StyledComboBoxOption = styled(ComboboxOption)`
  margin-top: 3px;
`;

const StyledComboboxPopover = styled(ComboboxPopover)`
  z-index: 99999;
`;

//port useOnclickOutside from "react-cool-onclickoutside";

// const libraries = ['places'];

// const PreferredDriverLocationInput = ({handleChange,preferedLocation,setPreferedLocation}) => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey:
//       process.env.REACT_APP_GOOGLE_MAP_API_KEY ||
//       'AIzaSyCigKo_qdgK82NOWQNOhUcltn_ELubfD00',
//     libraries: libraries,
//   });

//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutoComplete({
//     requestOptions: {
//       location: { lat: () => -1.292066, lng: () => 36.821945 },
//       radius: 5000,
//     },
//     debounce: 300,
//   });

//   const handleSelect = ({ description }) => () => {
//     //When user selects a place, we can replace the keyword without request data from API
//     // by setting the second parameter to "false"
//     setValue(description, false);
//     clearSuggestions();

//     //Get latitude and longitude via utility functions
//     getGeocode({ address: description })
//     .then((results) => getLatLng(results[0]))
//     .then(({ lat, lng }) => {
//       console.log("📍 Coordinates: ", {description, lat, lng});
//       let newLocation = {location:description,latitude: lat,longitude: lng}
//       setPreferedLocation(newLocation)
//       console.log("------ location new ",newLocation);
//       console.log("------ location pref state ",preferedLocation);

//     })
//     .catch((error)=> {
//       console.log("😱 Error:", error);
//     });
//   };

//   const renderSuggestions = () =>
//     data.map((suggestion) => {
//       const {
//         place_id,
//         structured_formatting: { main_text, secondary_text },
//       } = suggestion;

//       return (
//         <li key={place_id} onClick={handleSelect(suggestion)}>
//           <strong>{main_text} ,</strong>
//           <small>{secondary_text}</small>
//         </li>
//       );
//     });

//   if (loadError) return 'Error loading map';
//   if (!isLoaded) return 'Loading Maps...';

//   return (
//     <div>
//       <p className="normal-text" style={{ fontWeight: 500 }}>
//         Preferred Driver Location
//       </p>
//       <small className="graycolor text-left" style={{ fontSize: 15 }}>
//         (Use Cities and Towns to get a wider audience)
//       </small>
//       <div
//         className="form-group col-md-12"
//         style={{ marginLeft: "-15px", maxWidth: 462 }}
//       >
//         <div className="select mb-0">
//         <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCigKo_qdgK82NOWQNOhUcltn_ELubfD00&libraries=places"/>
//           <StyledInput>
//             <input
//               type="text"
//               className="form-control normal-text mirrorthis"
//               name="location"
//               id="location"
//               value={value }
//               onChange={(e) => setValue(e.target.value)}
//               // disabled={ready}
//               placeholder="Enter Preferred Location"
//               style={{ maxWidth: 462, height: 40, backgroundColor: "#F5F5F5" }}
//               onfocus="myFunction4()"
//               required
//             />
//             {/* We can use the "status" to decide whether we should display the dropdown or not */}
//             {status === "OK" && <ul >{renderSuggestions()}</ul>}
//           </StyledInput>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PreferredDriverLocationInput;

// const StyledInput = styled.div`
// ul{
//   width:100%;
//   background-color:#eeeee5;
//   position:absolute;
// }
// li{
//   list-style:none;
//   cursor: pointer;
//   margin-top:5px;
//   margin-bottom:5px;

// }
// `
