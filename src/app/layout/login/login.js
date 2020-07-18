
import React ,{useState}from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@material-ui/core';
import { useFormik } from "formik";
import { FormattedMessage, injectIntl } from "react-intl";
import { TextField } from "@material-ui/core";
import {Link} from "react-router-dom"
const Login = (props) => {
  const dispatch=useDispatch()
  
const initialValues={
      email:"",
      password:""

    }
    const onSubmit=values=>{
      console.log(values);
      
    }

    const validate=values=>{
      let errors={}
      if(!values.email){
        errors.email="require"
      }else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ){
                errors.email="invalid email format"
              }
      if(!values.password){
        errors.password="required"
      }
      return errors
    }
  const formik =useFormik({
    initialValues,
    onSubmit,
    validate
  })

  console.log(formik.errors);
  
  return (
  <>
  
 
                <form
               onSubmit={formik.handleSubmit}
                >
                  
                  <div className="form-group">
                    <TextField
                      type="email"
                      label="Email"
                      margin="normal"
                      className="kt-width-full"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                     {formik.errors.email?<div>{formik.errors.email}</div>:<div></div>}
                  </div>

                  <div className="form-group">
                    <TextField
                      type="password"
                      margin="normal"
                      label="Password"
                      className="kt-width-full"
                      name="password"
                     onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {formik.errors.password?<div>{formik.errors.password}</div>:<div></div>}
                  </div>

                  <div className="kt-login__actions">
                    <Link
                      to="/auth/forgot-password"
                      className="kt-link kt-login__link-forgot"
                    >
                    
                    </Link>

                    <button
                      id="kt_login_signin_submit"
                      type="submit"
                   
                     
                    >
                      Sign In
                  </button>
                  </div>
                </form>
             
         
  </>
  );
};

export default Login;