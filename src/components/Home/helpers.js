 export const isBlank=(str)=>{
    return (!str || str===null || str==='' || str==='undefined' || !str.trim());
  }
 export const isEmpty=(str)=>{
    return (!str || 0 === str.length);
  }
 export const isNotNullOrEmpty=(str)=>{
    return (!isEmpty(str) && !isBlank(str));
  }
 
 export const validNumber=(salary)=>{
    if(isNotNullOrEmpty(salary) && isNaN(salary) ){
      return false;
    }else if(!(salary >=0)){
       return false;
    }else{
      return true;
    }
  }
  
 