import React from "react";

import { Switch, Route} from "react-router-dom";

import Layout from "../layout/layout"

const Router = () => {
  return (
   <Switch>
     <Route path="/" component={Layout}></Route>
 
     
   </Switch>
  );
};

export default Router;