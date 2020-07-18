import React, { useState, Children,useRef,useEffect } from 'react';
import '../../app/scss/app.scss'


import Navbar from '../../Components/navbar/navbar'

import Header from "../../Components/header/header";
import Body from '../../Components/body/body';
import Footer from '../../Components/footer/footer';
import { useSelector, useDispatch} from 'react-redux';
import {useOutsideClick} from "../../_metronic/hook/outsideAlert"
import {BrowserRouter as Router,Route} from "react-router-dom";
import withSplashScreen from './splashScreen';

function Layout() {
  const dispatch=useDispatch();
  const DarkmodeStatus=useSelector(state=>state.layoutReducer.DarkmodeStatus)
  const WidthLayout =useSelector(state=>state.layoutReducer.WidthLayout)
   const widthnavbar=useSelector(state=>state.layoutReducer.WidthNavbar)
  const DisplayNavbar =useSelector(state=>state.layoutReducer.DisplayNavbar)
const opacity=useSelector(state=>state.layoutReducer.opacity)
 const Width=useSelector(state=>state.layoutReducer.Width)
  const ref =useSelector(state=>state.layoutReducer.ref)
  const outClickNavbar=useSelector(state=>state.layoutReducer.outClickNavbar)
  const [Trigger, setTrigger] = useState(outClickNavbar)
  const app = useRef()
  
//   const { t, i18n } = useTranslation();
// // function handleClick(lang){
// // i18n.changeLanguage(lang);
// // }
let style={}
if(opacity){
  style={...opacity,
  width:WidthLayout}
}
useEffect(() => {
  dispatch({type:"SET_REF",
setref:app})
 
}, [app, dispatch])
function hidenavbar(){
  dispatch({type:"OUTER_CLICK_NARBAR"})
  
}
useEffect(() => {
 if(outClickNavbar===false){
   dispatch({type:"RESET_LAYOUT",
     layout:"100%",
     payload:"block",
     symbol:"block",
     navbar:'none'
    })
  }
  
}, [Trigger, dispatch, outClickNavbar])
  
    // if(DisplayNavbar==="block"){
    // setTrigger(true)
    // console.log("trigger");
    
    // }
  
  console.log(Trigger);
  

useOutsideClick(app,hidenavbar,outClickNavbar)
  return (
    <Router>
    <div ref={app} id="App" style={DarkmodeStatus?{background:"#242526",color:"white"}:{background:"white",color:"black"}}
     >
      <div id="App__main"
      >
        <div id="App__main--layout" style={Width>800?{width:"100%" }:style}>
        
        
       
     <Header></Header>
     
     <Router>
     
      <Body></Body>
    
    </Router>
    
     <Footer></Footer>
     </div>
     
     <div id="App__main--navbar"   style={Width>800?{display:"none"}:{display:DisplayNavbar,width:widthnavbar,zIndex:"1"}}>
    <Navbar></Navbar>
     </div>
     </div>
       {/* <button onClick={()=>handleClick("en")}>English</button>
        <button onClick={()=>handleClick("vn")}>VietName</button>
         <button onClick={()=>handleClick("ko")}>Korea</button> */}
     
      

    </div>
    </Router>
   
  );
}

export default withSplashScreen(Layout);
