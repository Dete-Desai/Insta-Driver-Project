import { combineReducers } from "redux";
import { user_reducers } from "./user_reducers";
import { employer_reducers } from "./employer_reducers";
import { driver_reducers } from "./driver_reducers";
import { search_reducers } from "./search_reducers";
import { driver_search_reducers } from "./driver_search_reducers";
import { inbox_reducers } from "./inbox_reducers";
import streams from "./livestream_reducers";
import map_reducers from "./map_reducers";
import { persistReducer } from "redux-persist";
import { job_application_reducers } from "./job_reducers";
import { article_reducer } from "./article_reducers";
import { posts_reducer } from "./post_reducers";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//congfig for root reducers
const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: [
    "user_reducers",
    "search_reducers",
    "driver_search_reducers",
    "article_reducer",
    "posts_reducer",
  ],
};

//congfig for nested reducers
const userPersistConfig = {
  key: "user_reducers",
  storage,
  whitelist: ["user_credentials"],
};

const combinedReducer = combineReducers({
  user_reducers: persistReducer(userPersistConfig, user_reducers),
  driver_reducers,
  driver_search_reducers,
  employer_reducers,
  search_reducers,
  streams,
  map_reducers,
  inbox_reducers,
  job_application_reducers,
  article_reducer,
  posts_reducer,
});
export const rootReducer = persistReducer(rootPersistConfig, combinedReducer);

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// blacklist: ['tracking']
//   }

// const trackingConfig = {
// key: 'tracking',
// storage: AsyncStorage,
// blacklist: ['checkingOut', 'checkingIn', 'searching']
// };

// const rootReducer = combineReducers({
//   tracking: persistReducer(trackingConfig, trackingReducer),
// })

// export default persistReducer(persistConfig, rootReducer)
