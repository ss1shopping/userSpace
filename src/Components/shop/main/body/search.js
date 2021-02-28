import DatePicker from "react-datepicker";
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { orderActions } from "../../../../app/store/ducks/orderReducer";
export const Search = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.orderReducer.keyword)
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="shopsearch">
      <div className="shopsearch--box">
        <div className="shopsearch--panel">
          <div className="shopsearch--box--input">
            <input type="search" placeholder="Tìm đơn hàng, địa chỉ ..." onChange={(e) => dispatch(orderActions.setkeyword(e.target.value))} />
            <div> <BsSearch /></div>
          </div>

        </div>

        <div className="shopsearch--date">
          <div className="shopsearch--date--pickup">
            <div className="shopsearch--date--pickup--title"> Ngày đặt hàng: </div>
            <div>
              <DatePicker selected={startDate}
                onChange={date => setStartDate(date)}
              ></DatePicker>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
