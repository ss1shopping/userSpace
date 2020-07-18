import React ,{useState}from 'react';

import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import Yourfeed from "../feed/yourfeed"
const Profile = () => {
  const dispatch=useDispatch()
  const [button1, setbutton1] = useState("button1")
  const [button2, setbutton2] = useState("button2")
  
  const handleClick=(e)=>{
     if(button1==="button1"){
       setbutton1("button1 open")
       setbutton2("button2")
     }else{
        setbutton1("button1")
       setbutton2("button2 open")
       console.log(button1);
       console.log(button2);
       
     }
  }
  return (
    <div>
      <div className="profile">
        <div className="profile--myfeed">
        <div className="profile--myfeed--button"> 
            <Link to="/my-posts" className={button1} onClick={e=>handleClick(e)}>you feed</Link>
            <Link to="/global-posts" className={button2} onClick={e=>handleClick(e)}> global feed</Link>
          </div>
          <div className="profile--myfeed--post">
            <Yourfeed></Yourfeed>
        </div>
        </div>
        
        <div className="profile--tag">
          <div className="profile--tag__list">
           <div><a href="/">daynayf</a></div> 
            <div><a href="/">da</a></div> 
             <div><a href="/">pamramsdasdasdasdauh</a></div> 
              <div><a href="/">pamramsdasdasdasdauh</a></div> 

            
          </div>
        </div>
      </div>
      
       <div>
      
       </div>
    </div>
  );
};

export default Profile;