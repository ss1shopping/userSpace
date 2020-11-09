import React ,{useState,useEffect}from 'react'
import { Container,Col,Row ,Alert,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {Formik,useField, Form} from "formik"
import * as Yup from "yup"
import { authActions } from '../../app/store/ducks/authReducer';
import {FaCcVisa,FaCcMastercard,FaCreditCard,FaUserTie,FaAddressCard,FaPhone} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import { itemActions } from '../../app/store/ducks/itemReducer';
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
 const Checkout = () => {
const dispatch=useDispatch()
const [show, setShow] = useState(false);
const user=useSelector(state=>state.authReducer.user)
const cart=useSelector(state=>state.itemReducer.cart)
useEffect(() => {
   dispatch(authActions.loadingCart())
}, [])
const [loading, setLoading] = useState(false);
const DarkmodeStatus=useSelector(state=>state.layoutReducer.DarkmodeStatus)
    return (
       <div style={{marginTop:"120px"}}>
           <Container>
               <Row>
                   <Col>
                   <Formik initialValues={{
     email:"",
     name:"",
     address:"",
     phone:"",

  
  }}
  validationSchema={Yup.object({
    name:Yup.string()
    .required("Required"),
    email:Yup.string()
    .email("invalid email address")
    .required("Required"),
    address:Yup.string()
    .required("Required"),
    phone:Yup.number()
    .required("Required")
  })}
  onSubmit={(values,{setSubmitting,resetForm})=>{
   setShow(!show)
   dispatch(itemActions.checkout(values.phone,values.address,cart._id))
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
                     <div >
                     <form>

<Row>
  <Col md={6}>
    <h3>Billing Address</h3>
    <label for="name"><FaUserTie/>Name</label>
    <CustomTextForm type="text" id="name" name="name" placeholder="John M. Doe"/>
    <label for="email"><MdEmail/> Email</label>
    <CustomTextForm type="text" id="email" name="email" placeholder="john@example.com"/>
    <label for="adr"><FaAddressCard/> Address</label>
    <CustomTextForm type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
    <label for="phone"><FaPhone/> Phone Number</label>
    <CustomTextForm type="text" id="phone" name="phone" placeholder=" 0327563245"/>

    {/* <div class="row">
      <div class="col-50">
        <label for="state">State</label>
        <input type="text" id="state" name="state" placeholder="NY"/>
      </div>
      <div class="col-50">
        <label for="zip">Zip</label>
        <input type="text" id="zip" name="zip" placeholder="10001"/>
      </div>
    </div> */}
  </Col>

  <Col md={6}>
    <h3>Payment</h3>
    <label for="fname">Accepted Cards</label>
    <div class="icon-container">
      <i class="fa fa-cc-visa" style={{color:"navy"}}><FaCcVisa/></i>
      <i class="fa fa-cc-amex" style={{color:"blue"}}><FaCreditCard/></i>
      <i class="fa fa-cc-mastercard" style={{color:"red"}}><FaCcMastercard/></i>
      <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
    </div>
    <label for="cname">Name on Card</label>
    <CustomTextForm type="text" id="cname" name="cardname" placeholder="John More Doe"/>
    <label for="ccnum">Credit card number</label>
    <CustomTextForm type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
    <label for="expmonth">Exp Month</label>
    <CustomTextForm type="text" id="expmonth" name="expmonth" placeholder="September"/>

    <Row>
      <Col md={6}> 
        <label for="expyear">Exp Year</label>
        <input type="text" id="expyear" name="expyear" placeholder="2020"/>
      </Col>
      <Col md={6}>
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" name="cvv" placeholder="352"/>
      </Col>
    </Row>
  </Col>

</Row>
<label>
          <input type="checkbox" defaultChecked="checked" name="sameadr"/> Shipping address same as billing
        </label>
<button type="submit" value="Confirm Billing" class="btn"  style={show?{display:"none"}:{}}>
                                
                              {isSubmitting?"Loading...":"Confirm Billing"}</button>
</form>

                </div>
     
         
       </Form>
 )}
   </Formik>
                   </Col>
               </Row>
               <Row>
                   <Col>
                   <div>

                   <Alert show={show} variant="success">
        <Alert.Heading>Succesfully</Alert.Heading>
        <p>
        Billing Successful product will sent you a cup of the day
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <a onClick={() => setShow(false)} variant="outline-success" href="/shop">
           Back to the Shop
          </a>
        </div>
      </Alert>
                   </div>
                   </Col>
               </Row>
           </Container>
       </div>
    )
}
export default Checkout;
