import React, { useState, useEffect } from 'react'
import "./checkout.styles.scss"
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import { GoLocation } from "react-icons/go"
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../app/store/ducks/cardReducer';
import { orderActions } from '../../app/store/ducks/orderReducer';
import { getStorage } from '../../_metronic';
import { authActions } from '../../app/store/ducks/authReducer';
// import { CartContext } from '../../contexts/cart';
const Checkout = (props) => {
  // const { cart, setCart, selectItem, setSelectItem, setTotalMoney, listOrder } = useContext(CartContext)
  const dispatch = useDispatch()
  const selectItem = useSelector(state => state.cartReducer.selectItem)
  const user = useSelector(state => state.authReducer.user)
  const name = getStorage("name")
  let address = JSON.parse(getStorage("addresses"))
  useEffect(() => {
    address = JSON.parse(getStorage("addresses"))
    dispatch(authActions.currentUser())
  }, [])
  let totalPrice = 0
  const handleOrder = () => {
    // let arr = cart.filter(item => !selectItem.includes(item));
    // dispatch(cartActions.loadingcartSuccessful(arr))
    dispatch(cartActions.setAgainSelecItem([]))
    dispatch(cartActions.setTotalMoney(0))
    dispatch(orderActions.checkout(selectItem, `${user.addresses[0].phoneNumber}`, `${user.addresses[0].state, user.addresses[0].district, user.addresses[0].city}`))
    props.history.push("/history")
  }
  let listItem = null
  listItem = selectItem.map((item, key) => {

    totalPrice += (item.modelId.price * item.number)
    return (
      <>
        <div className="checkout--body--list--content--block" key={key}>
          <div className="vinall--content--name">{item.itemId.name} ({item.modelId.name})</div>
          <div className="vinall--content--price">{item.modelId.price}</div>
          <div className="vinall--content--number">{item.number}</div>
          <div className="vinall--content--total">{item.modelId.price * item.number}</div>
        </div>
      </>
    )
  })
  return (
    <div className="checkout">
      <div className="checkout--header">
        <div className="checkout--header--main">
          <div className="checkout--header--logo">Vinall</div>
          <div className="checkout--header--name">Thanh toán</div>
        </div>
      </div>
      <div className="checkout--body">
        <div className="checkout--body--address">
          <div className="checkout--body--address__selected">
            <div className="checkout--body--address__header"><GoLocation />Địa chỉ nhận hàng</div>
            <div className="checkout--body--address__summary">
              <div className="checkout--address--row">
                <div className="checkout--address--row__name"><strong> {name} {user && user.addresses && user.addresses[0] && user.addresses[0].phoneNumber && user.addresses[0].phoneNumber}</strong></div>
                <div className="checkout--address--row__address"> {user && user.addresses[0] && user.addresses[0].state && user.addresses[0].state + ","} {user && user.addresses[0] && user.addresses[0].district && user.addresses[0].district + ","} {user && user.addresses && user.addresses[0] && user.addresses[0].city && user.addresses[0].city + ","}</div>
                <div className="checkout--address--row__default"> Mặc định</div>
              </div>
              {address.length === 0 ? <div className="checkout--address--selection__change">Thêm địa chỉ </div> : <div className="checkout--address--selection__change">Thay đổi</div>}

            </div>
          </div>
        </div>
        <div className="checkout--body--list">
          <div className="checkout--body--list--header">
            <div className="checkout--body--list--header--block">
              <div className="vinall--header--name">Sản phẩm </div>
              <div className="vinall--header--price">Đơn giá</div>
              <div className="vinall--header--number">Số lượng</div>
              <div className="vinall--header--total">Thành Tiền</div>
            </div>
          </div>
          <div className="checkout--body--list--content">
            {listItem}
            {/* <div className="checkout--body--list--content--block">
              <div className="vinall--content--name">Giấy in jdnajsdabsnkdjk adasdvasvdya svdyu aiudnaisn dnasdnasbdkjsbaj </div>
              <div className="vinall--content--price">160000</div>
              <div className="vinall--content--number">10</div>
              <div className="vinall--content--total">1600000</div>
            </div> */}
          </div>
        </div>

      </div>
      <div className="checkout--recheck">
        <div className="checkout--recheck--block">
          <div className="total--before--ship">Tổng tiền hàng </div>
          <div className="total--number">đ{totalPrice}</div>
          <div className="total--ship"> Phí vận chuyển </div>
          <div className="total--ship--number"> đ:{totalPrice > 0 ? 30000 : 0}</div>
          <div className="total--after--ship"> Tổng thanh toán: </div>
          <div className="total--after--number"> đ{totalPrice > 0 ? totalPrice + 30000 : totalPrice}  </div>
          <div className="order">
            <button className="btn btn--primary" disabled={address.length === 0 ? true : false} onClick={() => handleOrder()}>Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Checkout;