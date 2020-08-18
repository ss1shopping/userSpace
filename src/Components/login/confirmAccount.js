import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Jumbotron,Button} from "react-bootstrap"
const ConfirmAccount = () => {
    const user=useSelector(state=>state.authReducer.user)
    const render=(user)=>{

    
    if(user ===null && user===undefined){
        return (
          <h2> page not found</h2>
        )}
       if(user.active===true){
              return(
                      <div>
                   <h2>active successful</h2>
            <Link to="signin">return tologin </Link>
            </div>
              )
        }else{
                return (
                <h2>please check you email to active account</h2>
                )
        }
    }

    return (
        <div id="confirmAccount" style={{textAlign:"center"}}>
        <Jumbotron>
  <h1>Welcome to Xoaycodeeasy</h1>
  <p>
    please check your email to active your account
  </p>
  <p>
    <Button variant="primary" href="http://www.gmail.com" style={{marginRight:"10px"}}>go to gmail</Button>
    <Button variant="primary" href="http://www.yahoo.com">go to yahoo</Button>
    
  </p>
</Jumbotron>
           
        </div>
    );
};

export default ConfirmAccount;