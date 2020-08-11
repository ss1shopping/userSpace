import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch} from 'react-redux';
import {Formik,useField, Form} from "formik"
import * as Yup from "yup"

import { authActions } from '../../app/store/ducks/authReducer';
const CustomTextForm=({label,...props})=>{
  const [field,meta]=useField(props)
  return(
    <>
   
    <input  {...field} {...props}/>
    {meta.touched && meta.error ?(
      <div className="error" >{meta.error}</div>
    ):null}
    </>
  )
}


const Login = (props) => {
  const dispatch=useDispatch()
  const DarkmodeStatus=useSelector(state=>state.layoutReducer.DarkmodeStatus)

  return (
    <div id="login" style={DarkmodeStatus?{backgroundColor:"#18191a"}:{backgroundColor:"#f0f2f5" ,borderTop:"1px solid #e6e8ea"}}>
      
      <div id="login__box"style={DarkmodeStatus?{backgroundColor:"#242526"}:{backgroundColor:"white"}}>
       <Formik initialValues={{
     email:"",
     password:"",
  
  }}
  validationSchema={Yup.object({
    password:Yup.string()
    
     .min(8, 'Password is too short ,should be 8 chars minimum.')
    
    .required("Required"),
    email:Yup.string()
    .email("invalid email address")
    .required("required"),
   
  })}
  onSubmit={(values,{setSubmitting,resetForm})=>{

    dispatch(authActions.login(values.email,values.password,setSubmitting,props.history))
  
  }}
  >
    {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            })=>(
   <Form noValidate={true}
                  autoComplete="off"
                  className="kt-form"
                  onSubmit={handleSubmit}>
     
         <div className="input">
           <CustomTextForm label="Email" name="email"type="email" placeholder="Email"
         
           style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#d2e6eb"}:{}}
          />
           
         </div>
         <div className="input">
           <CustomTextForm label="Password" name="password" type="password" placeholder="Password" 
          
           style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#d2e6eb"}:{}}
           />
         
         </div>
         {/* <button type="button" style={{width:"100%"}} className="btn btn-primary">
              LOGIN
         </button> */}
         <div className="submit">
           <input  type="submit" disabled={isSubmitting} value={isSubmitting?"Loading ..":"LOGIN"}/>
         </div>
         <div className="box">
         <div className="register">
           <span className="question">New to Xoay?</span>
           <span className="link"><Link to="/register" style={DarkmodeStatus?{color:"#249dcb"}:{}}>Create an account</Link></span>
         </div>
         <div className="forgot">
           <span><Link to="/forgotpassword" style={DarkmodeStatus?{color:"#249dcb"}:{}}>Forgot password ?</Link></span>
         </div>
         </div>
       </Form>
 )}
   </Formik>
       
      </div>
    </div>
  );
};

export default Login;