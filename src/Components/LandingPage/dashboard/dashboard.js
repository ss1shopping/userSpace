import React, {useState,useEffect} from 'react';
import { useDispatch} from "react-redux"
import { Nav,Navbar} from "react-bootstrap"
import {IoIosSearch} from "react-icons/io"
import Autosugget from "./AutoSuugestion"
import {itemActions} from '../../../app/store/ducks/itemReducer';
import LineChart from "./chart/Linechart";
import {Row,Col} from "react-bootstrap"
import DatePicker from "react-datepicker";
import TotalInfor from './TotalInfor/TotalInfor';
import NavbarCustom from './navbar/navbar';
import { totalActions } from '../../../app/store/ducks/totalReducer';
import FooterDashboard from "../../footer/footerDashboard"
import { authActions } from '../../../app/store/ducks/authReducer';

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
      
   
     const [startDate, setStartDate] = useState(new Date());
     const [chart, setChart] = useState("lineChart")
     const [total,setTotal]=useState("totalUser")
      // const [key, setKey] = useState('home');
    //  useEffect(() => {
    //     dispatch(authActions.loadingCart())
    //  }, [])
    
         dispatch(itemActions.loadingitem()) 
     
      useEffect(() => {
        //dispatch(authActions.loadingCart())
        dispatch(itemActions.loadingInfor(convertDate(startDate)))
       }, [startDate]) 
      useEffect(()=>{
        dispatch(totalActions.loadingInforChart(total))
        console.log(total);
      },[total])
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
       {/* <div className="content__search-box">
  
       <Autosugget></Autosugget>
         <a className="content__search-btn" href="#"><IoIosSearch/></a>
       </div> */}
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
              <div className="select">

              <form >
                <label for="totals">Choose the total</label>
                <select name="totals" id="totals" onChange={(e)=>setTotal(e.target.value)}>
                  <option value="totalUser">total user</option>
                  <option value="totalSold">total sold</option>
                  <option value="totalView">total view</option>
                  <option value="totalIncome">total income</option>
                </select>
               
                
              </form>
              <form >
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
     <FooterDashboard></FooterDashboard>
    </div>
        </div>
       
       
    );
};

export default Dashboard;