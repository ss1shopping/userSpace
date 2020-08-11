import React,{Suspense} from 'react';
import { shallowEqual, useSelector } from "react-redux";
import { useLastLocation } from "react-router-last-location";
import Login from "../login/login"
import {BrowserRouter as Router,Route, withRouter} from "react-router-dom";
import Regiter from '../login/regiter';
import LandingPage from "../LandingPage/LandingPage"
import Profile from '../LandingPage/profile/profile';
import * as routerHelpers from "../../app/router/RouterHelpers";
import withSplashScreen from '../../app/layout/splashScreen'
 export  const Body = withRouter(({history}) => {
 const lastLocation = useLastLocation();
  routerHelpers.saveLastLocation(lastLocation);
  const { menuConfig, userLastLocation } = useSelector(
    ({ auth, urls, builder: { menuConfig } }) => {
      return {
        menuConfig,
        userLastLocation: routerHelpers.getLastLocation()
      };
    },
    shallowEqual
  );
  return (
    <div>
      <Suspense fallback={<withSplashScreen />}>
     <Router>
        <Route exact path="/" component={LandingPage}></Route>
       {/* <Redirect  from={"/profile"} exact={true} to={"/SignIn"}/> */}
       <Route exact path="/signIn" component={Login}></Route>
        <Route exact path='/register' component={Regiter}/>
        <Route exact path="/profile" component={Profile}></Route>
          {/* <PrivateRouter path={"/profile"} component={Profile} /> */}
    </Router>  
    </Suspense>
    </div>
  );
});

