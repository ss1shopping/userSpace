import React ,{useState}from 'react'
import { Container,Col,Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { itemActions } from '../../../../app/store/ducks/itemReducer';
import NavbarCustom from '../navbar/navbar';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 const ItemDetail = (props) => {
     const  dispatch = useDispatch()
     const itemtoedit =useSelector(state=>state.itemReducer.itemtoEdit)
     const [name,setName] = useState(itemtoedit.name)
     const [ price,setPrice]=useState(itemtoedit.price)
     const [quantity,setQuantity]=useState(itemtoedit.quantity)
     const [description,setDesc]=useState(itemtoedit.description)
     const [id,setId]=useState(itemtoedit._id)
     console.log("id",id);
    
     const handleSubmit=()=>{
         dispatch(itemActions.updateItem(id,name,price,quantity,description,props.history))
          console.log();
     }
     const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 1
      };
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
                     <Slider {...config}>
                        {itemtoedit && itemtoedit.image.map((x, i) => {
                           const editimg=x.replace("public","http://localhost:4000")
                            return <div key={i} classname="img-card">
                            <img classname="img" src={editimg}/>
                            <div class="card-body">
                                <div classname="card-title">title</div>
                                <div classname="card-text">text</div>
                            </div>
                            </div>
                        })}
                        </Slider>
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
