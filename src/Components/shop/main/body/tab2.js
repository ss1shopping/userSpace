import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { orderActions } from '../../../../app/store/ducks/orderReducer'
import { useDispatch, useSelector } from "react-redux"
import { layoutActions } from '../../../../app/store/ducks/layoutReducer'
export const Tab2 = () => {
  const dispatch = useDispatch()
  const numberproduct = useSelector(state => state.layoutReducer.numberProduct)
  // const [number, setnumber] = useState(1)

  const handleClick = (link, number) => {
    dispatch(layoutActions.changeNumberProduct(number))
    dispatch(orderActions.setlink(link))
    dispatch(orderActions.setIsCancelled(false))
  }
  useEffect(() => {

  }, [numberproduct])
  // const handleisCancelled = (status, number) => {
  //   setnumber(number)
  //   dispatch(orderActions.setIsCancelled(status))
  // }
  return (
    <div className="tab">
      <div className="tab--wrapper">

        <Link className={numberproduct === 1 ? "tab--link active" : "tab--link"} name="all" number={1} onClick={(e) => handleClick("all", 1)}> <div>Tất cả </div></Link>
        <Link className={numberproduct === 2 ? "tab--link active" : "tab--link"} name="pending" number={2} onClick={(e) => handleClick("pending", 2)}> <div> Đang hoạt động </div></Link>
        <Link className={numberproduct === 3 ? "tab--link active" : "tab--link"} name="waittake" number={3} onClick={(e) => handleClick("waittake", 3)}> <div> Hết hàng </div></Link>
        <Link className={numberproduct === 4 ? "tab--link active" : "tab--link"} name="shipping" number={4} onClick={(e) => handleClick("shipping", 4)}> <div>Vi phạm</div></Link>
        <Link className={numberproduct === 5 ? "tab--link active" : "tab--link"} name="finish" number={5} onClick={(e) => handleClick("finish", 5)}> <div> Đã ẩn </div></Link>
      </div>

    </div>
  )
}
