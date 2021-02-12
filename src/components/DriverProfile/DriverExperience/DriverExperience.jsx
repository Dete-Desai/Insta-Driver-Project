import React, { useState ,useEffect} from 'react';
import moment from 'moment';
import selectIcon from '../../../dist/icons/selectIcon.svg'
import deleteIcon from '../../../dist/icons/delete.png'

// key={i}
// label={val}
// handleChange={handleChange}
// userInfo={userInfo}
// dropdownOption={
const DriverExperience = ({label,handleChange,userInfo,dropdownOption,setUserExperienceBreakdown,userExperienceBreakdown}) => {

  const category = label
  const [inputList, setInputList] = useState([{ category: category, vehicle: [""], workFrom: "", workTo: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    console.log("alterled list,",list);

    let tempExpBreakDown = [...userExperienceBreakdown]
    let selectedBrkCategory = tempExpBreakDown.find(catObj => catObj.category === category)
    
    console.log("categry selected obj",selectedBrkCategory);
    if(selectedBrkCategory){
    selectedBrkCategory.vehicles=list
    }
    else{
      let newBreakdown = [...userExperienceBreakdown]
      newBreakdown.push({category:category,vehicles:list})
      console.log("old exp",userExperienceBreakdown);
      console.log("newBreakdown",newBreakdown);

      setUserExperienceBreakdown(newBreakdown)


      return 
    }
    console.log("categry selected updated",selectedBrkCategory);

    console.log("prior brkdown",userExperienceBreakdown);

    let priorBreakdown = [...userExperienceBreakdown]

    let newBreakdown = priorBreakdown.map(bd => bd.category===category ? {...bd,vehicles:list}:bd)

    console.log("updated brkdown",newBreakdown);

    setUserExperienceBreakdown(newBreakdown)
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);

    let newBreakdown = [...userExperienceBreakdown]
    let updatedBrkDwn = newBreakdown.map(brkdwncat=> brkdwncat.category===category? {...brkdwncat,vehicles:list}: brkdwncat)
    console.log("old exp",userExperienceBreakdown);
    console.log("newBreakdown",updatedBrkDwn);

    setUserExperienceBreakdown(updatedBrkDwn)


  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { category: category, vehicle: [""], workFrom: "", workTo: "" }]);
  };
  let breakdownObj
  useEffect(() => {

      breakdownObj = userInfo.experienceBreakdown.find(BrkObj => BrkObj.category === label)
      if(breakdownObj)
      {
      console.log("--- breakdown obj ---",breakdownObj);
      setInputList(breakdownObj.vehicles)
      console.log("inp list",inputList);
    }
  }, [])
  


  return (
    <div className="row">
      <div className="col-md-2 col-lg-6 col-xl-2 col-sm-6 col-12 col-xs-12">
        <div className="row">
          <div className="col-2">
            <img src={selectIcon} alt="" />
          </div>
          <div className="col-10">
            <span className="">{label}</span>
          </div>
        </div>
      </div>
      <div className="col-md-10">
        {inputList.map((val, i) => {
          return (
            <div key={i} className="row">
              <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-12 col-xs-12 ">
                <select name="vehicle" value={val.vehicle || ""} onChange={e => handleInputChange(e, i)} className="text-capitalize form-control inputIcon-none" required>
                <option  value="">Select</option>
                  {
                    dropdownOption.map((optionValue,index) => <option className="text-capitalize" key={index} value={optionValue}>{optionValue}</option>)
                  }
                </select>
                <div className="btn-box">
                  {inputList.length - 1 === i && <button style={{width:"224px"}} className="text-success font-weight-bold bg-white border-0 mt-2 mx-0" onClick={handleAddClick}>+ Add another vehicle type </button>}
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-12 col-xs-12">
                <div className="form-group row align-items-center">
                  <label className="col-sm-4 label__style mb-0" for="dateFrom">Worked from</label>
                  <div className="col-sm-8">
                    <input className="form-control inputIcon-none" type="date" id="dateFrom" name="workFrom" value={moment(val.workFrom).format("YYYY-MM-DD")}  onChange={e => handleInputChange(e, i)} required />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-xl-4 col-sm-6 col-12 col-xs-12 d-flex">
                <div className="form-group row align-items-center w-75 mb-5">
                  <label className="col-sm-2 label__style mb-0" for="dateFrom">To</label>
                  <div className="col-sm-10">
                    <input className="form-control inputIcon-none" type="date" id="dateTo" name="workTo" value={moment(val.workTo).format("YYYY-MM-DD")} onChange={e => handleInputChange(e, i)} required />
                  </div>
                </div>
                <div className="w-25">
                  {inputList.length !== 1 && <button onClick={() => handleRemoveClick(i)} className="btn"><img style={{ width: "25px" }} src={deleteIcon} alt="" /></button>}
                </div>
              </div>
              {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DriverExperience;