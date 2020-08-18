// import React,{Suspense} from 'react';
// import { shallowEqual, useSelector } from "react-redux";
// import { useLastLocation } from "react-router-last-location";
// import Login from "../login/login"
// import {BrowserRouter as Router,Route, withRouter,Redirect} from "react-router-dom";
// import Regiter from '../login/regiter';
// import LandingPage from "../LandingPage/LandingPage"
// import Profile from '../LandingPage/profile/profile';
// import * as routerHelpers from "../../app/router/RouterHelpers";
// import withSplashScreen from '../../app/layout/splashScreen'
// import ConfirmAccount from '../login/confirmAccount';
// import confirmSuccess from "../login/confirmSuccess"
// import getStorage from 'redux-persist/es/storage/getStorage';
// import PrivateRouter from '../../app/router/PrivateRouter';

//  export  const Body = withRouter(({history}) => {
//    const token=getStorage("token")
//    console.log(token);
   
// //  const lastLocation = useLastLocation();
// //   routerHelpers.saveLastLocation(lastLocation);
// //   const { menuConfig, userLastLocation } = useSelector(
// //     ({ auth, urls, builder: { menuConfig } }) => {
// //       return {
// //         menuConfig,
// //         userLastLocation: routerHelpers.getLastLocation()
// //       };
// //     },
// //     shallowEqual
// //   );
    
//   return (
//     <div>
//       <Suspense fallback={<withSplashScreen />}>
//      <Router>
//         <Route exact path="/" component={LandingPage}></Route>
//        {/* <Redirect  from={"/profile"} exact={true} to={"/SignIn"}/> */}
//        <Route exact path="/users/login" component={Login}></Route>
//         <Route exact path='/users/register' component={Regiter}/>
//         <PrivateRouter exact path="/profile" history={history}component={Profile}></PrivateRouter>
//         <PrivateRouter exact path="/confirm-account" component={ConfirmAccount}></PrivateRouter>
         
//         <Route exact path="/users/login/:token" component={confirmSuccess}></Route>
//           {/* <PrivateRouter path={"/profile"} component={Profile} /> */}
//     </Router>  
//     </Suspense>
//     </div>
//   );
// });

