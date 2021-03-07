import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, useField, Form } from "formik"
import * as Yup from "yup"
import { authActions } from '../../app/store/ducks/authReducer';

// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import LockIcon from '@material-ui/icons/Lock';
// const useStyles = makeStyles(theme => ({
//   main: {
//     marginTop: '100px',
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     background: 'url(https://source.unsplash.com/random/1600x900)',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   },
//   card: {
//     width: '500px',
//     marginTop: '6em',
//   },
//   avatar: {
//     margin: '1em',
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   icon: {
//     backgroundColor: theme.palette.secondary.main,
//   },
//   hint: {
//     marginTop: '1em',
//     display: 'flex',
//     justifyContent: 'center',
//     color: theme.palette.grey[500],
//   },
//   form: {
//     padding: '0 1em 1em 1em',
//   },
//   input: {
//     marginTop: '1em',

//   },
//   actions: {
//     padding: '0 1em 1em 1em',

//   },
// }));
const CustomTextForm = ({ label, ...props }) => {
  const dispatch = useDispatch()
  const [field, meta] = useField(props)
  const handlefocus = () => {
    dispatch(authActions.deleteError())
  }
  return (
    <>

      <input  {...field} {...props} onFocus={handlefocus} style={{ width: "100%" }} />
      {meta.touched && meta.error ? (
        <div className="error" style={{ color: "red " }} >{meta.error}</div>
      ) : null}
    </>
  )
}
const Register = (props) => {
  const dispatch = useDispatch()
  // const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const DarkmodeStatus = useSelector(state => state.layoutReducer.DarkmodeStatus)
  const error = useSelector(state => state.authReducer.error)

  return (
    <div className="register">
      <div className="register--wrapper">
        <div className="register--header">
          <div className="register--logo"> PICASSO</div>
          <div className="register--title">Đăng kí </div>
        </div>

        <div className="register--main">
          <div className='box1'>
            <div className="box1--wrapper">
              <div className="box1--wrapper--title"></div>

              <Formik initialValues={{
                password: "",
                email: "",
                firstname: "",
                lastname: "",
                passwordAgain: ""

              }}
                validationSchema={Yup.object({
                  password: Yup.string()
                    .min(8, 'Password is too short ,should be 8 chars minimum.')
                    .required("Required"),
                  passwordAgain: Yup.string()
                    .oneOf([Yup.ref("password")], "Password does not match")
                    .required("you must be repeat the password"),
                  email: Yup.string()
                    .email("invalid email address")
                    .required("required"),
                  firstname: Yup.string()
                    .required("first name is required"),
                  lastname: Yup.string()
                    .required("last name is required")



                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  const newuser = {
                    firstname: values.firstname,
                    lastname: values.lastname,
                    email: values.email,
                    password: values.password

                  }

                  dispatch(authActions.registerUser(newuser, setSubmitting, props.history))
                }}

              >

                {({ values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => {

                  return (
                    <Form noValidate={true}
                      autoComplete="off"
                      className="kt-form"
                      onSubmit={handleSubmit}>
                      <div >
                        <div >


                          <div >
                            <div className="input" >

                              <CustomTextForm autoFocus name="firstname" label="FirstName" placeholder="FirstName"></CustomTextForm>
                            </div>
                            <div className="input"  >
                              <CustomTextForm name="lastname" label="LastName" placeholder="LastName"></CustomTextForm>
                            </div>
                            <div className="input" >
                              <CustomTextForm name="email" type="email" defaultValue="ttest" placeholder="Email"></CustomTextForm>
                            </div>
                            <div className="input" >
                              <CustomTextForm type="password" name="password" label="password" placeholder="Password"></CustomTextForm>
                            </div>
                            <div className="input" >
                              <CustomTextForm type="password" name="passwordAgain" label="password" placeholder="Type againt password"></CustomTextForm>
                            </div>
                          </div>
                          <div className="error" >{error}</div>
                          <div >
                            <button
                              className="btn btn--primary"
                              //   variant="contained"
                              type="submit"
                              disabled={isSubmitting}
                            //  color="primary"
                            //   disabled={loading}
                            //   fullWidth
                            >
                              {loading && (
                                <div
                                  size={25}
                                  thickness={2}
                                />
                              )}
                              {isSubmitting ? "Loading..." : "Register in"}
                            </button>
                          </div>

                          <div className="login">
                            <span className="question" >Have account?</span>
                            <span className="link" ><Link to="/users/login" style={DarkmodeStatus ? { color: "#249dcb" } : {}}>Login</Link></span>
                          </div>
                        </div>

                      </div>


                    </Form>
                    //  <Form > 

                    //          <div className="input">
                    //            <CustomTextForm label="FirstName" name="firstname"  placeholder="First Name" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
                    //          </div>
                    //             <div className="input">
                    //            <CustomTextForm label="LastName" name="lastname"  placeholder="Last Name" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
                    //          </div>
                    //           <div className="input">
                    //            <CustomTextForm label="Email"  name="email" type="email"  placeholder="Email"   style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
                    //          </div>
                    //           <div className="input">
                    //            <CustomTextForm label="Password"  name="password"type="password" placeholder="Password" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
                    //          </div>
                    //           <div className="input">
                    //            <CustomTextForm label="PasswordAgain" name="passwordAgain" type="Password" placeholder="please type again password" style={DarkmodeStatus?{background:"#3a3b3c" ,color:"#acafb4"}:{}}/>
                    //          </div>
                    //           <div className="error"  style={{color:"red "}} >{error}</div>
                    //           <div className="submit">
                    //            <input type="submit" disabled={isSubmitting} value={isSubmitting?"Loading ..":"Register"}/>
                    //          </div>
                    //          <div className="login">
                    //          <span className="question" >Have account?</span>
                    //          <span className="link" ><Link to="/SignIn" style={DarkmodeStatus?{color:"#249dcb"}:{}}>Login</Link></span>
                    //        </div>

                    //        </Form>
                  )
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;