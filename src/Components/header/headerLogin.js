import React, { useState, useEffect } from 'react';
// import { FaFacebook, FaHistory } from "react-icons/fa";
// import { FiAlignJustify } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi"
// import { IoIosLogIn } from "react-icons/io"
// import { RiShoppingCart2Line } from "react-icons/ri"
// import ToggleButton from 'react-toggle-button';
import { Nav, Navbar } from "react-bootstrap";
import { BsSearch } from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux';
import getStorage from 'redux-persist/es/storage/getStorage';
// import { Link } from "react-router-dom"
// import { authActions } from '../../app/store/ducks/authReducer'
import { removeStorage } from '../../_metronic/utils/utils';
import SearchBar from './searchBar';
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
  const cart = useSelector(state => state.itemReducer.itemInCart)
  const user = useSelector(state => state.authReducer.user)
  const [name, setname] = useState("")
  const [cartState, setcartState] = useState()
  const [numberOnCart, setNumberOnCart] = useState(0)
  const [status, setstatus] = useState(false)

  const handleLogout = () => {
    removeStorage("token")
    removeStorage("refreshtoken")
    removeStorage("admin")
  }
  let token = getStorage("token")
  useEffect(() => {

    // dispatch(authActions.loadingCart())

    token = getStorage("token")
    if (cart) {
      if (cart.length == 0) {
        setNumberOnCart(0)
      } else {

        setNumberOnCart(cart.length)
      }
    }

  }, [cart])
  useEffect(() => {
    setname(getStorage("user"))
    console.log(getStorage("user"));
  }, [])
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
            {/* <div className="header--searchbar">
              <div className="header--searchbar--box">
                <div className="header--searchbar--box--input">
                  <form>
                    <input type="text" placeholder="search" />
                  </form>
                </div>
                <button className="header--searchbar--box--icon"> <BsSearch></BsSearch></button>
              </div>
            </div> */}

          </Nav>
          {/* <Button className="nav-bar-toggler" type="button" data-toggle="collapse" data-target="#responsive-navbar-nav"><span className="navbar-toggler-icon"></span></Button> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">

              {/* <Nav.Link href="/" active>Shop</Nav.Link> */}
              <div className="header1" >
                <div className="header1--name">

                  <Nav.Link href="/cart">Cart</Nav.Link>
                </div>
              </div>

              <div className="header1" onMouseLeave={() => setstatus(false)}>
                <div className="header1--name" onMouseOver={() => setstatus(true)}>{user && user.firstname ? `${user.firstname}${user.lastname}` : "user"}</div>
                <div className="box--hidden" style={status ? { display: "block",width:"150px" } : { display: "none" }}>
                  <div className="link"> <Nav.Link href="/users/profile">tai koan qua toi</Nav.Link></div>
                  <div className="link"><Nav.Link href="/history"> don mua</Nav.Link></div>
                  <div className="link"><Nav.Link href="/" onClick={() => handleLogout()}> dang xuat</Nav.Link></div>
                </div>
              </div>

              {/* <Link to="/users/cart"> Cart <RiShoppingCart2Line/><div style={{color:"red" ,margin:"-30px 0 0 20px"}}>0</div></Link> */}

            </Nav>

          </Navbar.Collapse>
        </>


      </Navbar>
    </div>
  );
};
export default HeaderLogin;
