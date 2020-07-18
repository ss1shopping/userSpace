import React , {useState}from 'react';
import { Comment, Tooltip} from 'antd';
import moment from 'moment';
import avatar from "../../../app/scss/avatar.jpg"
// import Avatar from '@material-ui/core/Avatar';


import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {Layout} from "antd";
import { Avatar } from 'antd';


import { useSelector } from 'react-redux';
const  {Header,Footer,Sider,Content}=Layout;
const Yourfeed = () => {
  const [clickTymChangeBackground, setclickTymChangeBackground] = useState("yourfeed--infor--tym--box")
  const [background, setbackground] = useState("white")
  const DarkmodeStatus=useSelector(state=>state.layoutReducer.DarkmodeStatus)
  const [color,setcolor]=useState("red")
  const handleClickChangeBackground=()=>{
   if(clickTymChangeBackground==="yourfeed--infor--tym--box"){
     setclickTymChangeBackground("yourfeed--infor--tym--box clicked")
     setbackground("rgb(197, 31, 31)")
     setcolor("white")
   }else{
      setclickTymChangeBackground("yourfeed--infor--tym--box")
      setbackground("white")
      setcolor("red")
   }
  }
  return (

//     <Col xs={2} sm={4} md={6} lg={8} xl={2}>

       <div className="yourfeed">
      
        <div>
          <div  className="yourfeed--infor">
                 <div  className="yourfeed--infor--avatar">
                 <a href="/" style={DarkmodeStatus?{color:"white"}:{color:"black"}}> <Avatar alt="Remy Sharp" src={avatar} /></a>
                   </div>
               
              <div className="yourfeed--infor--name">
                 <a href="/"> <div className="name" sstyle={DarkmodeStatus?{color:"white"}:{color:"black"}}>tien</div></a>
               <Tooltip >
                       <span style={DarkmodeStatus?{color:"white"}:{color:"black"}}>11-12-2020</span>
                   </Tooltip>
                   </div>
  <div className="yourfeed--infor--tym">
                             <div className={clickTymChangeBackground} style={{background:background,color:color}} onClick={()=>handleClickChangeBackground()}>
                              <FaRegHeart/>
                              <div>1</div>
                             </div>
    </div>
                   </div>
                   </div>
                   <div>
                   
            <div className="yourfeed--post">
              <div>
                 <Link to ="/post-detail"> 
                <div className="yourfeed--title">
                    this iss title
                </div>
                <div className="yourfeed--content">
                    chu naht nha
                </div>
                </Link> 
              </div>
            
              <div className="yourfeed--post--comment">
                <div className="yourfeed--post--comment--show">
                 <a href="/profile/tien" ><Avatar alt="Remy Sharp" src={avatar}/></a>
                  
                </div>
                 <div className="yourfeed--post--comment--text">
                 <a >  <div className="yourfeed--post--comment--text--name" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>tien</div> </a>
                   <div className="yourfeed--post--comment--text--content" style={DarkmodeStatus?{color:"white"}:{color:"black"}}>alo con bo nmayf bij ngu ko</div>
                 </div>
                 </div>
                <div className="yourfeed--post--writter">
                  <div className="yourfeed--post--writter--show">
                  <a href="/profile/tien"  style={DarkmodeStatus?{color:"white"}:{color:"black"}}><Avatar alt="Remy Sharp" src={avatar}/></a>
                  </div>
                  <div className="yourfeed--post--writter--input">
                    <input type="text"/>
                  </div>
                </div>
             
            </div>
          
            </div>
            
      </div>
    
 
  );
};

export default Yourfeed;