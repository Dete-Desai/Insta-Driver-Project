import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import set from "lodash/set";
import compact from "lodash/compact";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import { updateQualification } from "../../../redux/actions/driver_actions/driver_profile_actions";
import { PostRoute } from "../../../Api/index";
const { Post, Get } = PostRoute();

const DriverQualifications = ({
  userInfo,
  handleChange,
  formStaticDataProp,
  session_token,
}) => {
  const [skillCount, setSkillCount] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(get(userInfo, "qualification.anyUniqueSkills"))) {
      set(userInfo, "qualification.anyUniqueSkills[0]", "");
      setSkillCount(0);
    } else {
      let count = get(userInfo, "qualification.anyUniqueSkills").length;
      setSkillCount(count);
    }
  }, [userInfo, skillCount]);

  async function handleQualificaationSubmit(e) {
    e.preventDefault();

    //data object created for request with the help of lodash's get
    let data = {
      levelofEducation: get(userInfo, "qualification.levelofEducation"),
      drivingExperience: get(userInfo, "qualification.drivingExperience"),
      licensePeriod: get(userInfo, "qualification.licensePeriod"),
      anyUniqueSkills: compact(get(userInfo, "qualification.anyUniqueSkills")),
    };

    //dispatching api action
    dispatch(updateQualification(session_token, data));
    alert("Qualifications info submitted");
  }

  function renderSkills() {
    let renderList = map(
      get(userInfo, "qualification.anyUniqueSkills"),
      (skill, i) => (
        <div key={i} className="form-group row align-items-center">
          <label
            className="col-sm-4 col-md-3  text-center label__style"
            htmlFor="skill1"
          >
            Skill {i + 1}
          </label>
          <div className="col-sm-8 col-md-9">
            <input
              type="text"
              className="form-control inputIcon-none"
              name={`qualification.anyUniqueSkills[${i}]`}
              id="skill1"
              value={get(userInfo, `qualification.anyUniqueSkills[${i}]`) || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      )
    );
    return renderList;
  }

  function addNewSkill() {
    setSkillCount(skillCount + 1);
    set(userInfo, `qualification.anyUniqueSkills[${skillCount}]`, "");
  }

  return (
    <div className="driver__qualifications section__style px-5 pb-3 pt-5 bg-white mt-3">
      <h5 className="form__heading mb-5">Qualification</h5>
      <form className="row mt-2" onSubmit={handleQualificaationSubmit}>
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label
              className="col-sm-5 text-left label__style"
              htmlFor="education"
            >
              Level Of Education
            </label>
            <div className="col-sm-7">
              <select
                className="form-control inputIcon-none"
                id="education_level"
                name="qualification.levelofEducation"
                value={get(userInfo, "qualification.levelofEducation") || ""}
                onChange={handleChange}
                required
              >
                {/* <option value>Select</option>
                <option value="unspecified">Unspecified</option>
                <option value="primary">Primary Education</option>
                <option value="secondary">Secondary Education</option>
                <option value="higher">Higher Education</option> */}

                {!get(userInfo, "qualification.levelofEducation") && (
                  <option key={"Select"} value={""}>
                    {"Select"}
                  </option>
                )}
                {map(
                  get(formStaticDataProp, "education"),
                  (educationValue, key) => (
                    <option key={key} value={educationValue}>
                      {educationValue}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
          <div className="form-group row align-items-center">
            <label
              className="col-sm-5 text-left label__style"
              htmlFor="licence"
            >
              Driving Licence Period (Years)
            </label>
            <div className="col-sm-7">
              <input
                type="number"
                className="form-control inputIcon-none"
                name="qualification.licensePeriod"
                id="licence"
                onChange={handleChange}
                value={get(userInfo, "qualification.licensePeriod") || ""}
                required
                min="0"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row align-items-center">
            <label
              className="col-sm-5 text-left label__style"
              htmlFor="experience"
            >
              Driving Experience (Years)
            </label>
            <div className="col-sm-7">
              <input
                type="number"
                className="form-control inputIcon-none"
                name="qualification.drivingExperience"
                id="experience"
                onChange={handleChange}
                value={get(userInfo, "qualification.drivingExperience") || ""}
                required
                min="0"
              />
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-5">
          <div className="row">
            <div className="col-md-12">
              <h6 style={{ width: "180px" }} className="subTitle p-2">
                Any Unique Skills
              </h6>
            </div>
          </div>
          <p style={{ color: "#969393" }}>
            What other skills you have other than driving. e.g. Electrician,
            Motorcyclist, Graphic designer, Social media marketer et cetera
          </p>
        </div>
        <div className="col-md-12 ">
          <div className="w-50 m-auto">
            {renderSkills()}

            <a
              className="text-success font-weight-bold text-right"
              onClick={addNewSkill}
            >
              +Add More Skills
            </a>
          </div>
        </div>

        <div className="col-md-12 text-right">
          <button type="submit" className="btn submitBtn ml-auto">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default DriverQualifications;
