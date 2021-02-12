import React from 'react'

const SalaryInput = ({ handleChange,jobDetails }) => {
    return (
        <div>
            <p className="normal-text" style={{ fontWeight: 500 }}>Enter Salary Range for the Job</p>
            <p className="normal-text">This is the default currency. You can change it.</p>
            <div className="form-row mt-3" style={{ maxWidth: 462, marginLeft: '-15px' }}>
                <div className="select mb-0">
                    <div className="input-container">
                        <select className="form-control" id="salary_range_currency" 
                        name="currency" 
                        value={jobDetails.currency || ""}
                        required
                        onChange={handleChange} style={{ marginLeft: 15, maxWidth: 430, height: 40, backgroundColor: '#F5F5F5', borderRadius: 4 }} onchange="myFunction7()">
                            <option value="" name="currency">Select Currency</option>
                            <option value="AFN" name="currency">AFN - Afghan afghani</option>
                            <option value="ALL" name="currency">ALL - Albanian lek</option>
                            <option value="DZD" name="currency">DZD - Algerian dinar</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="AOA" name="currency">AOA - Angolan kwanza</option>
                            <option value="XCD" name="currency">XCD - East Caribbean dolla</option>
                            <option value="XCD" name="currency">XCD - East Caribbean dolla</option>
                            <option value="ARS" name="currency">ARS - Argentine peso</option>
                            <option value="AMD" name="currency">AMD - Armenian dram</option>
                            <option value="AWG" name="currency">AWG - Aruban florin</option>
                            <option value="AUD" name="currency">AUD - Australian dollar</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="AZN" name="currency">AZN - Azerbaijani manat</option>
                            <option value="BHD" name="currency">BHD - Bahraini dinar</option>
                            <option value="BDT" name="currency">BDT - Bangladeshi taka</option>
                            <option value="BBD" name="currency">BBD - Barbadian dollar</option>
                            <option value="BYR" name="currency">BYR - Belarusian ruble</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="BZD" name="currency">BZD - Belize dollar</option>
                            <option value="XOF" name="currency">XOF - West African CFA fra</option>
                            <option value="BMD" name="currency">BMD - Bermudian dollar</option>
                            <option value="BTN" name="currency">BTN - Bhutanese ngultrum</option>
                            <option value="BWP" name="currency">BWP - Botswana pula</option>
                            <option value="BRL" name="currency">BRL - Brazilian real</option>
                            <option value="BGN" name="currency">BGN - Bulgarian lev</option>
                            <option value="XOF" name="currency">XOF - West African CFA fra</option>
                            <option value="BIF" name="currency">BIF - Burundian franc</option>
                            <option value="KHR" name="currency">KHR - Cambodian riel</option>
                            <option value="XAF" name="currency">XAF - Central African CFA </option>
                            <option value="CAD" name="currency">CAD - Canadian dollar</option>
                            <option value="CVE" name="currency">CVE - Cape Verdean escudo</option>
                            <option value="KYD" name="currency">KYD - Cayman Islands dolla</option>
                            <option value="XAF" name="currency">XAF - Central African CFA </option>
                            <option value="CLP" name="currency">CLP - Chilean peso</option>
                            <option value="CNY" name="currency">CNY - Chinese yuan</option>
                            <option value="COP" name="currency">COP - Colombian peso</option>
                            <option value="KMF" name="currency">KMF - Comorian franc</option>
                            <option value="NZD" name="currency">NZD - New Zealand dollar</option>
                            <option value="CRC" name="currency">CRC - Costa Rican colón</option>
                            <option value="XOF" name="currency">XOF - West African CFA fra</option>
                            <option value="HRK" name="currency">HRK - Croatian kuna</option>
                            <option value="CUC" name="currency">CUC - Cuban convertible pe</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="CZK" name="currency">CZK - Czech koruna</option>
                            <option value="DKK" name="currency">DKK - Danish krone</option>
                            <option value="DJF" name="currency">DJF - Djiboutian franc</option>
                            <option value="XCD" name="currency">XCD - East Caribbean dolla</option>
                            <option value="DOP" name="currency">DOP - Dominican peso</option>
                            <option value="USD" name="currency">USD - United States dollar</option>
                            <option value="EGP" name="currency">EGP - Egyptian pound</option>
                            <option value="USD" name="currency">USD - United States dollar</option>
                            <option value="XAF" name="currency">XAF - Central African CFA </option>
                            <option value="ERN" name="currency">ERN - Eritrean nakfa</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="ETB" name="currency">ETB - Ethiopian birr</option>
                            <option value="DKK" name="currency">DKK - Danish krone</option>
                            <option value="FJD" name="currency">FJD - Fijian dollar</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="XPF" name="currency">XPF - CFP franc</option>
                            <option value="XAF" name="currency">XAF - Central African CFA </option>
                            <option value="GEL" name="currency">GEL - Georgian lari</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="GHS" name="currency">GHS - Ghana cedi</option>
                            <option value="GIP" name="currency">GIP - Gibraltar pound</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="XCD" name="currency">XCD - East Caribbean dolla</option>
                            <option value="GTQ" name="currency">GTQ - Guatemalan quetzal</option>
                            <option value="GBP" name="currency">GBP - British pound</option>
                            <option value="GNF" name="currency">GNF - Guinean franc</option>
                            <option value="XOF" name="currency">XOF - West African CFA fra</option>
                            <option value="GYD" name="currency">GYD - Guyanese dollar</option>
                            <option value="HTG" name="currency">HTG - Haitian gourde</option>
                            <option value="HNL" name="currency">HNL - Honduran lempira</option>
                            <option value="HKD" name="currency">HKD - Hong Kong dollar</option>
                            <option value="HUF" name="currency">HUF - Hungarian forint</option>
                            <option value="ISK" name="currency">ISK - Icelandic króna</option>
                            <option value="INR" name="currency">INR - Indian rupee</option>
                            <option value="IDR" name="currency">IDR - Indonesian rupiah</option>
                            <option value="IQD" name="currency">IQD - Iraqi dinar</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="GBP" name="currency">GBP - British pound</option>
                            <option value="ILS" name="currency">ILS - Israeli new shekel</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="JMD" name="currency">JMD - Jamaican dollar</option>
                            <option value="JPY" name="currency">JPY - Japanese yen</option>
                            <option value="GBP" name="currency">GBP - British pound</option>
                            <option value="JOD" name="currency">JOD - Jordanian dinar</option>
                            <option value="KZT" name="currency">KZT - Kazakhstani tenge</option>
                            <option value="KES" name="currency">KES - Kenyan shilling</option>
                            <option value="AUD" name="currency">AUD - Australian dollar</option>
                            <option value="KWD" name="currency">KWD - Kuwaiti dinar</option>
                            <option value="KGS" name="currency">KGS - Kyrgyzstani som</option>
                            <option value="LAK" name="currency">LAK - Lao kip</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="LBP" name="currency">LBP - Lebanese pound</option>
                            <option value="LSL" name="currency">LSL - Lesotho loti</option>
                            <option value="LRD" name="currency">LRD - Liberian dollar</option>
                            <option value="CHF" name="currency">CHF - Swiss franc</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="MGA" name="currency">MGA - Malagasy ariary</option>
                            <option value="MWK" name="currency">MWK - Malawian kwacha</option>
                            <option value="MYR" name="currency">MYR - Malaysian ringgit</option>
                            <option value="MVR" name="currency">MVR - Maldivian rufiyaa</option>
                            <option value="XOF" name="currency">XOF - West African CFA fra</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="USD" name="currency">USD - United States dollar</option>
                            <option value="MRO" name="currency">MRO - Mauritanian ouguiya</option>
                            <option value="MUR" name="currency">MUR - Mauritian rupee</option>
                            <option value="MXN" name="currency">MXN - Mexican peso</option>
                            <option value="MDL" name="currency">MDL - Moldovan leu</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="MNT" name="currency">MNT - Mongolian tögrög</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="XCD" name="currency">XCD - East Caribbean dolla</option>
                            <option value="MAD" name="currency">MAD - Moroccan dirham</option>
                            <option value="MZN" name="currency">MZN - Mozambican metical</option>
                            <option value="MMK" name="currency">MMK - Burmese kyat</option>
                            <option value="NAD" name="currency">NAD - Namibian dollar</option>
                            <option value="AUD" name="currency">AUD - Australian dollar</option>
                            <option value="NPR" name="currency">NPR - Nepalese rupee</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="XPF" name="currency">XPF - CFP franc</option>
                            <option value="NZD" name="currency">NZD - New Zealand dollar</option>
                            <option value="NIO" name="currency">NIO - Nicaraguan córdoba</option>
                            <option value="XOF" name="currency">XOF - West African CFA fra</option>
                            <option value="NGN" name="currency">NGN - Nigerian naira</option>
                            <option value="NZD" name="currency">NZD - New Zealand dollar</option>
                            <option value="NOK" name="currency">NOK - Norwegian krone</option>
                            <option value="OMR" name="currency">OMR - Omani rial</option>
                            <option value="PKR" name="currency">PKR - Pakistani rupee</option>
                            <option value="PAB" name="currency">PAB - Panamanian balboa</option>
                            <option value="PGK" name="currency">PGK - Papua New Guinean ki</option>
                            <option value="PYG" name="currency">PYG - Paraguayan guaraní</option>
                            <option value="PEN" name="currency">PEN - Peruvian nuevo sol</option>
                            <option value="PHP" name="currency">PHP - Philippine peso</option>
                            <option value="PLN" name="currency">PLN - Polish z?oty</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="QAR" name="currency">QAR - Qatari riyal</option>
                            <option value="RON" name="currency">RON - Romanian leu</option>
                            <option value="RUB" name="currency">RUB - Russian ruble</option>
                            <option value="RWF" name="currency">RWF - Rwandan franc</option>
                            <option value="XCD" name="currency">XCD - East Caribbean dolla</option>
                            <option value="WST" name="currency">WST - Samoan</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="SAR" name="currency">SAR - Saudi riyal</option>
                            <option value="XOF" name="currency">XOF - West African CFA fra</option>
                            <option value="RSD" name="currency">RSD - Serbian dinar</option>
                            <option value="SCR" name="currency">SCR - Seychellois rupee</option>
                            <option value="SLL" name="currency">SLL - Sierra Leonean leone</option>
                            <option value="BND" name="currency">BND - Brunei dollar</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="SBD" name="currency">SBD - Solomon Islands doll</option>
                            <option value="SOS" name="currency">SOS - Somali shilling</option>
                            <option value="ZAR" name="currency">ZAR - South African rand</option>
                            <option value="EUR" name="currency">EUR - Euro</option>
                            <option value="LKR" name="currency">LKR - Sri Lankan rupee</option>
                            <option value="SDG" name="currency">SDG - Sudanese pound</option>
                            <option value="SRD" name="currency">SRD - Surinamese dollar</option>
                            <option value="SZL" name="currency">SZL - Swazi lilangeni</option>
                            <option value="SEK" name="currency">SEK - Swedish krona</option>
                            <option value="CHF" name="currency">CHF - Swiss franc</option>
                            <option value="TWD" name="currency">TWD - New Taiwan dollar</option>
                            <option value="TJS" name="currency">TJS - Tajikistani somoni</option>
                            <option value="THB" name="currency">THB - Thai baht</option>
                            <option value="XOF" name="currency">XOF - West African CFA fra</option>
                            <option value="TOP" name="currency">TOP - Tongan pa?anga</option>
                            <option value="TTD" name="currency">TTD - Trinidad and Tobago </option>
                            <option value="TND" name="currency">TND - Tunisian dinar</option>
                            <option value="TRY" name="currency">TRY - Turkish lira</option>
                            <option value="TMT" name="currency">TMT - Turkmenistan manat</option>
                            <option value="AUD" name="currency">AUD - Australian dollar</option>
                            <option value="UGX" name="currency">UGX - Ugandan shilling</option>
                            <option value="UAH" name="currency">UAH - Ukrainian hryvnia</option>
                            <option value="AED" name="currency">AED - United Arab Emirates</option>
                            <option value="GBP" name="currency">GBP - British pound</option>
                            <option value="USD" name="currency">USD - United States dollar</option>
                            <option value="UYU" name="currency">UYU - Uruguayan peso</option>
                            <option value="UZS" name="currency">UZS - Uzbekistani som</option>
                            <option value="VUV" name="currency">VUV - Vanuatu vatu</option>
                            <option value="VND" name="currency">VND - Vietnamese ??ng</option>
                            <option value="XPF" name="currency">XPF - CFP franc</option>
                            <option value="YER" name="currency">YER - Yemeni rial</option>
                            <option value="ZMW" name="currency">ZMW - Zambian kwacha</option>
                            <option value="BWP" name="currency">BWP - Botswana pula</option>
                        </select>
                    </div>
                    <div className="select__arrow1" style={{ right: 20 }} />
                </div>
            </div>
        </div>
    )
}

export default SalaryInput
