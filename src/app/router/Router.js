import React from "react";
import "../scss/app.scss"
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";

import Layout from "../layout/layout"
import Dashboard from "../../Components/LandingPage/dashboard/dashboard"
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import LandingPage from "../../Components/LandingPage/LandingPage";
import PrivateRouter from "./PrivateRouter";
import Login from "../../Components/login/login";
import Register from "../../Components/login/regiter";
import Profile from "../../Components/LandingPage/profile/profile";
import ConfirmAccount from "../../Components/login/confirmAccount";
import ConfirmSuccessful from "../../Components/login/confirmSuccess";

import Machinelearning from "../../Components/LandingPage/dashboard/machinelearning/machinelearning";
import { Upload } from "../../Components/LandingPage/dashboard/upload/upload";
const Routerr = () => {
  return (
  <Router>
    <Header></Header>
   <Switch>
      <Route exact path="/" component={LandingPage}></Route>
       {/* <Redirect  from={"/profile"} exact={true} to={"/SignIn"}/> */}
       <Route exact path="/users/login" component={Login}></Route>
        <Route exact path='/users/register' component={Register}/>
        <PrivateRouter exact path="/profile" component={Profile}></PrivateRouter>
        <PrivateRouter exact path="/confirm-account" component={ConfirmAccount}></PrivateRouter>
        <Route exact path="/users/login/:token" component={ConfirmSuccessful}></Route>
        <PrivateRouter exact path="/dashboard" component={Dashboard}></PrivateRouter>
        <PrivateRouter exact path="/dashboard/machinelearning" component={Machinelearning}></PrivateRouter>
        <PrivateRouter exact path="/dashboard/upload" component={Upload}></PrivateRouter>
   </Switch>
   <Footer></Footer>
 </Router>
  );
};

export default Routerr;