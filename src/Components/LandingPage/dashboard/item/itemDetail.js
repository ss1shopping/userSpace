import React ,{useState}from 'react'
import { Container,Col,Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { itemActions } from '../../../../app/store/ducks/itemReducer';
import NavbarCustom from '../navbar/navbar';

 const ItemDetail = (props) => {
     const  dispatch = useDispatch()
     const itemtoedit =useSelector(state=>state.itemReducer.itemtoEdit)
     const [name,setName] = useState()
     const [ price,setPrice]=useState()
     const [quantity,setQuantity]=useState()
     const [description,setDesc]=useState()
     const [id,setId]=useState(itemtoedit._id)
     console.log("id",id);
     const handleSubmit=()=>{
         dispatch(itemActions.updateItem(id,name,price,quantity,description,props.history))
         
     }
    return (
        <div className="itemdetail">
            <NavbarCustom></NavbarCustom>
            <div className="content">
             <Container>
                 <Row>
                     <Col lg={12}>
                         <div className="itemdetail__box">
                            <div className="itemdetail__box--label">
                                <h2>Edit item</h2>
                            </div>
                     <div className="itemdetail__box--name">
                         <input className="items__box--input" onChange={(e)=>setName(e.target.value)} type="text" defaultValue={itemtoedit.name} placeholder="name"/>
                     </div >
                     <div className="itemdetail__box--price">
                     <input className="items__box--input" onChange={(e)=>setPrice(e.target.value)} type="text" defaultValue={itemtoedit.price} placeholder="price"/>
                     </div>
                     <div className="itemdetail__box--quantity">
                     <input className="items__box--input"  type="text" onChange={(e)=>setQuantity(e.target.value)} defaultValue={itemtoedit.quantity} placeholder="quantity"/>
                     </div> 
                     <div className="itemdetail__box--description">
                         <textarea className="items__box--input" onChange={(e)=>setDesc(e.target.value)} defaultValue={itemtoedit.description}></textarea>
                     </div>
                     <div className="itemdetail__box--btn">
                           <Button onClick={()=>handleSubmit()}> Save</Button>
                     </div>
                         </div>
                     </Col>

                     
                 </Row>
             </Container>
            </div>
        </div>
    )
}
export default ItemDetail;
