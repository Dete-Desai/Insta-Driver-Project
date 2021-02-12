import React, { useEffect,useState } from 'react';
import{useDispatch,useSelector} from 'react-redux';
import { employerGetJobPosts } from '../../../../../redux/actions/employer_actions/job_post_actions';
import PostedJobsTable from './PostedJobsTable';
import NoPostedJobs from './NoPostedJobs';
import PropTypes from 'prop-types';
import {setJobPostsPage} from '../../../../../redux/actions/employer_actions/job_post_actions'
import EmployerSideBarFunction from '../../../../Layout/MainSideBar/Employer/EmployerSideBarFunction';

const PAGE_SIZE=process.env.MAX_SEARCH_RESULT_PAGE_SIZE || 10;
const PageLinkItem=(props)=>{
    const [style,setStyle]=useState("page-link");
    const click=()=>{
      setStyle("page-link disabled");
      props.pageChange(props.page);
    }

   
    return(
    <li className={`page-item`} key={props.page} id={props.page}>
      <a
      href='#'
      className={style} 
      onClick={click}>{props.page}</a></li>
    );
  }
  
  PageLinkItem.propTypes={
    page:PropTypes.number.isRequired,
    pageChange:PropTypes.func.isRequired,
  }
//helpers
const resultPageSelector=(state)=>{
  const currentPage=state.employer_reducers.current_job_posts_page;
     const allResults=state.employer_reducers.job_posts;
    
    if(allResults){
      /*if the items are less than or equal to the size of page
      return the entire array*/
     if(allResults.length <=PAGE_SIZE){
       return allResults;
     }
     //set the lower limit index
     const lowerLimit=(currentPage-1)*PAGE_SIZE;
     //upper limit
     const upperLimit=lowerLimit+PAGE_SIZE;
     /**the case where this is the tail-end of the results array
      * have to account for the fact that Array.slice(start,end)
      * does NOT include the element at the last index
      */
     if(allResults.length <=upperLimit){
       return allResults.slice(lowerLimit,allResults.length+1);
     }
     //else
     return allResults.slice(lowerLimit,upperLimit);
    } 
    //else the array is empty if the allResults is empty or undefined or null
    return [];
}

const getPagesCount=(resultCount)=>{
  if(resultCount <=PAGE_SIZE) return 1;
  //else
  return Math.ceil(resultCount/PAGE_SIZE);
}

const PostedJobs=()=>{
  const token=useSelector(state=>state.user_reducers.user_credentials.token);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(employerGetJobPosts(token))
  },[dispatch,token]);


  const [prevEnabled,setPrevEnabled]=useState(true);
  const [nextEnabled,setNextEnabled]=useState(true);
  const totalCount=useSelector(state=>state.employer_reducers.total_job_posts_count);
  const currentPage=useSelector(state=>state.employer_reducers.current_job_posts_page);
 
 
  const jobPosts=useSelector(resultPageSelector);

  useEffect(()=>{
    if(currentPage === getPagesCount(totalCount)){
        setNextEnabled(false);
        setPrevEnabled(true);
    }else if(currentPage ===1 && getPagesCount(totalCount)>1){
       setNextEnabled(true);
       setPrevEnabled(false);
    }else if(getPagesCount(totalCount)===1){
        setNextEnabled(false);
        setNextEnabled(false);
    }
 },[totalCount,currentPage]);

  const generatePageLinks=()=>{
    console.log('inside generatePageLinks');
    console.log(totalCount)
    var pages=totalCount <=PAGE_SIZE?1: getPagesCount(totalCount);
    var pageNumbers=[];
    for(var i=1;i<=pages;i++){
      pageNumbers.push(i);
    }
    console.log('page numbers');
    console.log(pageNumbers);
    
    return pageNumbers.map(number=><PageLinkItem page={number} pageChange={onPageChange}/>)
  }

  const onPageChange=(page)=>{
    dispatch(setJobPostsPage(page));
 }

 

 const onPrev=()=>{
   if(currentPage-1===0){
     dispatch(setJobPostsPage(1));
     setPrevEnabled(false);
   } 
    dispatch(setJobPostsPage(currentPage-1))
 }

 const onNext=()=>{
   if(currentPage+1 > getPagesCount(totalCount)){
    setNextEnabled(false)
    dispatch(setJobPostsPage(getPagesCount(totalCount)))   
   }
   dispatch(setJobPostsPage(currentPage+1));
 }

  return(  
    <div>
    <div id="content">
      <div className="row">
        <EmployerSideBarFunction />
        <div className="col-md-10">
          <main
            role="main"
            className="col-md-11 ml-sm-auto col-lg-11 px-4 padding_left_10 padding_right_40"
          >
            <div className="cus-space" />
            <div className="cus-space" />
            <div className="cus-space" />
            <div className="container">
            <div>
              {(jobPosts && jobPosts.length>0)?<PostedJobsTable jobPosts={jobPosts}/>:
          <NoPostedJobs/>}
          <div className="row d-flex justify-content-center">
          <ul className="pagination mt-4">
            <div>
              <ul className="pagination">
                <li className="page-item">
                  <a className={`page-link btn-link ${prevEnabled?"":"disabled"}`} href='#' 
                   aria-label="Previous"
                  onClick={onPrev}>‹</a>
                </li>
                {generatePageLinks()}
                <li className="page-item">
                  <a className={`page-link btn-link ${nextEnabled?"":"disabled"}`} href="#" 
                  aria-label="Next"
                  onClick={onNext}>›</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PostedJobs;