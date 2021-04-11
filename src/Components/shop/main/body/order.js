import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { orderActions } from '../../../../app/store/ducks/orderReducer'
import { DefaultLayout } from "../defaultLayout"
import { Search } from './search'
import { Tab } from "./tab"
import { useDispatch, useSelector } from "react-redux"
export const Order = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orderReducer.orders)
  const status = useSelector(state => state.orderReducer.link)
  const keyword = useSelector(state => state.orderReducer.keyword)
  const isCancelled = useSelector(state => state.orderReducer.isCancelled)
  const [page, setPage] = useState(1)
  const [statement, setStatement] = useState()

  const handleUpdateOrder = (id, statement1) => {
    dispatch(orderActions.updateOrder(id, statement1))
    setStatement(statement1)
  }
  const handleCancelledOrder = (id, statement1) => {
    dispatch(orderActions.cancelledOrder(id))
    setStatement(statement1)
  }
  useEffect(() => {
    dispatch(orderActions.getAllOrder(page, keyword, status, isCancelled))
  }, [status, keyword, statement, isCancelled])

  return (
    <DefaultLayout>
      <Tab></Tab>
      <Search></Search>
      <div className="order">
        <div className="order--title1">
          <div className="order--title1--name">Đơn hàng  </div>
        </div>
        <div className="order--table">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /> </th>
                <th>Sản phẩm </th>
                <th>Số lượng sản phẩm  </th>
                <th> Tổng tiền </th>
                <th> Tên khách hàng  </th>
                <th> Điện thoại </th>
                <th> Trạng thái </th>
              </tr>
            </thead>
            <tbody>

              {orders && orders.map((value, index) => {
                return (
                  <tr key={index}>
                    <th><input type="checkbox" /> </th>
                    <th className="order--item">{value.detail.length > 1 ? "Có nhiều hơn 2 sản phẩm" : `${value.detail[0].itemId.name}`}
                      <div className="dropdown" >
                        <table>
                          <thead>
                            <tr>
                              <th>Sản phẩm </th>
                              <th>Số lượng </th>
                            </tr>
                          </thead>
                          <tbody>
                            {value.detail && value.detail.map((v, key) => {
                              return (
                                <>
                                  <tr key={key}>
                                    <th>
                                      <div>{v.itemId.name} {v.modelId.name} </div>
                                    </th>
                                    <th>{v.number}</th>
                                  </tr>
                                </>
                              )
                            })}
                          </tbody>
                        </table>

                      </div>
                    </th>

                    <th>{value.detail.length}</th>
                    <th> {value.totalCost} </th>
                    <th>{value.userId.lastName} </th>
                    <th> {value.userId.phoneNumber} </th>
                    <th>
                      <div className="group--btn">
                        <div className="btn btn--primary" style={value.status === "pending" ? { display: "block" } : { display: "none" }} onClick={() => handleUpdateOrder(value._id, "shipping")}> Xuất  </div>
                        <div className="btn btn--outline" style={value.status === "shipping" ? { display: "block" } : { display: "none" }} onClick={() => handleUpdateOrder(value._id, "finish")}> Hoàn tất order  </div>
                        <div className="btn" style={value.status === "finish" ? { display: "block" } : { display: "none" }}> Hoàn thành  </div>
                        <div className="btn btn--outline" style={value.isCancelled === false && value.status !== "finish" ? { display: "block" } : { display: "none" }} onClick={() => handleCancelledOrder(value._id, "cancel")}> Huỷ order  </div>
                      </div>

                    </th>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  )
}
