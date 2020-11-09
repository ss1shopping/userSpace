import React from 'react'
import  {useDistch} from "react-redux"  
import { totalActions } from '../../app/store/ducks/totalReducer'
function HistoryPage(props) {
const dispatch = useDispatch()
const user = useSelector(state => state.authReducer.user)
const history = useSelector(state => state.totalReducer.listHistoryOfUser)
useEffect(() => {
dispatch(totalActions.loadingListHistoryofUser(user._id))
}, [])
    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>History</h1>
            </div>
            <br />

            <table>
                <thead>
                    <tr>
                        <th>Payment Id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>

                <tbody>

                    {user && history &&
                        history.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.dateOfPurchase}</td>
                            </tr>
                        ))}


                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage