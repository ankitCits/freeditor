import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteContext from "./RouteContext";
import NoPage from "../Page/NoPage";
import EditPage from "../Page/Editor";
import HomePage from "../Page/HomePage";

const RoutesHome = (props) => {
  return (
    <RouteContext.Provider value={props}>
      <Switch>
        <Route
          exact
          path={["/", "/home"]}
          render={(route) => <HomePage {...route} />}
        />

        <Route
          exact
          path={"/image-editor"}
          render={(route) => <EditPage {...route} />}
        />

        <Route exact path={"*"} render={(route) => <NoPage {...route} />} />
      </Switch>
    </RouteContext.Provider>
  );
};

export default RoutesHome;
