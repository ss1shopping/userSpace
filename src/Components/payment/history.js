import React from 'react'
import  {useDistch} from "react-redux"  
import { totalActions } from '../../app/store/ducks/totalReducer'
import ReactPaginate from 'react-paginate';
function HistoryPage(props) {
const dispatch = useDispatch()
const user = useSelector(state => state.authReducer.user)
const history = useSelector(state => state.totalReducer.listHistoryOfUser)
const [page, setPage] = useState(1)
const [limit, setLimit] = useState(12)
const handleChangepage=(e)=>{
 setPage(e.selected)
 console.log(e.selected);
}
useEffect(() => {
dispatch(totalActions.loadingListHistoryofUser(limit,page))
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
        </div>
    )
}

export default HistoryPage