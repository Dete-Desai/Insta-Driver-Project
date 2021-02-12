import React from "react";
import DriverSearchResultComponent from "../../../components/DriverSearch/DriverSearchResultComponent"
import {useDispatch} from 'react-redux'
import { updateSearchData } from "../../../redux/actions/search_actions";
import {useSelector} from "react-redux"
import { PostRoute } from "../../../Api";
const { Get } = PostRoute();

const DriverSearchResultPage = ({ keyword }) => {

    let dispatch=useDispatch()
    // const search_data = useSelector(state => state.search_reducers.search_data)

  // const setSearchList = async(keyword)=>{
  //   let search_result_list = await Get(`/search?business=${keyword}`)
  //   console.log("recieved list", search_result_list.data.response_data);
  //   let search_result= search_result_list.data.response_data;
  //   dispatch(updateSearchData(search_result))
  // } 

  // if(search_page_keyword===null){
  //  setSearchList(keyword)
  // }

  // if(search_page_keyword===""){
  //   console.log("no search keyword updated in store");
  //   setSearchList(keyword)
  // }

    return (
        <>
            <DriverSearchResultComponent keyword={keyword} />
        </>
    );
};
export default DriverSearchResultPage;
