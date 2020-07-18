import React from "react";

import {Route, Switch} from "react-router-dom";
import LandingPage from "../layout/LandingPage";
import withSplashScreen from "../layout/splashScreen"
import Login from "../layout/login/login"
import Layout from "../layout/layout"
import Body from "../../Components/body/body";
const Router = () => {
  return (
   <Switch>
   <Layout></Layout>
     
   </Switch>
  );
};

export default Router;