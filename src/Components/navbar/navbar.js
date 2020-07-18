import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import ToggleButton from 'react-toggle-button';
import {  DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Navbar=()=> {
   const DisplaySymbol1 =useSelector(state=>state.layoutReducer.DisplaySymbol1)
   const DarkmodeStatus=useSelector(state=>state.layoutReducer.DarkmodeStatus)
  

   const dispatch=useDispatch()
   const handleChangeLayout=()=>{
       dispatch({type:"CHANG_LAYOUT1",
      payload:"none",
      opacity:{opacity:"1"}
      })
      dispatch({type:"RESET_LAYOUT",
     layout:"100%",
     payload:"block",
     symbol:"block",
     navbar:'none'
    })
   }
 
     
   
  return (
     <Element name="test7" className="navbarscroll" id="navbarscroll" style={{
           
            // height: '50%',
            // overflowX: 'scroll',
            
          }}>
    <div id="navbar">
    <div id="navbar__toggle" style={{display:DisplaySymbol1}}>
            <span onClick={handleChangeLayout} >&#9747;</span>
            </div>
            <div id="navbar__mode">
              <div id="navbar__mode--detail">
            <ToggleButton
               value={ DarkmodeStatus || false }
               onToggle={() => {
               dispatch({type:"DARKMODE"})
  }} />
  <span >DarkMode</span>
  </div>
            </div>
     <div id="navbar__menu" >

        <div className="menu" ><a href="/blog"style={DarkmodeStatus?{color:"white"}:{color:"black"}} >Blog</a></div>
        <div className="menu"><a href="/About-me" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>About Me</a> </div>
        <div className="menu"><a href="/Contact" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>Contact</a></div>
       
        
        <div className="menu"><a href="/SignIn" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>Sign in</a></div>
         <div>lorem</div>
     <div>lorem</div>
      <div>lorem</div>
       <div>lorem</div>
        <div>lorem</div>
         <div>lorem</div>

          <div>lorem</div>
           <div>lorem</div>
            <div>lorem</div> <div>lorem</div>
     <div>lorem</div>
      <div>lorem</div>
       <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
      <div>lorem</div>
      <div>lorem</div>
      <div>lorem</div>
       <div>lorem</div>
        <div>lorem</div>
         <div>lorem</div>

          <div>lorem</div>
           <div>lorem</div>
            <div>lorem</div> <div>lorem</div>
     <div>lorem</div>
      <div>lorem</div>
       <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
      <div>lorem</div>
       <div>lorem</div>
        <div>lorem</div>
         <div>lorem</div>

          <div>lorem</div>
           <div>lorem</div>
            <div>lorem</div> <div>lorem</div>
     <div>lorem</div>
      <div>lorem</div>
       <div>lorem</div>
        <div>lorem</div>
         <div>lorem</div>

          <div>lorem</div>
           <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
      <div>lorem</div>
       <div>lorem</div>
        <div>lorem</div>
         <div>lorem</div>

          <div>lorem</div>
           <div>lorem</div>
            <div>lorem</div>
        </div>

    </div>
    </Element>
  );
};
 
export default Navbar;