import React ,{useState,useEffect,useRef}from 'react'
import { Container, Row,Col, Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { useSelector, useDispatch} from 'react-redux'
import ReactPaginate from 'react-paginate';
import {AiTwotoneEdit} from "react-icons/ai"
import { itemActions } from '../../../../app/store/ducks/itemReducer';
import NavbarCustom from '../navbar/navbar';
import FooterDashboard from "../../../footer/footerDashboard";
import {BsTrash} from "react-icons/bs";
 const Item = () => {
      const dispatch = useDispatch()
      const input =useRef(null)
     
   
      const [classname,setClassname]=useState("item__attribute")
      const [status, setStatus] = useState(false)
      const [checked,seetChecked]=useState(false)
      const [currentTarget,setCurrentTarget]=useState()
      const [itemChooseToDelete,setItemChooseToDelete]=useState()
      const [sortby,setSortBy]=useState("_id")
    const [orderby,setOrderBy]=useState("DESC")
      let item=useSelector(state=>state.itemReducer.item)
      const [stateCustomer, setCustomerState] = useState([]);
      
      useEffect(() => {
        console.log(item,stateCustomer);
       
        Object.keys(item).map(function(d,key){
          item[key]={"select":false,description:item[key].description,image:item[key].image,name:item[key].name,price:item[key].price,quantity:item[key].price,sold:item[key].sold,view:item[key].view,_id:item[key]._id}
        stateCustomer.push(item[key])
        })
        console.log(stateCustomer);
        
        return () => {
         
       
        }
      }, [item])
      
     const [pageCount, setpageCount] = useState(100)
     const [page, setPage] = useState(1)
     const [limit, setLimit] = useState(10)
     const handleChangepage=(page)=>{
      setPage(page.selected)
      console.log(page);
     }
     useEffect(() => {
        dispatch(itemActions.loadingitem(limit,page,sortby,orderby))
       
     },[])
    
     const handleChangetoEdit=(item)=>{
    dispatch(itemActions.itemChooseToEdit(item))
     }
    const handlechoose=(e,key,item)=>{
        console.log(e.currentTarget);
        // console.log(e.current);
        setStatus(!status)
        setItemChooseToDelete(item)
        setCurrentTarget(e.currentTarget)
        console.log(currentTarget);
          // e.target.checked?setClassname("item__attribute checked"):setClassname("item__attribute")
     }
     const handleDelete=()=>{
       
       //dispatch(itemActions.deleteItem(itemChooseToDelete._id))
       setStatus(!status)
       currentTarget.checked=false
       setTimeout(() => {
        dispatch(itemActions.loadingitem(limit,page,sortby,orderby))
        
       }, 2000);
      
      //  currentTarget.target.checked=false;
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
           
                return(
                   

                        <tr className={`${classname}`} >
        
                        <th className="item__attribute--checkbox">
                                <input type="checkbox" onChange={(e)=>handlechoose(e,key,item[index])}/>    
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
                    <div className="delete" style={status?{display:"block"}:{display:"none"}}
                    ><div>
                      <div><Button  onClick={()=>handleDelete()}><BsTrash/> DELETE </Button></div>
                      </div>
                      </div>
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
