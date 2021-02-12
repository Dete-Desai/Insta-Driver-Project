import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import routes from "./routes";
// import withTracker from "./withTracker";
import { Provider } from "react-redux";
import { store, persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";
import ScrollTop from "./ScrollTop";

axios.defaults.baseURL = "http://65.0.178.48/";

// axios.defaults.baseURL = "http://localhost:3001/";

const App = ({ ...props }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
          <ScrollTop />
          <div>{routes()}</div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

App.propTypes = {};

export default App;
