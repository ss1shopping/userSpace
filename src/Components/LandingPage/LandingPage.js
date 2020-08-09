import React, { useState, useRef, useEffect,Component } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useOutsideClick } from "../../_metronic/hook/outsideAlert";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// import adapter from "webrtc-adapter";
// import { Formik, useField, Form } from "formik";
// import * as Yup from "yup";
// import { ArcText } from "./svg/test";
// import { Helper } from "dxf";
// import Dropzone from "react-dropzone";
// import demo from "./svg/test";
import { Container, Nav, Navbar, Row, Col,Image,DropdownButton,Dropdown ,Card} from "react-bootstrap";
import avatar from "../../app/scss/avatar.jpg"
import {crawler} from "../../app/store/ducks/crawlerReducer";
import  withSplashScreen  from "../../app/layout/splashScreen"

import { connect } from "react-redux";




 class LandingPage extends Component {
   constructor(props) {
     super(props)
     this.props={

     }
   }
   componentWillMount() {
     var dispatch=this.props.dispatch                 //cách gọi hàm thực thi trong store
     dispatch({type:"feachData"})    
    
   }
   componentDidUpdate(prevProps, prevState) {
     console.log(this.props.phimChieuRap.title2);
   
   }
   
  render() {
    let loadImage
    let loadtitle1=this.props.phimChieuRap.title1
    let loadtitle2=this.props.phimChieuRap.title2
    if(this.props.phimChieuRap){
   loadImage= this.props.phimChieuRap.map((index,key)=>{
   
    return (
      <Col md={4} lg={3} sm={6} xs={6}>
          <Link className="film">
       <Card >
              <Card.Img variant="top"  src={index.urlImage} alt="avatar cua tien"></Card.Img>
            <Card.Body>
              <Card.Title className="card-title">{index.title1}</Card.Title>
               <Card.Text className="card-text">
                  {index.title2}
               </Card.Text>
            </Card.Body>
            </Card> 
            </Link>
            </Col>
  )

})
    }
    
    return (
       <>
      <div >
        {/* ref={test} */}
     <Container class="padding">
       <Row className="padding">
          <Col xs={12}>
        <h1 className='display-4'>
        Phim Chieu Rap Moi
     
        </h1>
        <hr/>
        </Col>
       
             {loadImage}
          
         {/* <Col md={4} lg={3} sm={6} xs={6}>
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
        </Col> */}
       </Row>
     </Container>
         
       
      </div>
    </>
    )
  }
}
const mapStateToProps =(state)=>({
 phimChieuRap:state.crawlerReducer.phimChieuRap
})




export default connect(mapStateToProps)(LandingPage);
// function LandingPage(props) {
//   const dispatch = useDispatch();
//   const phimChieuRap=useSelector(state=>state.crawlerReducer.phimChieuRap)
//   const pending =useSelector(state=>state.crawlerReducer.pending)
//   const [box, setbox] = useState("hihi");
//   const [box1, setbox1] = useState("loz");
//   const [handle, sethandle] = useState("handle");
//   const [visiable, setvisiable] = useState(true);
//   const [hihi, sethihi] = useState(true);
//   const test = useRef();
//   function hideDropdown() {
//     setvisiable(false);
//     sethihi(false);
//   }
//   function showDropdown() {
//     setvisiable(true);
//     sethihi(true);
//   }
//   useOutsideClick(test, hideDropdown, visiable);
//   useOutsideClick(test, hideDropdown, hihi);
//  dispatch({type:"test"})
//   return (
   
//   );
// }

//export default LandingPage;
