import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import deleteIcon from "../../../dist/icons/delete.png";
import map from "lodash/map";
import get from "lodash/get";
import set from "lodash/set";
import remove from "lodash/remove";
import compact from "lodash/compact";
import { updateRideHailingPlatforms } from "../../../redux/actions/driver_actions/driver_profile_actions";
import values from "lodash/values";

const Platform = ({
  formStaticDataProp,
  userInfo,
  handleChange,
  session_token,
}) => {
  const [otherPlatforms, setOtherPlatforms] = useState([
    { isChecked: false, platformName: "" },
  ]);
  const [otherCount, setOtherCount] = useState(0);

  function handleOtherPlatformChange(e, i) {
    console.log("index  ------", i);
    console.log("text  ------", e.target.value);
    console.log("name  ------", e.target.name);
    let otherArray = [...otherPlatforms];

    if (e.target.name.includes("isChecked")) {
      let { isChecked } = otherArray[i];
      set(otherArray[i], e.target.name, !isChecked);
      setOtherPlatforms(otherArray);
      return;
    }

    set(otherArray[i], e.target.name, e.target.value);
    // console.log("updated array =", otherArray);
    setOtherPlatforms(otherArray);

    // let otherArray = [...otherPlatforms];
    // otherArray[i]=e.target.value
    // console.log("updated array =",otherArray);
    // setOtherPlatforms(otherArray)
  }

  function addMorePlatforms() {
    console.log("add more platforms");
    let otherArray = [...otherPlatforms];
    otherArray.push({ isChecked: false, platformName: "" });
    setOtherPlatforms(otherArray);
  }
  useEffect(() => {}, []);

  const dispatch = useDispatch();

  // console.log("formStaticDataProp ---- platform", formStaticDataProp);
  function handlePlatformSubmit(e) {
    e.preventDefault();

    let selectedOthers = compact(
      map(otherPlatforms, (platform) =>
        platform.isChecked === true ? platform.platformName : ""
      )
    );
    console.log("sel others ======= ", selectedOthers);

    //special check for selected checkbox
    if (get(userInfo, "rideHailingPlatforms").length === 0) {
      alert("select some categories");
      return;
    }

    //data object created for request with the help of lodash's get
    // uniq = [...new Set(array)];

    let data = {
      rideHailingPlatforms: [
        ...new Set(
          compact(get(userInfo, "rideHailingPlatforms").concat(selectedOthers))
        ),
      ],
    };

    //dispatching api action
    dispatch(updateRideHailingPlatforms(session_token, data));
    alert("driver platforms submitted");

    console.log("submit category driver");
  }

  let rideHailingChecked = get(userInfo, "driverCategories")
    ? get(userInfo, "driverCategories").includes("RIDE SHARING DRIVER")
    : false;

  return (
    rideHailingChecked && (
      <div className="driver__platform section__style px-5 pb-3 pt-5 bg-white mt-3">
        <h5 className="form__heading">Platforms Am On In Ride-hailing</h5>
        <p style={{ color: "#969393" }}>
          For ride-hailing category, tick the platforms you are in.
        </p>
        <form className="row mt-5" onSubmit={handlePlatformSubmit}>
          {/* <div className="col-md-4 driverCheckbox">
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check8"
              id="Check8"
            />
            <label className="form-check-label ml-2" for="Check8">
              {" "}
              &nbsp; Uber
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check9"
              id="Check9"
            />
            <label className="form-check-label ml-2" for="Check9">
              {" "}
              &nbsp; Lyft
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check10"
              id="Check10"
            />
            <label className="form-check-label ml-2" for="Check10">
              &nbsp; Gojek
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check11"
              id="Check11"
            />
            <label className="form-check-label ml-2" for="Check11">
              &nbsp; Gett
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check12"
              id="Check12"
            />
            <label className="form-check-label ml-2" for="Check12">
              &nbsp; Careem
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check13"
              id="Check13"
            />
            <label className="form-check-label ml-2" for="Check13">
              &nbsp; Zimiride
            </label>
          </div>
        </div> */}
          {/* <div className="col-md-4 driverCheckbox">
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check14"
              id="Check14"
            />
            <label className="form-check-label ml-2" for="Check14">
              {" "}
              &nbsp; Bolt
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check15"
              id="Check15"
            />
            <label className="form-check-label ml-2" for="Check15">
              {" "}
              &nbsp; Swvl
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check16"
              id="Check16"
            />
            <label className="form-check-label ml-2" for="Check16">
              &nbsp; Via
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check17"
              id="Check17"
            />
            <label className="form-check-label ml-2" for="Check17">
              &nbsp; Curb
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check18"
              id="Check18"
            />
            <label className="form-check-label ml-2" for="Check18">
              &nbsp; Ola
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check19"
              id="Check19"
            />
            <label className="form-check-label ml-2" for="Check19">
              &nbsp; Nopia
            </label>
          </div>
        </div> */}
          {/* <div className="col-md-4 driverCheckbox">
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check20"
              id="Check20"
            />
            <label className="form-check-label ml-2" for="Check20">
              {" "}
              &nbsp; Little Cab
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check21"
              id="Check21"
            />
            <label className="form-check-label ml-2" for="Check21">
              &nbsp; Didi
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check22"
              id="Check22"
            />
            <label className="form-check-label ml-2" for="Check22">
              &nbsp; Grab
            </label>
          </div>
          <div className="form-check pb-3 pl-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="check23"
              id="Check23"
            />
            <label className="form-check-label ml-2" for="Check23">
              &nbsp; Yandex Taxi
            </label>
          </div>
        </div> */}

          {formStaticDataProp.rideHailingPlatforms &&
            map(values(formStaticDataProp.rideHailingPlatforms), (val, i) => (
              <div className="col-md-4 driverCheckbox">
                <div className="form-check pb-3 pl-0" key={i}>
                  {console.log("key--", i)}
                  <input
                    type="checkbox"
                    value={`${val}`}
                    className="form-check-input"
                    onChange={handleChange}
                    name={`rideHailingPlatforms[${i}]`}
                    id={`PlatformCheck${i}`}
                    checked={
                      userInfo
                        ? get(userInfo, "rideHailingPlatforms").includes(
                            `${val}`
                          )
                        : false
                    }
                  />
                  <label
                    className="form-check-label ml-2"
                    for={`PlatformCheck${i}`}
                  >
                    &nbsp; {val}
                  </label>
                </div>
              </div>
            ))}

          {get(userInfo, "rideHailingPlatforms") &&
            map(
              get(userInfo, "rideHailingPlatforms").filter(
                (platform) =>
                  !values(formStaticDataProp.rideHailingPlatforms).includes(
                    platform
                  )
              ),
              (val, i) => (
                // {i=formStaticDataProp.rideHailingPlatforms.length}
                <div className="col-md-4 driverCheckbox">
                  <div
                    className="form-check pb-3 pl-0"
                    key={
                      i + values(formStaticDataProp.rideHailingPlatforms).length
                    }
                  >
                    {console.log("key--", i)}
                    <input
                      type="checkbox"
                      value={`${val}`}
                      className="form-check-input"
                      onChange={handleChange}
                      name={`rideHailingPlatforms[${
                        i +
                        values(formStaticDataProp.rideHailingPlatforms).length
                      }]`}
                      id={`PlatformCheck${
                        i +
                        values(formStaticDataProp.rideHailingPlatforms).length
                      }`}
                      checked={get(userInfo, "rideHailingPlatforms").includes(
                        `${val}`
                      )}
                    />
                    <label
                      className="form-check-label ml-2"
                      for={`PlatformCheck${
                        i +
                        values(formStaticDataProp.rideHailingPlatforms).length
                      }`}
                    >
                      &nbsp; {val}
                    </label>
                  </div>
                </div>
              )
            )}

          <div className="col-md-12 mt-4 driverCheckbox">
            <div className="row">
              {map(otherPlatforms, (platform, i) => {
                console.log("pf---", platform);
                return (
                  <div className="col-md-6 my-1 col-lg-4 pl-0">
                    <div
                      style={{ marginLeft: "-10px" }}
                      className="form-check pb-3 pl-0 d-flex"
                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name={`isChecked`}
                        id={`isChecked${i}`}
                        value={get(otherPlatforms[i], "isChecked") || false}
                        onChange={(e) => handleOtherPlatformChange(e, i)}
                        checked={get(otherPlatforms[i], "isChecked")}
                      />
                      <label
                        style={{ width: "350px" }}
                        className="form-check-label ml-2"
                        for={`isChecked${i}`}
                      >
                        {" "}
                        &nbsp;{" "}
                        <input
                          placeholder="Type name of the platform"
                          type="text"
                          className="checkInput"
                          onChange={(e) => handleOtherPlatformChange(e, i)}
                          name={`platformName`}
                          id={`platformName${i}`}
                          value={get(otherPlatforms[i], "platformName") || ""}
                        />
                      </label>
                      <button
                        className="btn p-0"
                        onClick={(e) => {
                          e.preventDefault();
                          let updateOthers = remove(
                            otherPlatforms,
                            (platform) => {
                              return platform !== otherPlatforms[i];
                            }
                          );
                          setOtherPlatforms(updateOthers);
                        }}
                      >
                        <img
                          style={{ width: "25px" }}
                          src={deleteIcon}
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
              {/* <div className="col-md-6 my-1 col-lg-4 pl-0">
              <div
                style={{ marginLeft: "-10px" }}
                className="form-check pb-3 pl-0 d-flex"
              >
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="addCheck1"
                  id="addCheck1"
                />
                <label
                  style={{ width: "350px" }}
                  className="form-check-label ml-2"
                  for="addCheck1"
                >
                  {" "}
                  &nbsp;{" "}
                  <input
                    placeholder="Type name of the platform"
                    type="text"
                    className="checkInput"
                    name="checkBox1"
                    id="checkBox1"
                  />
                </label>
                <button className="btn p-0">
                  <img style={{ width: "25px" }} src={deleteIcon} alt="" />
                </button>
              </div>
            </div> */}
              {/* <div className="col-md-6 my-1 col-lg-4 pl-0">
              <div
                style={{ marginLeft: "-10px" }}
                className="form-check pb-3 pl-0 d-flex"
              >
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="addCheck2"
                  id="addCheck2"
                />
                <label
                  style={{ width: "350px" }}
                  className="form-check-label ml-2"
                  for="addCheck2"
                >
                  {" "}
                  &nbsp;{" "}
                  <input
                    placeholder="Type name of the platform"
                    type="text"
                    className="checkInput"
                    name="checkBox1"
                    id="checkBox1"
                  />
                </label>
                <button className="btn p-0">
                  <img style={{ width: "25px" }} src={deleteIcon} alt="" />
                </button>
              </div>
            </div> */}
              {/* <div className="col-md-6 my-1 col-lg-4 pl-0 driverCheckbox">
              <div
                style={{ marginLeft: "-10px" }}
                className="form-check pb-3 pl-0 d-flex"
              >
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="addCheck3"
                  id="addCheck3"
                />
                <label
                  style={{ width: "350px" }}
                  className="form-check-label ml-2"
                  for="addCheck3"
                >
                  {" "}
                  &nbsp;{" "}
                  <input
                    placeholder="Type name of the platform"
                    type="text"
                    className="checkInput"
                    name="checkBox1"
                    id="checkBox1"
                  />
                </label>
                <button className="btn p-0">
                  <img style={{ width: "25px" }} src={deleteIcon} alt="" />
                </button>
              </div>
            </div> */}
              <div className="col-md-12 ">
                <a
                  className="p-0 text-success font-weight-bold ml-4 mt-2 mb-4"
                  onClick={addMorePlatforms}
                >
                  +Add More platforms
                </a>
              </div>
            </div>
          </div>
          <button type="submit" className="btn submitBtn ml-auto">
            Save
          </button>
        </form>
      </div>
    )
  );
};

export default Platform;
