import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from './searchBar';
// import { Link } from "react-router-dom";
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


  return (


    <div className="header" >
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="top"  >
        <Navbar.Brand href="/">
          {/* <img src={logo} height={50} alt="logo"></img> */}
          <div id="logo">P I C A S S O</div>
        </Navbar.Brand>

        <>
          <Nav className="mr-auto">
            <SearchBar></SearchBar>

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
