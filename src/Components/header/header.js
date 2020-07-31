import React, { useState, useEffect } from 'react';

import logo from '../../app/scss/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ToggleButton from 'react-toggle-button';
import {Nav,Container,Button,Navbar,NavDropdown} from "react-bootstrap"
// import Toggle from 'react-toggle'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const DarkmodeStatus = useSelector(state => state.layoutReducer.DarkmodeStatus)
  return (


    <div>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top"  >
  <Navbar.Brand href="/">
    <img src={logo}  height={50}></img>
  </Navbar.Brand>
   <Nav className="mr-auto">
     <div id="header__social--detail">
 <a href="https://www.facebook.com/tien.nguyenmanh.465" className="facebook" style={DarkmodeStatus?{color:"white"}:{color:"black"}}><FaFacebook/></a>
  <a href="https://www.instagram.com/tien_xoay//" className="instagram" style={DarkmodeStatus?{color:"white"}:{color:"black"}}><FaInstagram/></a>
     </div>
 
  </Nav>
  {/* <Button className="nav-bar-toggler" type="button" data-toggle="collapse" data-target="#responsive-navbar-nav"><span className="navbar-toggler-icon"></span></Button> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto"/>
 
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <div className="darkmode">
        <ToggleButton
               value={ DarkmodeStatus || false }
               onToggle={(value) => {
               dispatch({type:"DARKMODE"})
  }} />
  <span >Dark Mode</span>
  </div>
      <Nav.Link href="/" active>Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/signin">Login</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      </div>
    


  );
};
export default Header;
