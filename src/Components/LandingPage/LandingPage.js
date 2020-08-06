import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutsideClick } from "../../_metronic/hook/outsideAlert";
import { Link } from "react-router-dom";

import adapter from "webrtc-adapter";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { ArcText } from "./svg/test";
import { Helper } from "dxf";
import Dropzone from "react-dropzone";
import demo from "./svg/test";
import { Container, Nav, Navbar, Row, Col,Image,DropdownButton,Dropdown ,Card} from "react-bootstrap";
import avatar from "../../app/scss/avatar.jpg"
import {crawler} from "../../app/store/ducks/crawlerReducer";
import {crawlerSaga} from "../../app/sagas/crawler.Action"
function LandingPage(props) {
  const dispatch = useDispatch();
  const phimChieuRap=useSelector(state=>state.crawlerReducer.phimChieuRap)
  const pending =useSelector(state=>state.crawlerReducer.pending)
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
 

 dispatch({type:"test"})

   

  
 
  return (
    <>
      <div ref={test}>
     <Container class="padding">
       <Row className="padding">
          <Col xs={12}>
        <h1 className='display-4'>
        Phim Chieu Rap Moi
       <button onClick={()=>dispatch(crawler.crawler_data())}>click</button>
        </h1>
        <hr/>
        </Col>
        <Col md={4} lg={3} sm={6} xs={6}>
          <Link className="film">
          <Card >
              <Card.Img variant="top"  src={avatar} alt="avatar cua tien"></Card.Img>
            <Card.Body>
              <Card.Title className="card-title">Venom is the best film chooose in 2002</Card.Title>
               <Card.Text className="card-text">
                   Some quick example text to build on the card title and make up the bulk of
                   the card's content.
               </Card.Text>
            </Card.Body>
            </Card> 
            </Link>
        </Col>
        <Col md={4} lg={3} sm={6} xs={6}>
         <Link className="film">
          <Card >
              <Card.Img variant="top"  src={avatar} alt="avatar cua tien"></Card.Img>
            <Card.Body>
              <Card.Title className="card-title">Venom</Card.Title>
               <Card.Text className="card-text">
                   Some quick example text to build on the card title and make up the bulk of
                   the card's content.
               </Card.Text>
            </Card.Body>
            </Card> 
            </Link>
        </Col>
        <Col md={4} lg={3} sm={6} xs={6}>
      <Link className="film">
          <Card >
              <Card.Img variant="top"  src={avatar} alt="avatar cua tien"></Card.Img>
            <Card.Body>
              <Card.Title className="card-title">Venom</Card.Title>
               <Card.Text className="card-text">
                   Some quick example text to build on the card title and make up the bulk of
                   the card's content.
               </Card.Text>
            </Card.Body>
            </Card> 
            </Link>
        </Col>
         <Col md={4} lg={3} sm={6} xs={6}>
          <Link className="film">
          <Card >
              <Card.Img variant="top"  src={avatar} alt="avatar cua tien"></Card.Img>
            <Card.Body>
              <Card.Title className="card-title">Venom</Card.Title>
               <Card.Text className="card-text">
                   Some quick example text to build on the card title and make up the bulk of
                   the card's content.
               </Card.Text>
            </Card.Body>
            </Card> 
            </Link>
        </Col>
       </Row>
     </Container>
         
       
      </div>
    </>
  );
}

export default LandingPage;
