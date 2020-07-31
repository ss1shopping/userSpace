import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutsideClick } from "../../_metronic/hook/outsideAlert";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import adapter from "webrtc-adapter";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { ArcText } from "./svg/test";
import { Helper } from "dxf";
import Dropzone from "react-dropzone";
import demo from "./svg/test";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

function LandingPage(props) {
  const dispatch = useDispatch();
  const [box, setbox] = useState("hihi");
  const [box1, setbox1] = useState("loz");
  const [handle, sethandle] = useState("handle");
  const [visiable, setvisiable] = useState(true);
  const [hihi, sethihi] = useState(true);
  const test = useRef();
  function hideDropdown() {
    setvisiable(false);
    sethihi(false);
  }
  function showDropdown() {
    setvisiable(true);
    sethihi(true);
  }
  useOutsideClick(test, hideDropdown, visiable);
  useOutsideClick(test, hideDropdown, hihi);
  var string =
    "cau1: lam sao? a.1 b.2 c.3 d.4.cau2:duoc roi pahi khong ? a.dungroi b.ok nha c.haylam d.duoc roi cau3:alo?";

  var arrray = string.split("cau");

  return (
    <>
      <div ref={test}>
        <div className="body-wrapper">
          <header>
            <div id="header-body" className="section">
              <Container>
                  <Navbar collapseOnSelect expand="md">
                <Row>
                  <Col
                    xl={4}
                    md={4}
                    sm={0}
                    xs={0}
                    className="element button-element d-none d-md-block"
                  >
                    facebook instta twitter
                  </Col>
                  <Col
                    xl={4}
                    md={4}
                    sm={4}
                    xs={4}
                    className="element button-element"
                  >
                    jupiter flowers
                  </Col>

                  <Col
                    xl={4}
                    md={4}
                    sm={4}
                    xs={4}
                    className=" element shoppingCart-element"
                  >
                    shopsong cart
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={4} xs={4}>
                  
                      <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        className="ml-auto"
                      />
                      <div className="element nav-element site-menu">
                     <Navbar.Collapse style={{background:"yellow",width:"100% !important",postion:"absolute !important"}} id="responsive-navbar-nav">
                          <Nav className="justify-content-center">
                            <Nav.Item>
                              <Nav.Link className="" href="#features">
                                home
                              </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                              <Nav.Link className="" href="#features">
                                about
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link className="" href="#features">
                                shop
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link className="" href="#features">
                                about
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link className="" href="#features">
                                qna
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link className="" href="#features">
                                contact
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Navbar.Collapse>
                      </div>
                      
                    
                  </Col>
                </Row>
                       </Navbar>
                       <div className="element text-element">hihu</div>
                      <div className="element siteSearchBar-element">fea</div>

                      <div className="element svg-element">asd</div>
              </Container>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
