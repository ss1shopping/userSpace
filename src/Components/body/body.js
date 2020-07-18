import React,{useEffect} from 'react';
import { useSelector} from 'react-redux';
import Login from "../login/login"
import {BrowserRouter as Router,Route, Redirect} from "react-router-dom";
import Regiter from '../login/regiter';
import LandingPage from "../LandingPage/LandingPage"
import Profile from '../LandingPage/profile/profile';
const Body = () => {
  const DisplayNavbar =useSelector(state=>state.layoutReducer.DisplayNavbar)
  const token =useSelector(state=>state.authReducer.token)
  useEffect(() => {
    
   
  }, [token])
  const ProtectRoute=({component:Component,...rest}) => {
        return <Route {...rest} render={(props)=>{

              if(token!==null){
               return  <Component {...props}/>
              }else{
                 return <Redirect to="/SignIn"/>

            }

          }}/>
      }
  return (
    <div id="body" style={DisplayNavbar=="block"?{background:"gray"}:{}}>
     <Router>
        <Route exact path="/" component={LandingPage}></Route>
       <Route exact path='/SignIn' component={Login}/>
        <Route exact path='/register' component={Regiter}/>
        <Route exact path="/profile" component={Profile}></Route>
         <Route exact path="/test" component={Profile}></Route>
    </Router>  
    </div>
  );
};

export default Body  ;