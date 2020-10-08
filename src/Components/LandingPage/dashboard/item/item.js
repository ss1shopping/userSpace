import React ,{useState}from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { useSelector, useDispatch} from 'react-redux'
import ReactPaginate from 'react-paginate';

import { itemActions } from '../../../../app/store/ducks/itemReducer';
import NavbarCustom from '../navbar/navbar';

 const Item = () => {
      const dispatch = useDispatch()
     const [pageCount, setpageCount] = useState(10)
     const [offset, setOffset] = useState(0)
     const [limit, setLimit] = useState(10)
     const handleChangepage=()=>{
         console.log(offset,limit);
       dispatch(itemActions.loadingitem(1,1))
     }
    return (
        <div className="item">
            <NavbarCustom></NavbarCustom>
            <div className="content">

            <Container>
                <Row>
                    <Col>
                    <div className="item__attribute">
                    <div className="item__attribute--checkbox">
                            checkbox    
                            </div>
                        <div className="item__attribute--link">
                        
                            <div className='item__attribute--id'>id</div>
                        <div className="item__attribute--name">name</div>
                        <div className="item__attribute--desc">desc</div>
                        <div className="item__attribute--quantity">quantity</div>
                        <div className="item__attribute--price">price</div>
                        <div className="item__attribute--sold">sold</div>
                        </div>
                        <div className="item__attribute--delete">detele</div>

                    </div>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    <div className="item__attribute" >
                    <div className="item__attribute--checkbox">
                            <input type="checkbox"/>    
                            </div>
                        <Link to="/items" className="item__attribute--link">
                          
                            <div className='item__attribute--id'>1</div>
                        <div className="item__attribute--name">adidas</div>
                        <div className="item__attribute--desc">it is aswsome daugsduagdafduadgsdgasdgasdgaskdgaskjdguasldgak</div>
                        <div className="item__attribute--quantity">12</div>
                        <div className="item__attribute--price">$400</div>
                        <div className="item__attribute--sold">4</div>
                      
                        </Link>
                        <div className="item__attribute--delete">DE</div>
                         
                    </div>
                   
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    <div className="item__attribute" >  
                    <div className="item__attribute--checkbox">
                            <input type="checkbox"/>    
                            </div>
                        <Link to="/items" className="item__attribute--link">
                           
                            <div className='item__attribute--id'>1</div>
                        <div className="item__attribute--name">adidas</div>
                        <div className="item__attribute--desc">it is aswsome daugsduagdafduadgsdgasdgasdgaskdgaskjdguasldgak</div>
                        <div className="item__attribute--quantity">12</div>
                        <div className="item__attribute--price">$400</div>
                        <div className="item__attribute--sold">4</div>
                      
                        </Link>
                        <div className="item__attribute--delete">DE</div>
                         
                    </div>
                   
                    </Col>
                </Row>
                <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handleChangepage}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
            </Container>
            </div>
        </div>
    )
}
export default Item;
