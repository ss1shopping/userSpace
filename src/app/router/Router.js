import React from "react";

import {Route, Switch} from "react-router-dom";

import Layout from "../layout/layout"

const Router = () => {
  return (
   <Switch>
   <Layout></Layout>
     
   </Switch>
  );
};

export default Router;