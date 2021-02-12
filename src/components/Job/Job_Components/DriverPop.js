import React from 'react'
import PropTypes from 'prop-types';

const DriverPop= props => {
    return (
        <div className="modal fade" id="filterModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Filter</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <form method="get" action="https://instadriver.co/hire_drivers/search" id="frmProfile1">
                {/* Modal body */}
                <div className="modal-body text-left">
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <div className="form-group mb-0">
                        <label htmlFor="currency">Select currency used in your country</label>
                      </div>
                      <div className="select selectbox">
                        <select className="form-control" id="currency" name="currency">
                          <option value>Select Currency</option>
                          <option value="AFN">Afghan Afghani</option><option value="ALL">Albanian Lek</option><option value="DZD">Algerian Dinar</option><option value="EUR">Andorra Euro</option><option value="AOA">Angolan Kwanza</option><option value="XCD">East Caribbean Dolla</option><option value="XCD">East Caribbean Dolla</option><option value="ARS">Argentine Peso</option><option value="AMD">Armenian Dram</option><option value="AWG">Aruban Florin</option><option value="AUD">Australian Dollar</option><option value="EUR">Austria Euro</option><option value="AZN">Azerbaijani Manat</option><option value="BHD">Bahraini Dinar</option><option value="BDT">Bangladeshi Taka</option><option value="BBD">Barbadian Dollar</option><option value="BYR">Belarusian Ruble</option><option value="EUR">Belgium Euro</option><option value="BZD">Belize Dollar</option><option value="XOF">West African CFA Fra</option><option value="BMD">Bermudian Dollar</option><option value="BTN">Bhutanese Ngultrum</option><option value="BWP">Botswana Pula</option><option value="BRL">Brazilian Real</option><option value="BGN">Bulgarian Lev</option><option value="XOF">West African CFA Fra</option><option value="BIF">Burundian Franc</option><option value="KHR">Cambodian Riel</option><option value="XAF">Central African CFA </option><option value="CAD">Canadian Dollar</option><option value="CVE">Cape Verdean Escudo</option><option value="KYD">Cayman Islands Dolla</option><option value="XAF">Central African CFA </option><option value="CLP">Chilean Peso</option><option value="CNY">Chinese Yuan</option><option value="COP">Colombian Peso</option><option value="KMF">Comorian Franc</option><option value="NZD">New Zealand Dollar</option><option value="CRC">Costa Rican Colón</option><option value="XOF">West African CFA Fra</option><option value="HRK">Croatian Kuna</option><option value="CUC">Cuban Convertible Pe</option><option value="EUR">Cyprus Euro</option><option value="CZK">Czech Koruna</option><option value="DKK">Danish Krone</option><option value="DJF">Djiboutian Franc</option><option value="XCD">East Caribbean Dolla</option><option value="DOP">Dominican Peso</option><option value="USD">United States Dollar</option><option value="EGP">Egyptian Pound</option><option value="USD">United States Dollar</option><option value="XAF">Central African CFA </option><option value="ERN">Eritrean Nakfa</option><option value="EUR">Estonia Euro</option><option value="ETB">Ethiopian Birr</option><option value="DKK">Danish Krone</option><option value="FJD">Fijian Dollar</option><option value="EUR">Finland Euro</option><option value="EUR">France Euro</option><option value="XPF">CFP Franc</option><option value="XAF">Central African CFA </option><option value="GEL">Georgian Lari</option><option value="EUR">Germany Euro</option><option value="GHS">Ghana Cedi</option><option value="GIP">Gibraltar Pound</option><option value="EUR">Greece Euro</option><option value="XCD">East Caribbean Dolla</option><option value="GTQ">Guatemalan Quetzal</option><option value="GBP">British Pound</option><option value="GNF">Guinean Franc</option><option value="XOF">West African CFA Fra</option><option value="GYD">Guyanese Dollar</option><option value="HTG">Haitian Gourde</option><option value="HNL">Honduran Lempira</option><option value="HKD">Hong Kong Dollar</option><option value="HUF">Hungarian Forint</option><option value="ISK">Icelandic Króna</option><option value="INR">Indian Rupee</option><option value="IDR">Indonesian Rupiah</option><option value="IQD">Iraqi Dinar</option><option value="EUR">Ireland Euro</option><option value="GBP">British Pound</option><option value="ILS">Israeli New Shekel</option><option value="EUR">Italy Euro</option><option value="JMD">Jamaican Dollar</option><option value="JPY">Japanese Yen</option><option value="GBP">British Pound</option><option value="JOD">Jordanian Dinar</option><option value="KZT">Kazakhstani Tenge</option><option value="KES" selected="true">Kenyan Shilling</option><option value="AUD">Australian Dollar</option><option value="KWD">Kuwaiti Dinar</option><option value="KGS">Kyrgyzstani Som</option><option value="LAK">Lao Kip</option><option value="EUR">Latvia Euro</option><option value="LBP">Lebanese Pound</option><option value="LSL">Lesotho Loti</option><option value="LRD">Liberian Dollar</option><option value="CHF">Swiss Franc</option><option value="EUR">Lithuania Euro</option><option value="EUR">Luxembourg Euro</option><option value="MGA">Malagasy Ariary</option><option value="MWK">Malawian Kwacha</option><option value="MYR">Malaysian Ringgit</option><option value="MVR">Maldivian Rufiyaa</option><option value="XOF">West African CFA Fra</option><option value="EUR">Malta Euro</option><option value="USD">United States Dollar</option><option value="MRO">Mauritanian Ouguiya</option><option value="MUR">Mauritian Rupee</option><option value="MXN">Mexican Peso</option><option value="MDL">Moldovan Leu</option><option value="EUR">Monaco Euro</option><option value="MNT">Mongolian Tögrög</option><option value="EUR">Montenegro Euro</option><option value="XCD">East Caribbean Dolla</option><option value="MAD">Moroccan Dirham</option><option value="MZN">Mozambican Metical</option><option value="MMK">Burmese Kyat</option><option value="NAD">Namibian Dollar</option><option value="AUD">Australian Dollar</option><option value="NPR">Nepalese Rupee</option><option value="EUR">Netherlands Euro</option><option value="XPF">CFP Franc</option><option value="NZD">New Zealand Dollar</option><option value="NIO">Nicaraguan Córdoba</option><option value="XOF">West African CFA Fra</option><option value="NGN">Nigerian Naira</option><option value="NZD">New Zealand Dollar</option><option value="NOK">Norwegian Krone</option><option value="OMR">Omani Rial</option><option value="PKR">Pakistani Rupee</option><option value="PAB">Panamanian Balboa</option><option value="PGK">Papua New Guinean Ki</option><option value="PYG">Paraguayan Guaraní</option><option value="PEN">Peruvian Nuevo Sol</option><option value="PHP">Philippine Peso</option><option value="PLN">Polish Z?oty</option><option value="EUR">Portugal Euro</option><option value="QAR">Qatari Riyal</option><option value="RON">Romanian Leu</option><option value="RUB">Russian Ruble</option><option value="RWF">Rwandan Franc</option><option value="XCD">East Caribbean Dolla</option><option value="WST">Samoan</option><option value="EUR">San Marino Euro</option><option value="SAR">Saudi Riyal</option><option value="XOF">West African CFA Fra</option><option value="RSD">Serbian Dinar</option><option value="SCR">Seychellois Rupee</option><option value="SLL">Sierra Leonean Leone</option><option value="BND">Brunei Dollar</option><option value="EUR">Slovakia Euro</option><option value="EUR">Slovenia Euro</option><option value="SBD">Solomon Islands Doll</option><option value="SOS">Somali Shilling</option><option value="ZAR">South African Rand</option><option value="EUR">Spain Euro</option><option value="LKR">Sri Lankan Rupee</option><option value="SDG">Sudanese Pound</option><option value="SRD">Surinamese Dollar</option><option value="SZL">Swazi Lilangeni</option><option value="SEK">Swedish Krona</option><option value="CHF">Swiss Franc</option><option value="TWD">New Taiwan Dollar</option><option value="TJS">Tajikistani Somoni</option><option value="THB">Thai Baht</option><option value="XOF">West African CFA Fra</option><option value="TOP">Tongan Pa?anga</option><option value="TTD">Trinidad And Tobago </option><option value="TND">Tunisian Dinar</option><option value="TRY">Turkish Lira</option><option value="TMT">Turkmenistan Manat</option><option value="AUD">Australian Dollar</option><option value="UGX">Ugandan Shilling</option><option value="UAH">Ukrainian Hryvnia</option><option value="AED">United Arab Emirates</option><option value="GBP">British Pound</option><option value="USD">United States Dollar</option><option value="UYU">Uruguayan Peso</option><option value="UZS">Uzbekistani Som</option><option value="VUV">Vanuatu Vatu</option><option value="VND">Vietnamese ??ng</option><option value="XPF">CFP Franc</option><option value="YER">Yemeni Rial</option><option value="ZMW">Zambian Kwacha</option><option value="BWP">Botswana Pula</option>
                        </select>
                        <div className="select__arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <div className="form-group mb-0">
                        <label htmlFor="currency">Select driver category</label>
                      </div>
                      <div className="select selectbox">
                        <select className="form-control" id="driver_category" name="driver_category">
                          <option value>Select driver category</option>
                          <option value="Personal Drive">Personal Driver</option>
                          <option value="Public Commuter Driver">Public Commuter Driver (e.g. Bus, Ambulance)</option>
                          <option value="Ride sharing driver">Ride sharing driver</option>
                          <option value="School Bus">School bus driver</option>
                          <option value="Truck Driver">Truck driver</option>
                          <option value="Fortklift driver">Fortklift driver</option>
                          <option value="On-demand driver">On-demand driver</option>
                        </select>
                        <div className="select__arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <div className="form-group mb-0">
                        <label htmlFor="location">Location</label>
                      </div>
                      <input type="text" className="form-control normal-text mirrorthis" name="location" id="location" placeholder="Enter Preferred Location" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <div className="form-group mb-0">
                        <label htmlFor="min"><strong>Years of Experience</strong></label>
                      </div>
                      <div className="row ">
                        <div className="col-lg-6">
                          <input type="text" className="form-control" id="experience" name="experience" placeholder="Years of Experience" maxLength={15} />
                        </div>
                        <div className=" col-lg-6">
                          <input type="text" className="form-control" id="licence" name="licence" placeholder="Years of Licence" maxLength={15} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <div className="form-group mb-0">
                        <label htmlFor="min"><strong>Salary</strong></label>
                      </div>
                      <div className="row ">
                        <div className="col-lg-6">
                          <input type="text" className="form-control" id="min" name="min" placeholder="Minimum" maxLength={15} />
                          <input type="hidden" name="minval" />
                        </div>
                        <div className=" col-lg-6">
                          <input type="text" className="form-control" id="max" name="max" placeholder="Maximum" maxLength={15} />
                          <input type="hidden" name="maxval" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-success">You may consider editing your filters or watering down your filters for fast search.</div>
                </div>
                {/* Modal footer */}
                <div className="modal-footer text-center ">
                  <button type="submit" className="btn btn-primary btn-form display-4 pr-3 pl-3">Apply</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}
DriverPop.propTypes = {

}
export default DriverPop;