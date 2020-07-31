import React,{useEffect} from 'react';
import { shallowEqual, useSelector } from "react-redux";
import { useLastLocation } from "react-router-last-location";
import Login from "../login/login"
import {BrowserRouter as Router,Route, Redirect,Switch, withRouter} from "react-router-dom";

import Regiter from '../login/regiter';
import LandingPage from "../LandingPage/LandingPage"
import Profile from '../LandingPage/profile/profile';
import PrivateRouter from "../../app/router/PrivateRouter"
import * as routerHelpers from "../../app/router/RouterHelpers";
 export  const Body = withRouter(({history}) => {
   const DisplayNavbar=useSelector(state=>state.layoutReducer.DisplayNavbar)
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
  // const ProtectRoute=({component:Component,...rest}) => {
  //       return <Route {...rest} render={(props)=>{

  //             if(token!==null){
  //              return  <Component {...props}/>
  //             }else{
  //                return <Redirect to="/SignIn"/>

  //           }

  //         }}/>
  //     }
  return (
    <div  style={DisplayNavbar=="block"?{background:"gray"}:{}}>
     <Router>
        <Route exact path="/" component={LandingPage}></Route>
       {/* <Redirect  from={"/profile"} exact={true} to={"/SignIn"}/> */}
       <Route exact path="/signIn" component={Login}></Route>
        <Route exact path='/register' component={Regiter}/>
        <Route exact path="/profile" component={Profile}></Route>
        
          {/* <PrivateRouter path={"/profile"} component={Profile} /> */}
    </Router>  
    </div>
  );
});

