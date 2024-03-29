import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { totalActions } from '../../app/store/ducks/totalReducer'
import DefaultLayout from '../../app/layout/Defaultlayout'
import { BsTrash } from "react-icons/bs"
import { Link } from "react-router-dom"
import { orderActions } from '../../app/store/ducks/orderReducer'
import { getStorage } from '../../_metronic'
const History = () => {
    const dispatch = useDispatch()
    // const user = useSelector(state => state.authReducer.user)
    const orders = useSelector(state => state.orderReducer.orders)
    const checkout = useSelector(state => state.orderReducer.checkout)
    const userId = getStorage("userId");
    const [pageCount, setpageCount] = useState(100)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(12)
    const handleChangepage = (e) => {
        setPage(e.selected)
        console.log(page);
        dispatch(totalActions.loadingListHistoryofUser(limit, page))
    }
    useEffect(() => {
        // dispatch(authActions.loadingCart())
        dispatch(orderActions.getAllOrdersUser(page, userId))

    }, [checkout])
    const handleDelete = (id) => {
        console.log("id", id);
        dispatch(totalActions.deleteOrder(id))
        dispatch(totalActions.loadingListHistoryofUser(limit, page))
    }
    return (
        <DefaultLayout>
            <div id="history" className="history" style={{ paddingTop: "120px" }}>
                <div className="history--wrapper">
                    <div className="history--wrapper--main">
                        <div className="history--wrapper--main--box">
                            <h2>History</h2>
                            <table >
                                <thead>
                                    <tr className="item__attribute">
                                        <th className="item__attribute--checkbox">
                                            <input type="checkbox" />
                                        </th>
                                        {/* <div className="item__attribute--link"> */}

                                        <th className='item__attribute--id navigator--id'>id</th>
                                        <th className="item__attribute--name navigator--name">totalcost</th>
                                        <th className="item__attribute--desc navigator--desc">phone</th>
                                        <th className="item__attribute--quantity navigator--quantity">Address</th>
                                        <th className="item__attribute--price navigator--price">quantity</th>
                                        <th className="item__attribute--rating navigator--rating">Rating</th>
                                        <th className="item__attribute--edit"> DELETE</th>

                                    </tr>

                                </thead>
                                <tbody>

                                    {orders &&
                                        orders.map(item => (
                                            <tr key={item._id}>
                                                <th >
                                                    <input type="checkbox" />
                                                </th>
                                                <td>{item._id}</td>
                                                <td>{item.totalCost}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.address}</td>
                                                <td>{item.detail.length}</td>
                                                <td><Link className="btn btn--outline" to="/item/rating"> Rating</Link></td>
                                                <td><Link className="btn btn--outline" to={`/users/history`} onClick={() => handleDelete(item._id)}><BsTrash />DELETE </Link></td>
                                            </tr>
                                        ))}
                                </tbody>
                                {/* </div> */}
                                {/* <div className="item__attribute--delete">edit</div> */}

                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
export default History;