import React ,{useState,useRef,useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useOutsideClick} from "../../_metronic/hook/outsideAlert";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import adapter from 'webrtc-adapter';
import {Formik,useField, Form} from "formik"
import * as Yup from "yup"
import {ArcText} from "./svg/test"
import { Helper } from 'dxf';
import Dropzone from 'react-dropzone';
import demo from './svg/test'




function LandingPage  (props) {
  const dispatch=useDispatch()
 const [box, setbox] = useState("hihi")
 const [box1, setbox1] = useState("loz")
 const [handle, sethandle] = useState("handle")
 const [visiable,setvisiable]=useState(true)
 const [hihi, sethihi] = useState(true)
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
 var string ="cau1: lam sao? a.1 b.2 c.3 d.4.cau2:duoc roi pahi khong ? a.dungroi b.ok nha c.haylam d.duoc roi cau3:alo?"

 var arrray=string.split("cau")


  
  return (
  <>
  <div div ref={test}>
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


export default LandingPage;