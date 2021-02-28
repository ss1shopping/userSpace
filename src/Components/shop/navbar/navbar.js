import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { GrDeliver } from "react-icons/gr"
import { RiFileListFill, RiHandbagLine } from "react-icons/ri"
import { IoBagHandleOutline } from "react-icons/io"
import { Link } from "react-router-dom"
import { layoutActions } from '../../../app/store/ducks/layoutReducer'
import { useDispatch, useSelector } from "react-redux"
export const Navbar = (props) => {
  const dispatch = useDispatch()
  const number = useSelector(state => state.layoutReducer.number)
  const tranport = useSelector(state => state.layoutReducer.tranport)
  const order = useSelector(state => state.layoutReducer.order)
  const product = useSelector(state => state.layoutReducer.product)
  // const [number, setNumber] = useState(4)
  const handleLink = () => {

  }
  return (
    <div className="shop--navbar">
      <div className="shop--navbar--tranport">
        <div className="tranport--title" onClick={() => dispatch(layoutActions.changeTranport(!tranport))}>
          <div className="tranport--title--icon1"><GrDeliver /></div>
          <div className="tranport--title--string"> Vận chuyển </div>
          <div className="tranport--title--icon2">{tranport ? <FiChevronUp /> : <FiChevronDown />}</div>
        </div>
        <div className="tranport--droplist" style={tranport ? { display: "block" } : { display: "none" }}>
          <div className={number === 1 ? "tranport--droplist--link active" : "tranport--droplist--link"}>
            <Link number={1} onClick={() => dispatch(layoutActions.changeNumber(1))}>
              Quản Lý Vận Chuyển
          </Link>
          </div>
          <div className={number === 2 ? "tranport--droplist--link active" : "tranport--droplist--link"}>
            <Link onClick={() => dispatch(layoutActions.changeNumber(2))}>
              Giao Hàng Loạt
            </Link>
          </div>

          <div className={number === 3 ? "tranport--droplist--link active" : "tranport--droplist--link"}>
            <Link to="/banhang/delivery" onClick={() => dispatch(layoutActions.changeNumber(3))}>
              Cài Đặt Vận Chuyển
            </Link>
          </div>
        </div>
      </div>
      <div className="shop--navbar--order">
        <div className="order--title" onClick={() => dispatch(layoutActions.changeOrder(!order))}>
          <div className="order--title--icon1"><RiFileListFill /></div>
          <div className="order--title--string"> Quản Lý Đơn Hàng </div>
          <div className="order--title--icon2">{order ? <FiChevronUp /> : <FiChevronDown />}</div>
        </div>
        <div className="order--droplist" style={order ? { display: "block" } : { display: "none" }}>
          <div className={number === 4 ? "tranport--droplist--link active" : "tranport--droplist--link"}>
            <Link to="/banhang/order" onClick={() => dispatch(layoutActions.changeNumber(4))}>
              Tất cả
            </Link>
          </div>
          <div className={number === 5 ? "tranport--droplist--link active" : "tranport--droplist--link"}>
            <Link onClick={() => dispatch(layoutActions.changeNumber(5))}>
              Đơn huỷ
            </Link>
          </div>
          <div className={number === 6 ? "tranport--droplist--link active" : "tranport--droplist--link"}>
            <Link onClick={() => dispatch(layoutActions.changeNumber(6))}>
              Trả hàng/ hoàn tiền
            </Link>
          </div>
        </div>
      </div>
      <div className="shop--navbar--product">
        <div className="product--title" onClick={() => dispatch(layoutActions.changeProduct(!product))}>
          <div className="product--title--icon1"><RiHandbagLine /></div>
          <div className="product--title--string"> Quản Lý Sản Phẩm </div>
          <div className="product--title--icon2">{product ? <FiChevronUp /> : <FiChevronDown />}</div>
        </div>
        <div className="product--droplist" style={product ? { display: "block" } : { display: "none" }}>
          <div className={number === 7 ? "tranport--droplist--link active" : "tranport--droplist--link"}>
            <Link to="/banhang/item" onClick={() => dispatch(layoutActions.changeNumber(7))}>
              Tất Cả Sản Phẩm
            </Link>
          </div>
          <div className="tranport--droplist--link">
            <Link>
              Thêm Sản Phẩm
            </Link>
          </div>
          <div className="tranport--droplist--link">
            <Link>
              Sản Phẩm Vi Phạm
            </Link>
          </div>
        </div>
      </div>
      <div className="shop--navbar--shop"></div>
      <div className="shop--navbar--tranport"></div>
    </div>
  )
}
