import React, {useState,useRef,useEffect} from 'react';
import { useDispatch,useSelector} from "react-redux"
import { FiAlignJustify } from "react-icons/fi";
import { RiDashboardLine,RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCloudUpload ,AiFillSetting,AiFillCaretDown} from "react-icons/ai";
import {Image,Tab,Tabs,Sonnet, Nav,Navbar,InputGroup,FormControl, Container} from "react-bootstrap"
import { FcAbout } from "react-icons/fc";
import {Bar,Line,Pie,Doughnut} from "react-chartjs-2"
import { GrStatusCriticalSmall} from "react-icons/gr";
import  avatar from "../../../app/scss/avatar.jpg"
import {IoIosSearch} from "react-icons/io"
import Autosugget from "./AutoSuugestion"
import {itemActions} from '../../../app/store/ducks/itemReducer';
import Item from './item/item';
import LineChart from "./chart/Linechart";

import {Row,Col} from "react-bootstrap"
import DatePicker from "react-datepicker";
import TotalInfor from './TotalInfor/TotalInfor';
import NavbarCustom from './navbar/navbar';

const Dashboard = () => {
      const dispatch = useDispatch()
      const convertDate=(date)=>{
        date=JSON.stringify(date)
      date=date.split("T")[0]
      const year=date.slice(1,5)
      const month=date.slice(6,8)
      const day=date.slice(9,11)
      return ({year,month,day})
      }
      
     const item =useSelector(state=>state.itemReducer.item)
     const [startDate, setStartDate] = useState(new Date());
     const [chart, setChart] = useState("lineChart")
   
      const [key, setKey] = useState('home');
     
      useEffect(() => {
         dispatch(itemActions.loadingitem()) 
      }, [])
      useEffect(() => {
        dispatch(itemActions.loadingInfor(convertDate(startDate)))
       }, [startDate]) 
   
    return (
       
        <div >
         <NavbarCustom></NavbarCustom>
{/* 
     <input type="checkbox" id="check"></input>
      
    <div className="sidebar">
        <label for="check">
        <i  id="btn"><FiAlignJustify/></i>
      </label>
       <div className="sidebar-nav">
      <a href="/"><RiDashboardLine/><span>Dashboard</span></a>
      <a href="/dashboard/item"><AiOutlineCloudUpload/><span>Item</span></a>
      <a href="/dashboard/upload"><GrStatusCriticalSmall/><span>upload</span></a>
      <a href="/dashboard/machinelearning"><RiDeleteBin6Line/><span>Machine learning</span></a>
      <a href="/"><FcAbout/><span>About</span></a>
      <a href="/"><AiFillSetting/><span>Settings</span></a>
    </div>
   </div> */}
         
    <div className="content">
     <Navbar  bg="light" variant="light" >
      <Navbar.Brand >
         <h3>Sản phẩm đã upload</h3>
        </Navbar.Brand>
     <Nav className="ml-auto">
       <div className="content__search-box">
  
       <Autosugget></Autosugget>
         <a className="content__search-btn" href="#"><IoIosSearch/></a>
       </div>
     </Nav>
     </Navbar>

       <div className="statistic" >
        
           <TotalInfor></TotalInfor>
             <Row>
               <Col>
               <div className="dataPicker" >

               <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
               </div>
               </Col>
             </Row>
             <Row  >
              <Col>
              <div>

              <form style={{marginLeft:"100px"}}>
                <label for="charts">Choose the total</label>
                <select name="charts" id="charts">
                  <option value="totalUser">total user</option>
                  <option value="totalSold">total sold</option>
                  <option value="totalView">total view</option>
                  <option value="totalIncome">total income</option>
                </select>
               
                
              </form>
              <form style={{marginLeft:"100px"}}>
                <label for="charts">Choose the chart</label>
                <select name="charts" id="charts" onChange={(e)=>setChart(e.target.value)}>
                  <option value="lineChart" >line chart</option>
                  <option value="barChart" >bar chart</option>
                  <option value="pieChart" >pie chart</option>
                  {/* <option value="mixedChart" >mix chart</option> */}
                  <option value="bubbleChart" >bubble chart</option>
                  <option value="doughnutChart" >doughnut</option>
                 
                </select>
               
    
              </form>
              </div>
              </Col>
             <Col lg={12}>
               <LineChart chart={chart}></LineChart>
              
             </Col>
             </Row>
       </div> 
    </div>
        </div>
       
       
    );
};

export default Dashboard;