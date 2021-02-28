import DatePicker from "react-datepicker";
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { orderActions } from "../../../../app/store/ducks/orderReducer";
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { Link } from "react-router-dom";
export const Search2 = () => {
  const dispatch = useDispatch()
  const [typeSearch, settypeSearch] = useState("Tên sản phẩm")
  const [droplist, setdroplist] = useState(false)
  const state = useSelector(state => state.orderReducer.keyword)
  const [startDate, setStartDate] = useState(new Date());
  const handlechooseTypeSearch = (name) => {
    setdroplist(false)
    settypeSearch(name)
  }
  return (
    <div className="shopsearch">
      <div className="shopsearch--box">
        <div className="shopsearch--panel">
          <div className="shopsearch--panel--title">
            <div className="shopsearch--panel--name" onClick={() => setdroplist(!droplist)}>
              <div className="shopsearch--panel--name--first"> {typeSearch}</div>
              <div>{droplist ? <BsChevronUp /> : <BsChevronDown />}</div>
            </div>
            <div className="shopsearch--panel--droplist" style={droplist ? { display: "block" } : { display: "none" }}>
              <div onClick={() => handlechooseTypeSearch("Tên sản phẩm")} className={typeSearch === "Tên sản phẩm" ? "active" : ""} >Tên sản phẩm </div>
              <div onClick={() => handlechooseTypeSearch("Mã sản phẩm")} className={typeSearch === "Mã sản phẩm" ? "active" : ""}>Mã sản phẩm </div>
              <div onClick={() => handlechooseTypeSearch("Mã sản phẩm")} className={typeSearch === "Mã sản phẩm" ? "active" : ""}>Mã sản phẩm </div>
            </div>
          </div>
          <div className="shopsearch--box--input">
            <input type="search" placeholder="Nhap vao ..." onChange={(e) => dispatch(orderActions.setkeyword(e.target.value))} />
            <div> <BsSearch /></div>
          </div>

        </div>

        <div className="shopsearch--category">
          <div className="shopsearch--category--box">
            <div className="shopsearch--category--box--title">Ngành hàng: </div>
            <div className="shopsearch--category--box--input">
              <input type="search" placeholder="Tìm ngành hàng ..." />
            </div>
          </div>
        </div>
      </div>
      <div className="shopsearch--btn">
        <div className="btn btn--outline"> Tìm </div>
        <div className="btn btn--option"> Nhập lại </div>
        <Link to="/banhang/choose-category" className="btn btn--outline"> + Thêm 1 sản phẩm mới </Link>
      </div>
    </div>
  )
}
