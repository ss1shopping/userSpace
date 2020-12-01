import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { authActions } from '../../app/store/ducks/authReducer'
import { useDispatch } from "react-redux";
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
export const ForgotPassword = (props) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState()
  
  const handleForgotpasword = () => {
    console.log(email);
    dispatch(authActions.resetPassword(email, props.history))
  }
  return (
    <div className="forgotpassword" style={{ paddingTop: "120px" }}>
      <div className="signup">

        <div className="signup-container">

          <h2 className="signup-heading">Reset Password</h2>

          <Formik initialValues={{
            email: "",
           

          }}
            validationSchema={Yup.object({
            
              email: Yup.string()
                .email("invalid email address")
                .required("required"),

            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              dispatch(authActions.resetPassword(values.email, props.history))

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
                      <label for="name" className="form-label">Email</label>
                      <CustomTextForm type="text" id="name" className="form-input" placeholder="New password"  name="email"  />
                      </div>
                      <button type="submit"  className="btn btn--gradient">{isSubmitting?"Loading...":"Send Email"}</button>
                    </Form>
                

            
                )}
          </Formik>


        </div>
      </div>

    </div>
  )
}
