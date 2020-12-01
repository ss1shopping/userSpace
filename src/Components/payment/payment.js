import React,{useEffect,useState} from 'react'
import { Container, Row, Col ,Alert,Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
import '../../app/scss/payment/payment.scss'
import anh1 from "../../app/scss/avatar.jpg"
import anh2 from "../../app/scss/1.jpg"
import anh3 from "../../app/scss/2.jpeg"
import anh4 from "../../app/scss/3.jpg"
import anh5 from "../../app/scss/avatar.jpg"
import anh6 from "../../app/scss/1.jpg"
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { useDispatch ,useSelector} from 'react-redux'
import { authActions } from '../../app/store/ducks/authReducer'
import ImageProduct from './imgProduct'
import {itemActions} from "../../app/store/ducks/itemReducer"
const Payment = () => {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const [productDelele,setproductDelete]=useState()
    const itemIncart = useSelector(state => state.itemReducer.itemInCart)
    const [item, setItem] = useState([])
    let totalPrice=0
  
 useEffect(() => {
    dispatch(authActions.loadingCart())

 }, [])

const handleDelte=(infor)=>{
setShow(!show)
setproductDelete(infor)
} 
const confirmDelete=(id)=>{
setShow(!show)
dispatch(itemActions.removetocart(id))
// dispatch(authActions.loadingCart())
}

const handleCheckOut=()=>{

}
//  let showitem
 
//  if(!itemIncart){
//      return (
//          <div>
//              not found
//          </div>
//      )
//  }else{

//       showitem= Object.keys(itemIncart).map((index,key)=>{
//           console.log(itemIncart[index].price);
//           setTotalPrice(totalPrice+itemIncart[index].price)
//       })
//     }
    return (
        <div style={{ marginTop: "117px" }}>
            <div className="payment">
                <Container fluid>
                    <Row  >
                      {itemIncart && Object.keys(itemIncart).map((index,key)=>{
                        
                      totalPrice=totalPrice + itemIncart[index].price ;
                    return(
                     <Col lg={4} md={6} sm={12} key={key}>
                     <div className="payment__item" >
                         <div className="delete"><button className="delbut" onClick={(e)=>handleDelte(itemIncart[index])} >&#9747;</button></div>
                         <div className="payment__item--image">
                             {/* <img className="image" src={anh2} /> */}
                             <ImageProduct images={itemIncart[index].image}></ImageProduct>
                         </div>
                         <div className="payment__item--infor">
                             <div className="payment__item--name">
                                {itemIncart[index].name}
                         </div>
                         
                             <div className="payment__item--price">{itemIncart[index].price}$</div>
                             {/* <div className="payment__item--quantity">
                                 <div className="payment__item--button">
                                     <div><button className="minus"><AiOutlineMinus /></button></div>
                                     <div className="quantity">1</div>
                                     <div><button className="plus"><AiOutlinePlus /></button></div>
                                 </div>
                             </div> */}
                             {/* <div className="payment__item--Sum">SumItem1</div> */}
             
                         </div>
                     </div>
                 </Col>
                    )
                })}

                    </Row>

                    <Row padding>
                        {/* <div className="final"> */}
                        <Col md={8} lg={4} sm={8} xs={8} className="button1">
                           
                            <Link to="/shopping" className="opt1">Back To Store</Link>

                            
                        </Col>
                        <Col md={8} lg={4} sm={8} xs={8} className="totalamount">
                            <div className="tamount">
                                <span>Total: </span>
                             <span className="totalnumber">{totalPrice}$</span>
                            </div>
                        </Col>
                        <Col md={8} lg={4} sm={8} xs={8} className="button2">
                           
                            <Link to="/users/cart/check-out" className="opt2" onClick={()=>handleCheckOut()}>Check Out</Link>

                        
                        </Col>
                        {/* </div> */}
                    </Row>
                    <Row>
                        <Col>
                        <div className="alert__delete--product">
                            <div>
                            <>
                        <Alert show={show} variant="danger">
                            <Alert.Heading>DELETE Product in Cart</Alert.Heading>
                            <p>
                            Do you want delete {productDelele?productDelele.name:"product"} 
                            </p>
                            <hr />
                            <div className="d-flex justify-content-end">
                            <Button onClick={() => confirmDelete(productDelele._id) } variant="outline-primay" style={{marginRight:"5px"}}>
                                Delete
                            </Button>
                            <Button onClick={() => setShow(!show) } variant="outline-primay">
                                Cancel
                            </Button>
                            </div>
                        </Alert>

                        
                              </>

                            </div>
                        </div>
                        </Col>
                    </Row>
                
                </Container>
            </div>


        </div>
    )
}
export default Payment