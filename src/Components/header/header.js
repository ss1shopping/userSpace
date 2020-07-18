import React,{useState,useEffect} from 'react';

import logo from '../../app/scss/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ToggleButton from 'react-toggle-button';

// import Toggle from 'react-toggle'
import {Link} from "react-router-dom";
import { useSelector,useDispatch} from 'react-redux';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
  const Header = (props) => {
  const DarkmodeStatus=useSelector(state=>state.layoutReducer.DarkmodeStatus)
  const WidthLayout =useSelector(state=>state.layoutReducer.WidthLayout)
  const DisplayNavbar =useSelector(state=>state.layoutReducer.DisplayNavbar)
  const DisplaySymbol =useSelector(state=>state.layoutReducer.DisplaySymbol)
  const widthnavbar=useSelector(state=>state.layoutReducer.WidthNavbar)
  const isAutheticate=useSelector(state=>state.authReducer.checklogin)

  const ref =useSelector(state=>state.layoutReducer.ref)
 const {  width } = useWindowDimensions();
  const dispatch=useDispatch();
  const handleChangeLayout=()=>{
 if (WidthLayout==="100%"&& width>500){
   dispatch({type:"CHANGE_lAYOUT",
      layout:"80%",
      navbar:"block",
      symbol:"none",
      opacity:{opacity:"1"},
      widthnavbar:"20%",
       
   })
   
 }
  if(width<500 && WidthLayout==="100%"){
       dispatch({type:"CHANGE_lAYOUT",
      layout:"0%",
      opacity:{opacity:"0"},
      navbar:"block",
      symbol:"none",
      widthnavbar:"100%",
      
   })
       
     }
     console.log(DisplayNavbar);
     
 if(DisplayNavbar==="block"){
   dispatch({type:"OUTER_CLICK_NARBAR"
   
  })
 }
 
 else
 {
   dispatch({type:"OUTER_CLICK_NARBAR"
   
  })
 }
  
  dispatch({type:"SET_WIDTH",
          setWidth:width
})
}


  
  return (
   
   
    
   
     <div id="header">
           <div id="header__logo">
             <div id="header__logo--img">
               <a href="/"><img src={logo} alt=""/></a>
             </div>
           </div>
           <div id="header__social">
           <div id="header__social--detail">
  <a href="https://www.facebook.com/tien.nguyenmanh.465" style={DarkmodeStatus?{color:"white"}:{color:"black"}}><FaFacebook/></a>
  <a href="https://www.instagram.com/tien_xoay//" style={DarkmodeStatus?{color:"white"}:{color:"black"}}><FaInstagram/></a>
 


           </div>
            </div>
            <div id="header__mode">
              <div id="header__mode--detail">
            <ToggleButton
               value={ DarkmodeStatus || false }
               onToggle={(value) => {
               dispatch({type:"DARKMODE"})
  }} />
  <span >DarkMode</span>
  </div>
            </div>
          
            <div id="header__navbar" style={width<800?{display:DisplaySymbol}:{display:"none"}}>
            <span onClick={handleChangeLayout} >&#9776;</span>
            </div>
             
            <div id="header__menu" >
               <div style={isAutheticate===false?{display:"none"}:{}}>
        <div className="menu" ><a href="/blog"style={DarkmodeStatus?{color:"white"}:{color:"black"}} >Blog</a></div>
        <div className="menu"><a href="/About-me" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>About Me</a> </div>
        <div className="menu"><a href="/Contact" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>Contact</a></div>
        <div className="menu"><a href="/SignIn" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>Sign in</a></div>
         </div>
         <div style={isAutheticate===true?{display:"none"}:{}}>
        <div className="menu" ><a href="/Home"style={DarkmodeStatus?{color:"white"}:{color:"black"}} >Home</a></div>
        <div className="menu"><a href="/newpost" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>New Post</a> </div>
        <div className="menu"><a href="/Setting" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>Settings</a></div>
        <div className="menu"><a href="/wall" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>manhtien465</a></div>
        </div>
          </div>
         
        </div>
   
  );
};
export default Header;
