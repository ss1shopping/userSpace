import React ,{useEffect}from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import ImageProduct from './imgProduct'
import InforProduct from "./innforProduct"
import {useSelector,useDispatch} from "react-redux"
import { itemActions } from '../../../app/store/ducks/itemReducer'

//import ImageGarally from "react-image-gallery";
 const Itemdetail = (props) => {
     const  dispatch = useDispatch()
    const itemtoedit =useSelector(state=>state.itemReducer.itemtoEdit)
    useEffect(() => {
        dispatch(itemActions.updateView(itemtoedit._id))
    }, [])
    return (
        <div className="item__detail">
           <Container>
               <Row>
                   <Col>
                    <div className="item__detail__box">
                        <div className="item__detail__box__calosel">
                            {/* <ImageGarally item={Image}></ImageGarally> */}
                           <ImageProduct></ImageProduct>
                        </div>
                        <div className="item__detail__box__infor">
                                <InforProduct images={itemtoedit.image} history={props.history}></InforProduct>
                        </div>
                    </div>
                   </Col>
               </Row>
               </Container> 
        </div>
    )
}
export default Itemdetail