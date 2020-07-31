import React ,{useState}from 'react';
import avatar from '../../../app/scss/avatar.jpg'
import { useDispatch } from 'react-redux';
import {Container, Row , Col ,Tabs,Tab,Image ,Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Yourfeed from "../feed/yourfeed"
import logo from "../../../app/scss/logo.png"
import anh1 from "../../../app/scss/1.jpg"
import anh2 from "../../../app/scss/2.jpeg"
import anh3 from "../../../app/scss/3.jpg"
const Profile = () => {
  const dispatch=useDispatch()
 const onChange =(e)=>{
   console.log(e.target);
   
 }
 const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
   id="customToggle"
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
   ...
  </a>
));
  return (
    <div>
     <div id="slides" className="carousel slide" data-ride="carousel">
       <ul className="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" className="active"></li>
            <li data-tartget="#sildes" data-slidre-to="1"></li>
            <li data-tartget="#sildes" data-slidre-to="2"></li>
            <li data-tartget="#sildes" data-slidre-to="3"></li>
            <li data-tartget="#sildes" data-slidre-to="4"></li>
       </ul>
       <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={anh1}/>
                <div className="carousel-caption">
                  <h2 className="display-4">VietNam</h2>
                  <h3> A utolayout with Bootstrap</h3>
                  <button type="button" className="btn btn-outline-light btn-lg"> VIEW TUTORIAL</button>
                  <button type="button" className="btn btn-primary btn-lg">Get started</button>
                </div>
                </div> 
                <div className="carousel-item">
                <img src={logo}/>
                 <div className="carousel-caption">
                  <h2 className="display-4">LoGo</h2>
                  <h3> Autolayout with Bootstrap</h3>
                  <button type="button" className="btn btn-outline-light btn-lg"> VIEW TUTORIAL</button>
                   <button type="button" className="btn btn-primary btn-lg">Get started</button>
                </div>
                </div>
                <div className="carousel-item ">
                <img src={anh1}/>
                 <div className="carousel-caption">
                  <h2 className="display-4">VietNam</h2>
                  <h3> Autolayout with Bootstrap</h3>
                  <button type="button" className="btn btn-outline-light btn-lg"> VIEW TUTORIAL</button>
                   <button type="button" className="btn btn-primary btn-lg">Get started</button>
                </div>
                </div>
                <div className="carousel-item ">
                <img src={logo}/>
                 <div className="carousel-caption">
                  <h2 className="display-4">LOGo</h2>
                  <h3> Autolayout with Bootstrap</h3>
                  <button type="button" className="btn btn-outline-light btn-lg"> VIEW TUTORIAL</button>
                   <button type="button" className="btn btn-primary btn-lg">Get started</button>
                </div>
                </div>

       </div>
    </div>
    
    <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-sx-12 col-sm-6 col-md-4">
            <i className="fab fa-react"></i>
            <h3>React</h3>
            <p>build the lastest version of React</p>
          </div>
          <div className="col-sx-12 col-sm-6 col-md-4">
            <i className="fab fa-angular"></i>
            <h3>Angular</h3>
            <p>build te Website and Front-end Application</p>
          </div>
          <div className="col-sx-12  col-md-4">
            <i className="fab fa-css3"></i>
            <h3>CSS3,HTML5</h3>
            <p>Customize the web UI</p>
          </div>
        </div>
        <hr className="my-4"/>
    </div>
    <div className='container-fluid'>
      <div className="row padding">
        
        <div className="col-md-4">
          <div className="card">
          <img className="card-img-top" src={anh3} />
          <div className="card-body">
            <h4 className="card-title">Nguyen Manh Tien</h4>
            <p className="card-text"> 1 year exprience in front end and 6 month in back-end</p>
          </div>
          </div>
        </div>
         <div className="col-md-4">
            <div className="card">
          <img className="card-img-top" src={anh1} />
          <div className="card-body">
            <h4 className="card-title">Nguyen Manh Tien</h4>
            <p className="card-text"> 1 year exprience in front end and 6 month in back-end</p>
          </div>
          </div>
         </div>
          <div className="col-md-4">
             <div className="card">
          <img className="card-img-top" src={anh2} />
          <div className="card-body">
            <h4 className="card-title">Nguyen Manh Tien</h4>
            <p className="card-text"> 1 year exprience in front end and 6 month in back-end</p>
          </div>
          </div>
          </div>
      </div> 
    </div>
      </div>
  );
};

export default Profile;