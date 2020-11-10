import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';
import {connect,useSelector,useDispatch} from 'react-redux';
import {Link,Redirect} from "react-router-dom";
import { itemActions } from '../../../app/store/ducks/itemReducer';
import { getStorage } from '../../../_metronic/utils/utils';
import { authActions } from '../../../app/store/ducks/authReducer'
function ProductInfo(props) {
    const itemtoedit =useSelector(state=>state.itemReducer.itemtoEdit)
    const accessToken=getStorage("token")
    const messageAddtoCart=useSelector(state=>state.itemReducer.messageAddtocart)
const dispatch=useDispatch()
    const [Product, setProduct] = useState({})

    // useEffect(() => {

    //     setProduct(detailProduct)

    // }, [props.detail])

    const addToCarthandler = () => {
        console.log(props.history);
        if( accessToken ==null ){
            alert("please login to add to cart")
            props.history.push("/users/login")
            // return(
            //     <div>
            //         login to add to Cart
            //         <Link to ="/users/login">go to Login</Link>
            //     </div>
            // )
        }else{

            dispatch(itemActions.addtocart(itemtoedit._id))
            setTimeout(() => {
                dispatch(authActions.loadingCart())
                alert("add successful")
            },1000);
            
               
               
          
        }
    }


    return (
        <div className="itemdetail__infor--description">
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price"> {itemtoedit.price}</Descriptions.Item>
                 <Descriptions.Item label="Sold">{itemtoedit.sold}</Descriptions.Item>
                 <Descriptions.Item label="View">{itemtoedit.view}</Descriptions.Item>
                <Descriptions.Item label="Quantity"> {itemtoedit.quantity}</Descriptions.Item>
                <Descriptions.Item label="Description"> {itemtoedit.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger" className="btn"
                    onClick={()=>addToCarthandler()}
                >
                    Add to Cart
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
