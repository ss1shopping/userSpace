import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { orderActions } from '../../../../app/store/ducks/orderReducer'
import { useDispatch, useSelector } from "react-redux"
import { layoutActions } from '../../../../app/store/ducks/layoutReducer'
export const Tab = () => {
  const dispatch = useDispatch()
  const numberorder = useSelector(state => state.layoutReducer.numberOrder)
  // const [number, setnumber] = useState(numberorder)

  const handleClick = (link, number) => {
    // setnumber(number)
    dispatch(layoutActions.changeNumberOrder(number))
    dispatch(orderActions.setlink(link))
    dispatch(orderActions.setIsCancelled(false))
  }
  const handleisCancelled = (status, number) => {
    // setnumber(number)
    dispatch(layoutActions.changeNumberOrder(number))
    dispatch(orderActions.setIsCancelled(status))
  }
  useEffect(() => {

  }, [numberorder])
  return (
    <div className="tab">
      <div className="tab--wrapper">

        <Link className={numberorder == 1 ? "tab--link active" : "tab--link"} name="all" number={1} onClick={(e) => handleClick("all", 1)}> <div>Tất cả </div></Link>
        <Link className={numberorder == 2 ? "tab--link active" : "tab--link"} name="pending" number={2} onClick={(e) => handleClick("pending", 2)}> <div> Chờ xác nhận </div></Link>
        <Link className={numberorder == 3 ? "tab--link active" : "tab--link"} name="waittake" number={3} onClick={(e) => handleClick("waittake", 3)}> <div> Chờ lấy hàng </div></Link>
        <Link className={numberorder == 4 ? "tab--link active" : "tab--link"} name="shipping" number={4} onClick={(e) => handleClick("shipping", 4)}> <div>Đang giao</div></Link>
        <Link className={numberorder == 5 ? "tab--link active" : "tab--link"} name="finish" number={5} onClick={(e) => handleClick("finish", 5)}> <div> Đã giao </div></Link>
        <Link className={numberorder == 6 ? "tab--link active" : "tab--link"} name="cancelled" number={6} onClick={(e) => handleisCancelled(true, 6)}> <div> Đơn huỷ </div></Link>
        <Link className={numberorder == 7 ? "tab--link active" : "tab--link"} name="refund" number={7} onClick={(e) => handleClick("refund", 7)}> <div> Trả hàng/hoàn tiền  </div></Link>
      </div>

    </div>
  )
}
