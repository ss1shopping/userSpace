import React,{useEffect,useState} from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import anh from "../../app/scss/1.jpg"
import {useDispatch,useSelector} from "react-redux"
import ImgSlider from "./imgSlider"
import { itemActions } from '../../app/store/ducks/itemReducer'
import ReactPaginate from 'react-paginate';
import { authActions } from '../../app/store/ducks/authReducer'
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
    const [limit, setLimit] = useState(10)
    const handleChangepage=()=>{
     setPage(page+1)
     
    }
    const item=useSelector(state=>state.itemReducer.item)
    useEffect(() => {
      dispatch(itemActions.loadingitem(limit,page))
      dispatch(authActions.loadingCart())
    }, [])
    let showItem
    if(!item){
    }
    else{
        showItem= Object.keys(item).map((index,key)=>{
            
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
                                `${item[index].price}$`
                    </div>
                        </div>
                    </div>

                </Link>
            </Col>
            )
        })
    }
    return (
        <section className="box">
            <Container>
                <Row>
                    <Col>
                    
                <div className="menu">    
                            <div className="text">SORT BY</div>     
                            <select name="sortBy" id="sortBy">
                                <option value="PRODUCTNAME">PRODUCT NAME</option>
                                <option value="HIGHTESTPRICE">HIGHEST PRICE</option>
                                <option value="LOWESTPRICE">LOWEST PRICE</option>
                            </select>
                            <div className="text">SHOW ME</div>
                            <select name="showMe" id="showMe">
                                <option value="ALLPRODUCT">ALL PRODUCT</option>
                                <option value="TENNIS">TENNIS</option>
                                <option value="RUNNING">RUNNING</option>
                                <option value="GYM">GYM</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {showItem}
                    <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handleChangepage}
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