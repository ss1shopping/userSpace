import React,{useEffect,useState} from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import anh from "../../app/scss/1.jpg"
import {useDispatch,useSelector} from "react-redux"
import ImgSlider from "./imgSlider"
import { itemActions } from '../../app/store/ducks/itemReducer'
import ReactPaginate from 'react-paginate';
import { authActions } from '../../app/store/ducks/authReducer'
import InfiniteScroll from 'react-infinite-scroll-component';
// import anh4 from "../../app/scss/image/air_jordan.jpg"
// import anh5 from "../../app/scss/image/air_max.jpg"
// import anh6 from "..css/image/Converse.jpg"
// import anh7 from "../../app/scss/image/dior_jordan.jpg"
// import anh8 from "../../app/scss/image/nb.jpg"
// import anh9 from "../../app/scss/image/nike.jpg"/../app/s
const Shop_page = () => {
    
    const  dispatch = useDispatch()
    const [pageCount, setpageCount] = useState(10)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(2)
    const [sortby,setSortBy]=useState("_id")
    const [orderby,setOrderBy]=useState("ASC")
    const handleChangepage=(page)=>{
        setPage(page.selected)
     
    }
    const item=useSelector(state=>state.itemReducer.item)
    useEffect(() => {
        
      dispatch(itemActions.loadingitem(limit,page,sortby,orderby))
      dispatch(authActions.loadingCart())
    }, [limit,page,sortby,orderby])
    const handleFilter=(e)=>{
     if(e.target.value==="hightprice"){
     setSortBy("price")
     setOrderBy("DESC")
     }
     if(e.target.value==="lowprice"){
        setSortBy("price")
        setOrderBy("ASC")
        }
        if(e.target.value==="name"){
            setSortBy("name")
            setOrderBy("ASC")
        }
    }
   const infinitePage=()=>{
       setPage(page+1)
   }
    // let showItem
    // if(!item){
    // }
    // else{
    //     showItem= 
    // }
    return (
        <section className="box">
            <Container>
                <Row>
                    <Col>
                    
                <div className="menu">    
                            <div className="text">SORT BY</div>     
                            <select name="sortBy" id="sortBy" onChange={(e)=>handleFilter(e)}>
                                <option value="name">PRODUCT NAME</option>
                                <option value="hightprice">HIGHEST PRICE</option>
                                <option value="lowprice">LOWEST PRICE</option>
                            </select>
                            {/* <div className="text">SHOW ME</div>
                            <select name="showMe" id="showMe">
                                <option value="ALLPRODUCT">ALL PRODUCT</option>
                                <option value="TENNIS">TENNIS</option>
                                <option value="RUNNING">RUNNING</option>
                                <option value="GYM">GYM</option>
                            </select> */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <InfiniteScroll 
                    dataLength={item.length} //This is important field to render the next data
                    next={()=>infinitePage()}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}>

                    {item && Object.keys(item).map((index,key)=>{
            
            return(
                <Col md={6} lg={4} key={key}>
                <Link className="box__items" to={`/shop/item/${item[index].name}`} onClick={()=>dispatch(itemActions.itemChooseToEdit(item[index]))}>
                    <div className="box__item">
                    <ImgSlider images={item[index].image} className="slider"></ImgSlider>
                        {/* <img src={anh} alt="image" style={{ width: "100%", height: '295px' }} /> */}
                        {/* <p className= "product__name name">Dior x Air Jordan 1</p>
                    <p className= "product__price price">$299.99</p> */}
                        {/* <div className="img_name">{index.name}</div> */}
                        <div className="name_price">
                            <div className="product__name">

                            {item[index].name}
                    </div>
                            <div className="product__price">
                                {item[index].price}$
                    </div>
                        </div>
                    </div>

                </Link>
            </Col>
            )
        })}
                    </InfiniteScroll>
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
                </Row>
            </Container>
        </section>

    )
}
export default Shop_page;