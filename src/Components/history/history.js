import React,{useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  {useDispatch,useSelector} from "react-redux"  
import { authActions } from '../../app/store/ducks/authReducer'
import { totalActions } from '../../app/store/ducks/totalReducer'
import {BsTrash} from "react-icons/bs"
import {Link } from "react-router-dom"
const History = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)
const history = useSelector(state => state.totalReducer.listHistoryOfUser)
useEffect(() => {
    // dispatch(authActions.loadingCart())
dispatch(totalActions.loadingListHistoryofUser())

}, [])
    return (
        <div id="history" className="history" style={{paddingTop:"120px"}}>
            <Container>
                <Row>
                    <Col>
                    <table >
                        <thead>
                            <tr className="item__attribute">
                    <th className="item__attribute--checkbox">
                    <input type="checkbox"  />    
                            </th>
                        {/* <div className="item__attribute--link"> */}
                        
                            <th className='item__attribute--id navigator--id'>id</th>
                        <th className="item__attribute--name navigator--name">totalcost</th>
                        <th className="item__attribute--desc navigator--desc">phone</th>
                        <th className="item__attribute--quantity navigator--quantity">Address</th>
                        <th className="item__attribute--price navigator--price">quantity</th>
                        {/* <th className="item__attribute--sold navigator--sold">Sold</th> */}
                        <th className="item__attribute--edit"> DELETE</th>
                             
                            </tr>

                        </thead>
                        <tbody>

                        { history &&
                        history.map(item => (
                            <tr key={item._id}>
                                  <th >
                    <input type="checkbox"/>    
                            </th>
                                <td>{item._id}</td>
                                <td>{item.totalCost}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                        <td>{item.itemId.length}</td>
                                <td><Link to={`users/history`} ><BsTrash/>DELETE </Link></td>
                            </tr>
                        ))}
                        </tbody>
                        {/* </div> */}
                        {/* <div className="item__attribute--delete">edit</div> */}

                    </table>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default History;