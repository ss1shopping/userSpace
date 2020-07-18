import React ,{useState,useRef,useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loading } from '../sagas/authAction';
import {authAction} from "../store/ducks/authReducer"
import { Button } from '@material-ui/core';
import { useFormik } from "formik";
import { FormattedMessage, injectIntl } from "react-intl";
import { TextField } from "@material-ui/core";
import {Link} from "react-router-dom"
import withSplashScreen from "./splashScreen" 
import {useOutsideClick} from "../../_metronic/hook/outsideAlert"

function LandingPage  (props) {
  const dispatch=useDispatch()
 const [box, setbox] = useState("hihi")
 const [box1, setbox1] = useState("loz")
 const [handle, sethandle] = useState("handle")
 const [visiable,setvisiable]=useState(false)
 const [hihi, sethihi] = useState(false)
  const test = useRef()
  function hideDropdown(){
    setvisiable(false)
    sethihi(false)
  }
  function showDropdown(){
  setvisiable(true)
  sethihi(true)
  }
  useOutsideClick(test,hideDropdown,visiable)
  useOutsideClick(test,hideDropdown,hihi)
  
  return (
  <>
  <div ref={test}>
    <div className={`hihi ${visiable? "action":""}`}  style={{width:"50px" ,height:"30px"}} handle={handle} >
      hihihi
    </div>
    <div className={`lox${hihi?"action":""}`}>loz</div>
    <div className={box1}>aloalo</div>
    <button onClick={visiable?hideDropdown:showDropdown}>click</button>
    <button onClick={hihi?hideDropdown:showDropdown}>click</button>
  </div>
         
  </>
  );
};


export default withSplashScreen(LandingPage);