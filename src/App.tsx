import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesHome from "./Services/RoutesHome";
import { useLocation } from "react-router-dom";

const App = () => {
  // const location = useLocation();
  // console.log(location);
  return (
    <Router>
      <Switch>
        <Route path={"/"} render={(route) => <RoutesHome {...route} />} />
      </Switch>
    </Router>
  );
};

export default App;
