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
        <div>
           
        <Jumbotron>
  <h1>Thank you to confirm email Xoaycodeeasy</h1>
  <p>
    now, you can login to have wonder experiance with Xoaycodeeasy
  </p>
  <p>{notice}</p>
  <p>
    <Button href="/users/login" > Login</Button>
    
    
  </p>
</Jumbotron>
        </div>
    );
};

export default ConfirmSuccessful ;