import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesHome from "./Services/RoutesHome";

import configureStore from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import { gapi } from "gapi-script";
// import ReactGA from "react-ga";
// import { GOOGLE_AUTH_API_KEY } from "./Constants";
// const T_I = "UA-244536101-1";
// ReactGA.initialize(T_I);

const persistantStore = configureStore();
const { store, persistor } = persistantStore;

const App = () => {
  // useEffect(() => {
  //   gapi.load("client:auth2", () => {
  //     gapi.client.init({
  //       clientId: GOOGLE_AUTH_API_KEY,
  //       plugin_name: "freeditor-email",
  //     });
  //   });
  // });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path={"/"} render={(route) => <RoutesHome {...route} />} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
