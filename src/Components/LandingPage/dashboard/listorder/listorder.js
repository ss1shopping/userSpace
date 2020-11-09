import React ,{useState,useEffect,useRef}from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { useSelector, useDispatch} from 'react-redux'
import ReactPaginate from 'react-paginate';
import {AiTwotoneEdit} from "react-icons/ai"
import {BsTrash} from "react-icons/bs"
import { totalActions } from '../../../../app/store/ducks/totalReducer';
import NavbarCustom from '../navbar/navbar';
import FooterDashboard from "../../../footer/footerDashboard";
 const ListOrder = () => {  
      const dispatch = useDispatch()
      const input =useRef(null)
     
   
      const [classname,setClassname]=useState("item__attribute")
      let ListOrder=useSelector(state=>state.totalReducer.listOrder)
      const [stateCustomer, setCustomerState] = useState([]);
          
     
     const [pageCount, setpageCount] = useState(100)
     const [page, setPage] = useState(1)
     const [limit, setLimit] = useState(12)
     const handleChangepage=(e)=>{
      setPage(e.selected)
      console.log(e.selected);
     }
     useEffect(() => {
        dispatch(totalActions.loadingListOrder(limit,page))
     }, [page])
    
    //  const handleChangetoEdit=(item)=>{
    // dispatch(itemActions.itemChooseToEdit(item))
    //  }
    const handlechoose=(e)=>{
        // console.log(e.target.parentElement.parentElement.setAttribute("class",));
          e.target.checked?setClassname("item__attribute checked"):setClassname("item__attribute")
     }
     let loadingitem
     if(!ListOrder){
        
     }else{
  
           
        loadingitem= Object.keys(ListOrder).map(function(key, index) {
             console.log(index.select);
                return(
                   

                        <tr className={classname} >
        
                        <th className="item__attribute--checkbox">
                                <input type="checkbox" checked={index.select} onChange={e => {
            let value = e.target.checked;
          
            setCustomerState(
              stateCustomer.map(sd => {
                if (sd.id === ListOrder[index].id) {
                  sd.select = value;
                }
                return sd;
              })
            );
          }}/>    
                                </th>
                            {/* <Link to="/items" className="item__attribute--link"> */}
                    <th className='item__attribute--id'>{ListOrder[index]._id}</th>
                    <th className="item__attribute--name">{ListOrder[index].userId.lastname}</th>
                    <th className="item__attribute--desc">{ListOrder[index].phone}</th>
                    <th className="item__attribute--quantity">{ListOrder[index].totalCost}</th>
                    <th className="item__attribute--price">{ListOrder[index].address}</th>
                    <th className="item__attribute--sold">{ListOrder[index].itemId.length}</th>
                          
                            {/* </Link> */}
                            <th className="item__attribute--edit"><Link to={`/dashboard/item/${ListOrder[index]._id}`} ><BsTrash/>DELETE </Link></th>
                             
                       
                       
                       
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
                    <input type="checkbox" />    
                            </th>
                        {/* <div className="item__attribute--link"> */}
                        
                            <th className='item__attribute--id navigator--id'>id</th>
                        <th className="item__attribute--name navigator--name">Name</th>
                        <th className="item__attribute--desc navigator--desc">Phone</th>
                        <th className="item__attribute--quantity navigator--quantity">Total Cost</th>
                        <th className="item__attribute--price navigator--price">Address</th>
                        <th className="item__attribute--sold navigator--sold">Sold</th>
                        <th className="item__attribute--edit"> DELETE</th>
                             
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
export default ListOrder;