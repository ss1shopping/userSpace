import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { authActions } from '../../app/store/ducks/authReducer'

import { Formik, useField, Form } from "formik"
import * as Yup from "yup";
const CustomTextForm=({label,...props})=>{
  const [field,meta]=useField(props)
  const dispatch=useDispatch()
  const handlefocus=()=>{
  dispatch(authActions.deleteError())
  }
  return(
    <>
   
    <input  {...field} {...props} onFocus={handlefocus} style={{width:"100%"}}/>
    {meta.touched && meta.error ?(
      <div className="error" >{meta.error}</div>
    ):null}
    </>
  )
}
 const ChangePassword = (props) => {
     const dispatch = useDispatch()
     const [password, setPassword] = useState()
     const [PasswordAgain, setPasswordAgain] = useState()
    const token=props.match.params.token
    
    return (
        <div className="changePassword" >
           <div className="signup">
 
  <div className="signup-container">
   
    <h2 className="signup-heading">Reset Password</h2>
    
    <Formik initialValues={{
            password: "",
            passwordAgain:"",
           

          }}
            validationSchema={Yup.object({
              password:Yup.string()
              .min(8, 'Password is too short ,should be 8 chars minimum.')
             .required("Required"),
             passwordAgain:Yup.string()
             .oneOf([Yup.ref("password")], "Password does not match")
             .required("you must be repeat the password"),

            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              dispatch(authActions.changeNewpassword(values.password,values.passwordAgain,token,props.history)) 

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
            }) => (
               
                  
                    <Form noValidate={true}
                      autoComplete="off"
                      className="signup-form"
                      onSubmit={handleSubmit}>

<div className="form-group">
        <label for="password" className="form-label">NewPassword</label>
        <CustomTextForm type="password" id="password" className="form-input" placeholder="New password" required name="password" />
      </div>
      <div className="form-group">
        <label for="passwordAgain" className="form-label">Confirm Password</label>
        <CustomTextForm type="password" id="passwordAgain" className="form-input" placeholder="Enter password again" required name="passwordAgain" />
      </div>
            <button type="submit"  className="btn btn--gradient">{isSubmitting?"...Loading":"confirm"}</button>
                    </Form>
                

            
                )}
          </Formik>
      
    
  </div>
</div> 
        </div>
    )
}
export default ChangePassword;
