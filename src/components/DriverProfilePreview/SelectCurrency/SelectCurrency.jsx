import React from 'react';

const SelectCurrency = () => {
  return (
    <div className="select__currency section__style pr-2 pb-3 pt-5 bg-white mt-3">
      <div className="col-md-10 m-auto px-5">
        <h5 className="form__heading">Select Currency To Display For Your Profile</h5>
        <div className="col-md-12 px-4 py-2 currencyInfo my-4">
          <p style={{ color: "#969393" }}>This is default currency. You can change it. When you fill the salary range, the currency you select will be the one used. You are advised to select the currency used in your country. When employers filter salary range, they use the currency they are familiar with. i.e. The currency of their country.</p>
        </div>
      </div>
      <form className="col-md-12 mt-4">
        <div className="row">
          <div className="col-md-10 m-md-auto w-50 px-5">
            <select className="form-control inputIcon-none col-md-6" id="currency">
              <option> &nbsp; &nbsp; $ - USD - US Dollar (Default)</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="text-right col-md-12 mr-2 mb-2">
            <button type="submit" className="btn submitBtn">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectCurrency;