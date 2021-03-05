import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, useField, Form } from "formik"
import * as Yup from "yup"
import { authActions } from '../../app/store/ducks/authReducer';
const CustomTextForm = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const dispatch = useDispatch()
  const handlefocus = () => {
    dispatch(authActions.deleteError())
  }
  return (
    <>

      <input  {...field} {...props} onFocus={handlefocus} style={{ width: "100%" }} />
      {meta.touched && meta.error ? (
        <div className="error" >{meta.error}</div>
      ) : null}
    </>
  )
}


const Login = (props) => {

  const dispatch = useDispatch()
  // const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const error = useSelector(state => state.authReducer.error)
  // const DarkmodeStatus = useSelector(state => state.layoutReducer.DarkmodeStatus)

  return (
    // <DefaultLayout>
    <div className="login">

      <div className="login--wrapper" >
        <div className="login--header">
          <div className="login--logo"> PICASSO</div>
          <div className="login--title">Đăng nhập </div>
        </div>
        <div className="login--main">
          <div className="box1">
            <div className="box1--wrapper">
              <div className="box1--wrapper--title">Đăng nhập </div>
              <div>


                <Formik initialValues={{
                  email: "",
                  password: "",

                }}
                  validationSchema={Yup.object({
                    password: Yup.string()

                      .min(8, 'Password is too short ,should be 8 chars minimum.')

                      .required("Required"),
                    email: Yup.string()
                      .email("invalid email address")
                      .required("Required"),

                  })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {

                    dispatch(authActions.login(values.email, values.password, setSubmitting, props.history))
                    // setTimeout(() => {
                    //   dispatch(authActions.loadingCart())
                    // }, 1000);

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
                      className="kt-form"
                      onSubmit={handleSubmit}>
                      <div >
                        <div >

                          <div>
                            <div className="input" >

                              <CustomTextForm autoFocus name="email" label="Email" placeholder="Email" defaultValue="tien"></CustomTextForm>
                            </div>
                            <div className="input" >
                              <CustomTextForm type="password" name="password" label="password" placeholder="Password"></CustomTextForm>
                            </div>
                          </div>
                          <div className="error" >{error}</div>
                          <div >
                            <button
                              className="btn btn--primary"
                            //   variant="contained"
                            //   type="submit"
                            //  color="primary"
                            //   disabled={loading}
                            //   fullWidth
                            >
                              {loading && (
                                <div
                                  size={25}
                                  thickness={2}
                                ></div>
                              )}
                              {isSubmitting ? "Loading..." : "Sign in"}
                            </button>
                          </div>
                          <div className="register">
                            <span className="question">New to PICASSO?</span>
                            <span className="link"><Link to="/users/register" >Create an account</Link></span>
                          </div>
                          <div className="forgot" >
                            <span><Link to="/users/forgotpassword" >Forgot password ?</Link></span>
                          </div>
                        </div>

                      </div>


                    </Form>
                  )}
                </Formik>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </DefaultLayout>
  );
};

export default Login;