import React, { useState, useEffect } from 'react';
import { FaFacebook, FaHistory } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi"
import { BsSearch } from "react-icons/bs"
import { RiShoppingCart2Line } from "react-icons/ri"
import ToggleButton from 'react-toggle-button';
import { Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import getStorage from 'redux-persist/es/storage/getStorage';
import { Link } from "react-router-dom";
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
  const DarkmodeStatus = useSelector(state => state.layoutReducer.DarkmodeStatus);
  const host = window.location.host

  const register = `http://${host}/users/register`
  const login = `http://${host}/users/login`
  console.log(host);

  const token = getStorage("token")
  return (


    <div className="header" >
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top"  >
        <Navbar.Brand href="/">
          {/* <img src={logo} height={50} alt="logo"></img> */}
          <div id="logo">P I C A S S O</div>
        </Navbar.Brand>

        <>
          <Nav className="mr-auto">
            <div className="header--searchbar">
              <div className="header--searchbar--box">
                <div className="header--searchbar--box--input">
                  <form>
                    <input type="text" placeholder="search" />
                  </form>
                </div>
                <button className="header--searchbar--box--icon"> <BsSearch></BsSearch></button>
              </div>
            </div>

          </Nav>
          {/* <Button className="nav-bar-toggler" type="button" data-toggle="collapse" data-target="#responsive-navbar-nav"><span className="navbar-toggler-icon"></span></Button> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">

              {/* <Nav.Link href="/" active>Shop</Nav.Link> */}
              <Nav.Link href={register}>Sign in</Nav.Link>
              <Nav.Link href={login}>Login</Nav.Link>
              {/* <Link to="/users/cart"> Cart <RiShoppingCart2Line/><div style={{color:"red" ,margin:"-30px 0 0 20px"}}>0</div></Link> */}

            </Nav>

          </Navbar.Collapse>
        </>


      </Navbar>
    </div>



  );
};
export default Header;
