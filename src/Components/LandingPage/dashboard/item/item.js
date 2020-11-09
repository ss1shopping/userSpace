import React ,{useState,useEffect,useRef}from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { useSelector, useDispatch} from 'react-redux'
import ReactPaginate from 'react-paginate';
import {AiTwotoneEdit} from "react-icons/ai"
import { itemActions } from '../../../../app/store/ducks/itemReducer';
import NavbarCustom from '../navbar/navbar';
import FooterDashboard from "../../../footer/footerDashboard";
 const Item = () => {
      const dispatch = useDispatch()
      const input =useRef(null)
     
   
      const [classname,setClassname]=useState("item__attribute")
      let item=useSelector(state=>state.itemReducer.item)
      const [stateCustomer, setCustomerState] = useState(item);
          
      console.log(stateCustomer);
     const [pageCount, setpageCount] = useState(100)
     const [page, setPage] = useState(1)
     const [limit, setLimit] = useState(10)
     const handleChangepage=(page)=>{
      setPage(page.selected)
      console.log(page);
     }
     useEffect(() => {
        dispatch(itemActions.loadingitem(limit,page))
        setCustomerState(

          stateCustomer.map((d)=>{
            return{...d,select:false}
          })
        )
     }, [page])
    
     const handleChangetoEdit=(item)=>{
    dispatch(itemActions.itemChooseToEdit(item))
     }
    const handlechoose=(e)=>{
        // console.log(e.target.parentElement.parentElement.setAttribute("class",));
          e.target.checked?setClassname("item__attribute checked"):setClassname("item__attribute")
     }
     let loadingitem
     if(!item){
         return(
             <div>
                 not found
             </div>
         )
     }else{
  
           
        loadingitem= Object.keys(item).map(function(key, index) {
             console.log(index.select);
                return(
                   

                        <tr className={classname} >
        
                        <th className="item__attribute--checkbox">
                                <input type="checkbox" checked={index.select} onChange={e => {
            let value = e.target.checked;
          
            setCustomerState(
              stateCustomer.map(sd => {
                if (sd.id === item[index].id) {
                  sd.select = value;
                }
                return sd;
              })
            );
          }}/>    
                                </th>
                            {/* <Link to="/items" className="item__attribute--link"> */}
                    <th className='item__attribute--id'>{item[index]._id}</th>
                    <th className="item__attribute--name">{item[index].name}</th>
                    <th className="item__attribute--desc">{item[index].description}</th>
                    <th className="item__attribute--quantity">{item[index].quantity}</th>
                    <th className="item__attribute--price">{item[index].price}$</th>
                    <th className="item__attribute--sold">{item[index].sold}</th>
                          
                            {/* </Link> */}
                            <th className="item__attribute--edit"><Link to={`/dashboard/item/${item[index]._id}`} onClick={(e)=>handleChangetoEdit(item[index])}><AiTwotoneEdit/>EDIT </Link></th>
                             
                       
                       
                       
                        </tr>
                    
                  
                )
         })
       
     }
    return (
        <div className="item">
            <NavbarCustom></NavbarCustom>
            <div className="content">

            <Container fluid>
                <Row>
                    <Col>
                    <table >
                        <thead>
                            <tr className="item__attribute">
                    <th className="item__attribute--checkbox">
                    <input type="checkbox"  onChange={e => {
                  let value = e.target.checked;
                  setCustomerState(
                    stateCustomer.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}/>    
                            </th>
                        {/* <div className="item__attribute--link"> */}
                        
                            <th className='item__attribute--id navigator--id'>id</th>
                        <th className="item__attribute--name navigator--name">Name</th>
                        <th className="item__attribute--desc navigator--desc">Desc</th>
                        <th className="item__attribute--quantity navigator--quantity">Quantity</th>
                        <th className="item__attribute--price navigator--price">Price</th>
                        <th className="item__attribute--sold navigator--sold">Sold</th>
                        <th className="item__attribute--edit"> EDIT</th>
                             
                            </tr>

                        </thead>
                        <tbody>

                        {loadingitem}
                        </tbody>
                        {/* </div> */}
                        {/* <div className="item__attribute--delete">edit</div> */}

                    </table>
                    
                    </Col>
                </Row>
                
               
                <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={(page)=>handleChangepage(page)}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
            </Container>
            </div>
            <FooterDashboard></FooterDashboard>
        </div>
    )
}
export default Item;
