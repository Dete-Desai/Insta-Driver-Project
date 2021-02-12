import React,{useState} from 'react'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import ResultFoundComponent from "../ResultFoundComponent"
import ResultNotFoundComponent from "../ResultNotFoundComponent"
import SearchUserData from "../../../components/Inbox/StaticData/SearchUser";
import {updateSearchData} from "../../../redux/actions/search_actions"
import { PostRoute } from "../../../Api";
const { Get } = PostRoute();

function DriverSearchResultComponent({ keyword }) {

  const search_data = useSelector(state => state.search_reducers.search_data)

  let dispatch = useDispatch()

  console.log("keyword === ", keyword);
  const [isResultFound,setIsResultFound] = useState(search_data && search_data.length>0?true:false)

  const setSearchList = async(keyword)=>{
    let search_result_list = await Get(`/search?business=${keyword}`)
    console.log("recieved list result comp --", search_result_list.data.response_data);
    let search_result= search_result_list.data.response_data;
    console.log("recieved list results --", search_result);
    dispatch(updateSearchData(search_result))
    
    let isResCheck = search_result.some(i => i.businessName.includes(keyword)) ? true : false; 

    setIsResultFound(isResCheck)
    console.log("------- res found --- ",isResultFound);
  } 

  if(search_data===null){
   setSearchList(keyword)
  }

  // if(search_data!==nulll && search_data.length===0){
  //   setSearchList(keyword)
  //  }
 

  console.log("---result found on result comp",isResultFound);

  return (
    <>
      {isResultFound && <ResultFoundComponent keyword={keyword} />}
      {!isResultFound && <ResultNotFoundComponent keyword={keyword} />}
    </>
  );
}

export default DriverSearchResultComponent
