import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import { PostRoute } from "../Api/index";
const { Post, Get } = PostRoute();

export const GetCurrencyFromAddress = async (val) => {
  try {
    console.log("val --- selected", val);

    const parameter = {
      address: val,
    };

    let geoCodeRes = await getGeocode(parameter);
    console.log("geo code res", geoCodeRes);
    let countryObj = geoCodeRes[0].address_components.filter((adObj) =>
      adObj.types.includes("country")
    );
    console.log("countryobj ---", countryObj[0].short_name);
    let countryDetails = await Get(
      `https://restcountries.eu/rest/v2/name/${countryObj[0].short_name}?fullText=true`
    );

    console.log(
      "country details res",
      countryDetails.data[0].currencies[0].code
    );

    return countryDetails.data[0].currencies[0].code;
  } catch (error) {
    console.log("error in getting currency, --", error);
  }
};
