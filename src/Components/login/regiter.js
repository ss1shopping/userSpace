import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import {Formik,useField, Form} from "formik"
import * as Yup from "yup"
import { authActions } from '../../app/store/ducks/authReducer';
const CustomTextForm=({label,...props})=>{
  const dispatch=useDispatch()
  const [field,meta]=useField(props)
  const handlefocus=()=>{
  dispatch(authActions.deleteError())
  }
  return(
    <>
   
    <input  {...field} {...props} onFocus={handlefocus}/>
    {meta.touched && meta.error ?(
      <div className="error" style={{color:"red "}} >{meta.error}</div>
    ):null}
    </>
  )
}
const Register = (props) => {
 const dispatch=useDispatch()
   const DarkmodeStatus=useSelector(state=>state.layoutReducer.DarkmodeStatus)
   const error =useSelector(state=>state.authReducer.error)
   
  return (
    <div id="register" style={DarkmodeStatus?{backgroundColor:"#18191a"}:{backgroundColor:"#f0f2f5" ,borderTop:"1px solid #e6e8ea"}}>
      <div className="registerBox" style={DarkmodeStatus?{backgroundColor:"#242526"}:{backgroundColor:"white"}}>
          <Formik initialValues={{
     password:"",
     email:"",
     firstname:"",
     lastname:"",
     passwordAgain:""
  
  }}
  validationSchema={Yup.object({
    password:Yup.string()
     .min(8, 'Password is too short ,should be 8 chars minimum.')
    .required("Required"),
    passwordAgain:Yup.string()
    .oneOf([Yup.ref("password")], "Password does not match")
    .required("you must be repeat the password"),
    email:Yup.string()
    .email("invalid email address")
    .required("required"),
    firstname:Yup.string()
    .required("firstName is required"),
    lastname:Yup.string()
    .required("lastName is required")

    
   
  })}
  onSubmit={(values,{setSubmitting,resetForm})=>{
     const newuser={
       firstname:values.firstname,
       lastname:values.lastname,
       email:values.email,
       password:values.password

     }
     
   dispatch(authActions.registerUser(newuser,setSubmitting,props.history))
  }}
  handleChange={(e)=>{
    console.log(e);
    console.log("ggs");
  }}
  >
    
    {({      values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            })=>{
            handleChange=e=>{
              console.log(e);
            }
              return(
   <Form > 
        
           <div className="input">
             <CustomTextForm label="FirstName" name="firstname"  placeholder="First Name" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
           </div>
              <div className="input">
             <CustomTextForm label="LastName" name="lastname"  placeholder="Last Name" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
           </div>
            <div className="input">
             <CustomTextForm label="Email"  name="email" type="email"  placeholder="Email"   style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
           </div>
            <div className="input">
             <CustomTextForm label="Password"  name="password"type="password" placeholder="Password" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
           </div>
            <div className="input">
             <CustomTextForm label="PasswordAgain" name="passwordAgain" type="Password" placeholder="please type again password" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
           </div>
            <div className="error"  style={{color:"red "}} >{error}</div>
            <div className="submit">
             <input type="submit" disabled={isSubmitting} value={isSubmitting?"Loading ..":"Register"}/>
           </div>
           <div className="login">
           <span className="question" >Have account?</span>
           <span className="link" ><Link to="/SignIn" style={DarkmodeStatus?{color:"#249dcb"}:{}}>Login</Link></span>
         </div>
        
         </Form>
              )}}
         </Formik>
      </div>
    </div>
  );
};

export default Register;