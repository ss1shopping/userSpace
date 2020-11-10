import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {Formik,useField, Form} from "formik"
import * as Yup from "yup"
import { authActions } from '../../app/store/ducks/authReducer';
import {  makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import LockIcon from '@material-ui/icons/Lock';
const useStyles = makeStyles(theme => ({
    main: {
      marginTop:'100px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        //background: 'url(https://source.unsplash.com/random/1600x900)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    card: {
        width: '500px',
        marginTop: '6em',
    },
    avatar: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        backgroundColor: theme.palette.secondary.main,
    },
    hint: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.grey[500],
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',

    },
    actions: {
        padding: '0 1em 1em 1em',
       
    },
}));
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


const Login = (props) => {
  const dispatch=useDispatch()
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const error =useSelector(state=>state.authReducer.error)
  const DarkmodeStatus=useSelector(state=>state.layoutReducer.DarkmodeStatus)

  return (
    //id="login"
    <div  style={DarkmodeStatus?{backgroundColor:"#18191a"}:{backgroundColor:"#f0f2f5" ,borderTop:"1px solid #e6e8ea"}}>
     
      <div style={DarkmodeStatus?{backgroundColor:"#242526"}:{backgroundColor:"white"}}>
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
            })=>(
   <Form noValidate={true}
                  autoComplete="off"
                  className="kt-form"
                  onSubmit={handleSubmit}>
                     <div className={classes.main}>
                    <Card className={classes.card}>
                        <div className={classes.avatar}>
                            <Avatar className={classes.icon}>
                                <LockIcon />
                            </Avatar>
                        </div>
                        <div className={classes.hint}>
                        </div>
                        <div className={classes.form}>
                            <div className={classes.input}>
                            
                                <CustomTextForm autoFocus name="email" label="Email" placeholder="Email" defaultValue="tien"></CustomTextForm>
                            </div>
                            <div className={classes.input}>
                            <CustomTextForm  type="password" name="password" label="password" placeholder="Password"></CustomTextForm>
                            </div>
                        </div> 
                        <div className="error" >{error}</div>
                        <CardActions className={classes.actions}>
                            <button
                                className="btn" 
                              //   variant="contained"
                              //   type="submit"
                              //  color="primary"
                              //   disabled={loading}
                              //   fullWidth
                            >
                                {loading && (
                                    <CircularProgress
                                        size={25}
                                        thickness={2}
                                    />
                                )}
                              {isSubmitting?"Loading...":"Sign in"}
                            </button>
                        </CardActions>
                        <div className="register" style={{padding:"0 1em 1em 1em"}}>
           <span className="question">New to PICASSO?</span>
           <span className="link"><Link to="/users/register" style={DarkmodeStatus?{color:"#249dcb"}:{}}>Create an account</Link></span>
         </div>
         <div className="forgot" style={{padding:"0 1em 1em 1em"}}>
           <span><Link to="/users/forgotpassword" style={DarkmodeStatus?{color:"#249dcb"}:{}}>Forgot password ?</Link></span>
         </div>
                    </Card>
                    
                </div>
     
         
       </Form>
 )}
   </Formik>
       
      </div>
    </div>
  );
};

export default Login;