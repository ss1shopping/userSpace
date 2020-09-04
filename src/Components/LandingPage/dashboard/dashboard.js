import React, {useState,useRef,useEffect} from 'react';
import { useDispatch,useSelector} from "react-redux"
import { FiAlignJustify } from "react-icons/fi";
import { RiDashboardLine,RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCloudUpload ,AiFillSetting} from "react-icons/ai";
import {Image,Tab,Tabs,Sonnet, Nav,Navbar,InputGroup,FormControl} from "react-bootstrap"
import { FcAbout } from "react-icons/fc";
import {Bar,Line,Pie,Doughnut} from "react-chartjs-2"
import { GrStatusCriticalSmall} from "react-icons/gr";
import  avatar from "../../../app/scss/avatar.jpg"
import {IoIosSearch} from "react-icons/io"
import Autosugget from "./AutoSuugestion"
import {itemActions} from '../../../app/store/ducks/itemReducer';

const Dashboard = () => {
      const dispatch = useDispatch()
     const item =useSelector(state=>state.itemReducer.item)
      const [key, setKey] = useState('home');
      const [ChartData, setChartData] = useState( {
        labels: ['đã bán', 'target',],
        datasets:[
          {
            label:'Population',
            data:[
              1000,
              1000,
             
            
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ],
            boderWidth:4,
            hoverBackgroundColor:"rgba(30, 25, 12, 0.8)",
            hoverBorderColor:"rgba(30, 25, 12, 0.8)",
            hoverBorderWidth:"rgba(30, 25, 12, 0.8)",
          }
        ]
      })
      useEffect(() => {
         dispatch(itemActions.loadingitem()) 
      }, [])
      const chartReference = useRef()
    
      console.log(chartReference);
    return (
       
        <div>
     <input type="checkbox" id="check"></input>
      
    <div className="sidebar">
        <label for="check">
        <i  id="btn"><FiAlignJustify/></i>
      </label>
       <div className="sidebar-nav">
      <a href="/"><RiDashboardLine/><span>Dashboard</span></a>
      <a href="/dashboard/upload"><AiOutlineCloudUpload/><span>Upload</span></a>
      <a href="/"><GrStatusCriticalSmall/><span>Status</span></a>
      <a href="/dashboard/machinelearning"><RiDeleteBin6Line/><span>Machine learning</span></a>
      <a href="/"><FcAbout/><span>About</span></a>
      <a href="/"><AiFillSetting/><span>Settings</span></a>
    </div>
   </div>

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
          <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      
      <Tab eventKey="home" title="Home">
         <Doughnut
         ref={chartReference}
         id={"chartjs "}
          data={ChartData}
           width={100}
              height={50}
          options={{
           maintainAspectRatio:true,
           responsive:true,
           title:{
             display:true,
             text:"Mục tiêu cho tuần này",
             fontSize:25
           },
           legend:{
             display:false,
             position:"bottom"
           },
           scales:{
             yAxes:[
               {
                 ticks:{
                   autoSkip:true,
                   maxTicksLimit:10,
                   beginAtZero:true
                 },
                 gridLines:{
                   display:false
                 }
               }
             ],
             xAxes:[
               {
                 gridLines:{
                   display:false
                 }
               }
             ]
           },
           tooltips:{
            enabled:true,
            backgroundColor:'rgba(30, 25, 12, 0.8)'
           },
           animation:{
             display:true
           }
          }}
        />
     {/* <Bar
          data={ChartData}
          options={{
           maintainAspectRatio:false,
           title:{
             display:true,
             text:"largest city in massasuset",
             fontSize:25
           },
           legend:{
             display:true,
             position:"right"
           }
          }}
        />
        <Pie
          data={ChartData}
          options={{
             maintainAspectRatio:false,
            title:{
              display:true,
              text:'Largest Cities In ',
              fontSize:25
            },
            legend:{
              display:true,
              position:"bottom"
            }
          }}
        />
       <Line
          data={ChartData}
          options={{
             maintainAspectRatio:false,
            title:{
              display:true,
              text:'Largest Cities In ',
              fontSize:25
            },
            legend:{
              display:true,
              position:"bottom"
            }
          }}
        /> */}
      </Tab>
      <Tab eventKey="sold" title="Đã bán">
       <div>hihi</div>
      </Tab>
     
    </Tabs>
    </div>

        </div>
       
       
    );
};

export default Dashboard;