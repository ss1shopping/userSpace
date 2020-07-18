import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import {Formik,useField, Form} from "formik"
import * as Yup from "yup"
const CustomTextForm=({label,...props})=>{
  const [field,meta]=useField(props)
  return(
    <>
   
    <input  {...field} {...props}/>
    {meta.touched && meta.error ?(
      <div className="error" style={{color:"red "}} >{meta.error}</div>
    ):null}
    </>
  )
}
const Register = () => {

   const DarkmodeStatus=useSelector(state=>state.layoutReducer.DarkmodeStatus)
  return (
    <div id="register" style={DarkmodeStatus?{backgroundColor:"#18191a"}:{backgroundColor:"#f0f2f5" ,borderTop:"1px solid #e6e8ea"}}>
      <div className="registerBox" style={DarkmodeStatus?{backgroundColor:"#242526"}:{backgroundColor:"white"}}>
          <Formik initialValues={{
     password:"",
     email:"",
     fullname:"",
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
    fullname:Yup.string()
    .required("fullname is required")

    
   
  })}
  onSubmit={(values,{setSubmitting,resetForm})=>{
    setTimeout(() => {
      alert(JSON.stringify(values,null,2))
      resetForm()
      setSubmitting(false)
    }, 3000);
  }}
  >
    {props=>(
   <Form>
        
           <div className="input">
             <CustomTextForm label="FullName" name="fullname" type="FullName" placeholder="FullName" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
           </div>
            <div className="input">
             <CustomTextForm label="Email"  name="email" type="email" placeholder="Email" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
           </div>
            <div className="input">
             <CustomTextForm label="Password"  name="password"type="password" placeholder="Password" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
           </div>
            <div className="input">
             <CustomTextForm label="PasswordAgain" name="passwordAgain" type="Password" placeholder="please type again password" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
           </div>
            <div className="submit">
             <input type="submit" value={props.isSubmitting?"Loading ..":"Register"}/>
           </div>
           <div className="login">
           <span className="question" >Have account?</span>
           <span className="link" ><Link to="/SignIn" style={DarkmodeStatus?{color:"#249dcb"}:{}}>Login</Link></span>
         </div>
        
         </Form>
    )}
         </Formik>
      </div>
    </div>
  );
};

export default Register;