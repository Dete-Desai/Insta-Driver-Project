import React from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { updateCurrency } from "../../../redux/actions/driver_actions/driver_profile_actions";

import { PostRoute } from "../../../Api/index";
const { Post, Get } = PostRoute();

const SelectCurrency = ({ userInfo, handleChange, session_token }) => {
  const dispatch = useDispatch();

  function handleCurrencySubmit(e) {
    e.preventDefault();

    dispatch(updateCurrency(session_token, get(userInfo, "currency")));
    alert("Currency info submitted");
  }


  // const {
  //   ready,
  //   value,
  //   suggestions: { status, data },
  //   setValue,
  // } = usePlacesAutocomplete();

  
  // const getCurrencyFromAddress = async (val) => {
  //   setValue(val, false);
  //   console.log("val --- selected", val);

  //   const parameter = {
  //     address: val,
  //   };

  //   let geoCodeRes = await getGeocode(parameter);
  //   console.log("geo code res", geoCodeRes);
  //   let countryObj = geoCodeRes[0].address_components.filter((adObj) =>
  //     adObj.types.includes("country")
  //   );
  //   console.log("countryobj ---", countryObj[0].short_name);
  //   let countryDetails = await Get(`https://restcountries.eu/rest/v2/name/${countryObj[0].short_name}?fullText=true`)

  //   console.log("country details res",countryDetails.data[0].currencies[0].code);

  // };


  return (
    <div className="select__currency section__style pr-2 pb-3 pt-5 bg-white mt-3">
      {/* {userInfo && getCurrencyFromAddress("united states")} */}

      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">
          Select Currency To Display For Your Profile
        </h5>
        <div className="col-md-12 px-4 py-2 currencyInfo my-4">
          <p style={{ color: "#969393" }}>
            This is default currency. You can change it. When you fill the
            salary range, the currency you select will be the one used. You are
            advised to select the currency used in your country. When employers
            filter salary range, they use the currency they are familiar with.
            i.e. The currency of their country.
          </p>
        </div>
      </div>
      <form className="col-md-12 mt-4" onSubmit={handleCurrencySubmit}>
        <div className="row">
          <div className="col-md-7 mb-5">
            <div className="m-auto" style={{ width: "280px" }}>
              <select
                className="form-control inputIcon-none"
                value={get(userInfo, "currency") || ""}
                defaultValue="USD"
                onChange={handleChange}
                name="currency"
                disabled={true}
                id="salary_range_currency"
                required
                // onClick={()=>getCurrencyFromAddress("USA")}
              >
                <option value="">Select Currency</option>
                <option value="AFN">Afghan Afghani</option>
                <option value="ALL">Albanian Lek</option>
                <option value="DZD">Algerian Dinar</option>
                <option value="EUR">Andorra Euro</option>
                <option value="AOA">Angolan Kwanza</option>
                <option value="XCD">East Caribbean Dolla</option>
                <option value="XCD">East Caribbean Dolla</option>
                <option value="ARS">Argentine Peso</option>
                <option value="AMD">Armenian Dram</option>
                <option value="AWG">Aruban Florin</option>
                <option value="AUD">Australian Dollar</option>
                <option value="EUR">Austria Euro</option>
                <option value="AZN">Azerbaijani Manat</option>
                <option value="BHD">Bahraini Dinar</option>
                <option value="BDT">Bangladeshi Taka</option>
                <option value="BBD">Barbadian Dollar</option>
                <option value="BYR">Belarusian Ruble</option>
                <option value="EUR">Belgium Euro</option>
                <option value="BZD">Belize Dollar</option>
                <option value="XOF">West African CFA Fra</option>
                <option value="BMD">Bermudian Dollar</option>
                <option value="BTN">Bhutanese Ngultrum</option>
                <option value="BWP">Botswana Pula</option>
                <option value="BRL">Brazilian Real</option>
                <option value="BGN">Bulgarian Lev</option>
                <option value="XOF">West African CFA Fra</option>
                <option value="BIF">Burundian Franc</option>
                <option value="KHR">Cambodian Riel</option>
                <option value="XAF">Central African CFA </option>
                <option value="CAD">Canadian Dollar</option>
                <option value="CVE">Cape Verdean Escudo</option>
                <option value="KYD">Cayman Islands Dolla</option>
                <option value="XAF">Central African CFA </option>
                <option value="CLP">Chilean Peso</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="COP">Colombian Peso</option>
                <option value="KMF">Comorian Franc</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="CRC">Costa Rican Colón</option>
                <option value="XOF">West African CFA Fra</option>
                <option value="HRK">Croatian Kuna</option>
                <option value="CUC">Cuban Convertible Pe</option>
                <option value="EUR">Cyprus Euro</option>
                <option value="CZK">Czech Koruna</option>
                <option value="DKK">Danish Krone</option>
                <option value="DJF">Djiboutian Franc</option>
                <option value="XCD">East Caribbean Dolla</option>
                <option value="DOP">Dominican Peso</option>
                <option value="USD">United States Dollar</option>
                <option value="EGP">Egyptian Pound</option>
                <option value="USD">United States Dollar</option>
                <option value="XAF">Central African CFA </option>
                <option value="ERN">Eritrean Nakfa</option>
                <option value="EUR">Estonia Euro</option>
                <option value="ETB">Ethiopian Birr</option>
                <option value="DKK">Danish Krone</option>
                <option value="FJD">Fijian Dollar</option>
                <option value="EUR">Finland Euro</option>
                <option value="EUR">France Euro</option>
                <option value="XPF">CFP Franc</option>
                <option value="XAF">Central African CFA </option>
                <option value="GEL">Georgian Lari</option>
                <option value="EUR">Germany Euro</option>
                <option value="GHS">Ghana Cedi</option>
                <option value="GIP">Gibraltar Pound</option>
                <option value="EUR">Greece Euro</option>
                <option value="XCD">East Caribbean Dolla</option>
                <option value="GTQ">Guatemalan Quetzal</option>
                <option value="GBP">British Pound</option>
                <option value="GNF">Guinean Franc</option>
                <option value="XOF">West African CFA Fra</option>
                <option value="GYD">Guyanese Dollar</option>
                <option value="HTG">Haitian Gourde</option>
                <option value="HNL">Honduran Lempira</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="HUF">Hungarian Forint</option>
                <option value="ISK">Icelandic Króna</option>
                <option value="INR">Indian Rupee</option>
                <option value="IDR">Indonesian Rupiah</option>
                <option value="IQD">Iraqi Dinar</option>
                <option value="EUR">Ireland Euro</option>
                <option value="GBP">British Pound</option>
                <option value="ILS">Israeli New Shekel</option>
                <option value="EUR">Italy Euro</option>
                <option value="JMD">Jamaican Dollar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="GBP">British Pound</option>
                <option value="JOD">Jordanian Dinar</option>
                <option value="KZT">Kazakhstani Tenge</option>
                <option value="KES">Kenyan Shilling</option>
                <option value="AUD">Australian Dollar</option>
                <option value="KWD">Kuwaiti Dinar</option>
                <option value="KGS">Kyrgyzstani Som</option>
                <option value="LAK">Lao Kip</option>
                <option value="EUR">Latvia Euro</option>
                <option value="LBP">Lebanese Pound</option>
                <option value="LSL">Lesotho Loti</option>
                <option value="LRD">Liberian Dollar</option>
                <option value="CHF">Swiss Franc</option>
                <option value="EUR">Lithuania Euro</option>
                <option value="EUR">Luxembourg Euro</option>
                <option value="MGA">Malagasy Ariary</option>
                <option value="MWK">Malawian Kwacha</option>
                <option value="MYR">Malaysian Ringgit</option>
                <option value="MVR">Maldivian Rufiyaa</option>
                <option value="XOF">West African CFA Fra</option>
                <option value="EUR">Malta Euro</option>
                <option value="USD">United States Dollar</option>
                <option value="MRO">Mauritanian Ouguiya</option>
                <option value="MUR">Mauritian Rupee</option>
                <option value="MXN">Mexican Peso</option>
                <option value="MDL">Moldovan Leu</option>
                <option value="EUR">Monaco Euro</option>
                <option value="MNT">Mongolian Tögrög</option>
                <option value="EUR">Montenegro Euro</option>
                <option value="XCD">East Caribbean Dolla</option>
                <option value="MAD">Moroccan Dirham</option>
                <option value="MZN">Mozambican Metical</option>
                <option value="MMK">Burmese Kyat</option>
                <option value="NAD">Namibian Dollar</option>
                <option value="AUD">Australian Dollar</option>
                <option value="NPR">Nepalese Rupee</option>
                <option value="EUR">Netherlands Euro</option>
                <option value="XPF">CFP Franc</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="NIO">Nicaraguan Córdoba</option>
                <option value="XOF">West African CFA Fra</option>
                <option value="NGN">Nigerian Naira</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="OMR">Omani Rial</option>
                <option value="PKR">Pakistani Rupee</option>
                <option value="PAB">Panamanian Balboa</option>
                <option value="PGK">Papua New Guinean Ki</option>
                <option value="PYG">Paraguayan Guaraní</option>
                <option value="PEN">Peruvian Nuevo Sol</option>
                <option value="PHP">Philippine Peso</option>
                <option value="PLN">Polish Z?oty</option>
                <option value="EUR">Portugal Euro</option>
                <option value="QAR">Qatari Riyal</option>
                <option value="RON">Romanian Leu</option>
                <option value="RUB">Russian Ruble</option>
                <option value="RWF">Rwandan Franc</option>
                <option value="XCD">East Caribbean Dolla</option>
                <option value="WST">Samoan</option>
                <option value="EUR">San Marino Euro</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="XOF">West African CFA Fra</option>
                <option value="RSD">Serbian Dinar</option>
                <option value="SCR">Seychellois Rupee</option>
                <option value="SLL">Sierra Leonean Leone</option>
                <option value="BND">Brunei Dollar</option>
                <option value="EUR">Slovakia Euro</option>
                <option value="EUR">Slovenia Euro</option>
                <option value="SBD">Solomon Islands Doll</option>
                <option value="SOS">Somali Shilling</option>
                <option value="ZAR">South African Rand</option>
                <option value="EUR">Spain Euro</option>
                <option value="LKR">Sri Lankan Rupee</option>
                <option value="SDG">Sudanese Pound</option>
                <option value="SRD">Surinamese Dollar</option>
                <option value="SZL">Swazi Lilangeni</option>
                <option value="SEK">Swedish Krona</option>
                <option value="CHF">Swiss Franc</option>
                <option value="TWD">New Taiwan Dollar</option>
                <option value="TJS">Tajikistani Somoni</option>
                <option value="THB">Thai Baht</option>
                <option value="XOF">West African CFA Fra</option>
                <option value="TOP">Tongan Pa?anga</option>
                <option value="TTD">Trinidad And Tobago </option>
                <option value="TND">Tunisian Dinar</option>
                <option value="TRY">Turkish Lira</option>
                <option value="TMT">Turkmenistan Manat</option>
                <option value="AUD">Australian Dollar</option>
                <option value="UGX">Ugandan Shilling</option>
                <option value="UAH">Ukrainian Hryvnia</option>
                <option value="AED">United Arab Emirates</option>
                <option value="GBP">British Pound</option>
                <option value="USD">&nbsp; &nbsp; $ - USD - US Dollar</option>
                <option value="UYU">Uruguayan Peso</option>
                <option value="UZS">Uzbekistani Som</option>
                <option value="VUV">Vanuatu Vatu</option>
                <option value="VND">Vietnamese ??ng</option>
                <option value="XPF">CFP Franc</option>
                <option value="YER">Yemeni Rial</option>
                <option value="ZMW">Zambian Kwacha</option>
                <option value="BWP">Botswana Pula</option>
              </select>
            </div>
          </div>

          <div className="text-right col-md-12 mr-2 mb-2">
            <button type="submit" className="btn submitBtn">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectCurrency;
