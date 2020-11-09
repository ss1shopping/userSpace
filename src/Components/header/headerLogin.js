import React, { useState, useEffect } from 'react';
import { FaFacebook,FaHistory } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import {FiLogOut} from "react-icons/fi"
import {IoIosLogIn} from "react-icons/io"
import {RiShoppingCart2Line} from "react-icons/ri"
import ToggleButton from 'react-toggle-button';
import { Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import getStorage from 'redux-persist/es/storage/getStorage';
import {Link} from "react-router-dom"
import { authActions } from '../../app/store/ducks/authReducer'
import { removeStorage } from '../../_metronic/utils/utils';
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
const HeaderLogin = (props) => {
  const dispatch = useDispatch();
 
  const DarkmodeStatus = useSelector(state => state.layoutReducer.DarkmodeStatus);
  const cart =useSelector(state=>state.itemReducer.itemInCart)
  const [cartState, setcartState] = useState()
  const [numberOnCart,setNumberOnCart]=useState(0)
  

  const handleLogout=()=>{
    removeStorage("token")
    removeStorage("refreshtoken")
    removeStorage("admin")
  }
  let token=getStorage("token")
  useEffect(() => {
    
     // dispatch(authActions.loadingCart())
      
      token=getStorage("token")
    if(cart.length==0){
      setNumberOnCart(0)
    }else{

      setNumberOnCart(cart.length)
    }
  }, [cart])
  
  return (


    <div >
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top"  >
        <Navbar.Brand href="/">
          {/* <img src={logo} height={50} alt="logo"></img> */}
          <div>P I C A S S O</div>
        </Navbar.Brand>
        {token?
          <>
          <Nav className="mr-auto">
          <div id="header__social--detail">
            <a href="https://www.facebook.com/tien.nguyenmanh.465" className="facebook" style={DarkmodeStatus ? { color: "white" } : { color: "black" }}><FaFacebook /></a>
            <a href="https://www.instagram.com/tien_xoay//" className="instagram" style={DarkmodeStatus ? { color: "white" } : { color: "black" }}><FaInstagram /></a>
          </div>
           
        </Nav>
        {/* <Button className="nav-bar-toggler" type="button" data-toggle="collapse" data-target="#responsive-navbar-nav"><span className="navbar-toggler-icon"></span></Button> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <div className="darkmode">
              <ToggleButton
                value={DarkmodeStatus || false}
                onToggle={(value) => {
                  dispatch({ type: "DARKMODE" });
                }} />
              <span >Dark Mode</span>
            </div>
            {/* <Nav.Link href="/" active>Shop</Nav.Link> */}
            <Link to="/users/history">History<FaHistory/></Link>
            <Nav.Link href="/" onClick={()=>handleLogout()}>Logout <IoIosLogIn/></Nav.Link>
              <Link to="/users/cart"> Cart <RiShoppingCart2Line/><div style={{color:"red" ,margin:"-30px 0 0 20px"}}>{numberOnCart}</div></Link>

          </Nav>

        </Navbar.Collapse>
       </>
:
  <>
    <Nav className="mr-auto">
         
        </Nav>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <div className="darkmode--dashboard">
              <ToggleButton
                value={DarkmodeStatus || false}
                onToggle={(value) => {
                  dispatch({ type: "DARKMODE" });
                }} />
              <span >Dark Mode</span>
            </div>
              <Nav.Link href="/" active>Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="/users/login"><FiLogOut /> Logout</Nav.Link>

          </Nav>

        </Navbar.Collapse>
  </>
}
        
      </Navbar>
    </div>



  );
};
export default HeaderLogin;
