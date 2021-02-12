
import * as driver_search_types from '../../types/driver_search_types';

const initialState = {
  search_location:"",
  driver_search_results:null,
  loading:false,
  error:"",
  current_page:1,
  total_count:-1
};

export const driver_search_reducers = (state = initialState, action) => {
  switch (action.type) {

      case driver_search_types.DRIVER_SEARCH_REQUEST:
          return{
              ...state,
              loading:true,
          }
      case driver_search_types.DRIVER_SEARCH_FAILURE:
        return{
            ...state,
            loading:false,
            error:action.payload,
        };
    
     case driver_search_types.DRIVER_SEARCH_SUCCESS:
         return{
             ...state,
             loading:false,
             driver_search_results: action.payload.results,
             total_count:action.payload.resultCount
         };

         case driver_search_types.SET_DRIVER_SEARCH_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            };

    default:
      return state;
  }
};
