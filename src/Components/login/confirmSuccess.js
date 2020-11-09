import React ,{useEffect}from 'react';
import {Jumbotron,Button} from "react-bootstrap"
import {Link } from "react-router-dom"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import { authActions } from '../../app/store/ducks/authReducer';
const ConfirmSuccessful = (props) => {
  const dispatch = useDispatch()
  const notice =useSelector(state=>state.authReducer.notice)
 const token=props.match.params.token
 useEffect(() => {
 dispatch(authActions.activeAccount(token))
 }, [token])
    return (
        <div id="confirmSuccess" style={{paddingTop:"100px"}}>
           
        <Jumbotron>
  <h1>Thank you to confirm email PICASSO</h1>
  <p>
    now, you can login to have wonder experiance with PICASSO
  </p>
  <p>{notice}</p>
  <p>
    <Button href="/users/login"  className="btn btn-secondary"> Login</Button>
    
    
  </p>
</Jumbotron>
        </div>
    );
};

export default ConfirmSuccessful ;