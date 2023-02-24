import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteContext from "./RouteContext";
import NoPage from "../Page/NoPage";
import EditPage from "../Page/Editor";
import HomePage from "../Page/HomePage";
import AboutUs from "../Page/AboutUs";
import Company from "../Page/Company";
import ContactUs from "../Page/ContactUs";
import PrivacyPolicy from "../Page/PrivacyPolicy";
import TermsCondition from "../Page/TermsCondition";
import Faq from "../Page/Faq";
import MyAllDesigns from "../Page/MyAllDesigns";

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
        <Route
          exact
          path={"/aboutus"}
          render={(route) => <AboutUs {...route} />}
        />
        <Route
          exact
          path={"/company"}
          render={(route) => <Company {...route} />}
        />
        <Route
          exact
          path={"/contact-us"}
          render={(route) => <ContactUs {...route} />}
        />
        <Route
          exact
          path={"/privacy-policy"}
          render={(route) => <PrivacyPolicy {...route} />}
        />
        <Route
          exact
          path={"/terms-conditions"}
          render={(route) => <TermsCondition {...route} />}
        />
        <Route exact path={"/faq"} render={(route) => <Faq {...route} />} />
        <Route
          exact
          path={"/my-all-designs"}
          render={(route) => <MyAllDesigns {...route} />}
        />
        <Route exact path={"*"} render={(route) => <NoPage {...route} />} />
      </Switch>
    </RouteContext.Provider>
  );
};

export default RoutesHome;
