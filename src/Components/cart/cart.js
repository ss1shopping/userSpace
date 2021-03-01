import React, { useContext, useEffect, useState } from 'react'
import "./cart.styles.scss"
import SearchIcon from '@material-ui/icons/Search';
import ListItem from "./listItem/listItem"
import { Link } from 'react-router-dom';
import DefaultLayout from '../../app/layout/Defaultlayout'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../app/store/ducks/cardReducer';
import { setStorage, getStorage } from '../../_metronic';
const Cart = (props) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer.cart)
  const statusAddnewItem = useSelector(state => state.cartReducer.statusAddnewItem)
  const selectItem = useSelector(state => state.cartReducer.selectItem)
  const totalMoney = useSelector(state => state.cartReducer.totalMoney)
  let getfromLocalstorage = null
  const [data, setData] = useState([])

  let showCart = null

  // var grandTotal = function (arr) {
  //   return arr.reduce((sum, i) => {
  //     return sum + (i.price * i.attrs.number)
  //   }, 0)
  // };
  const handleCheckout = () => {
    setStorage("selectItem", JSON.stringify(selectItem))
    props.history.push('/checkout')
  }
  useEffect(() => {
    // console.log(JSON.parse(getStorage("selectItem")))
    if (getStorage("selectItem") !== null || undefined) {
      let total = 0;
      getfromLocalstorage = JSON.parse(getStorage("selectItem")).map((e, i) => {
        // cart[i].checked = true
        console.log(total);
        total = total + (e.modelId.price * e.number)
        dispatch(cartActions.setTotalMoney(total))

      })

    }
    dispatch(cartActions.loadingCart())
    // if (cart > 0) {
    //   cart.map((value, index) => {
    //   })
    // }
  }, [statusAddnewItem])
  if (cart.length > 0) {
    showCart = cart && cart.map((item, key) => {
      if (getStorage("selectItem") !== null || undefined) {
        JSON.parse(getStorage("selectItem")).filter((e, i) => {
          // dispatch(cartActions.setTotalMoney(totalMoney + (item.modelId.price * item.number)))
          if (e._id == item._id) {
            item.checked = true
            // dispatch(cartActions.setNewCart(cart))
          }
        })

      }
      return (
        <ListItem key={key} item={item} index={key} ></ListItem>
      )
    })
  }
  return (
    <DefaultLayout>


      <div className="cart">
        <div className="cart--header">
          <div className="cart--header--main">
            <div className="cart--header--logo">Vinall</div>
            <div className="cart--header--name">Giỏ hàng</div>
          </div>
          <div className="cart--header--searchbar">
            <div className="vinall--searchbar">
              <div className='vinall--searchbar--main'>
                <form className="vinall--searchbar--input">
                  <input className="vinall--searchbar--input__input" type="text" placeholder="Tìm sản phẩm , thương hiệu, tên shop" />
                </form>
              </div>
              <div className='btn btn--primary'><SearchIcon /></div>
            </div>
          </div>
        </div>
        <div className="cart--body">
          <div className="cart--body--table">
            <table >
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" size="1" />
                  </th>
                  <th>stt</th>
                  <th>Tên shop</th>
                  <th>Thông tin sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Thao tác</th>
                </tr>

              </thead>
              <tbody>

                {showCart}

              </tbody>
            </table>
          </div>
        </div>
        <div className='cart--total'>
          <div className="cart--total--main">
            <div className="vinall--number--selected">Tổng tiền hàng ({selectItem.length} sản phẩm):<span className="cart--money">đ{totalMoney}</span></div>
            <button type="button" className={selectItem.length > 0 ? "btn btn--primary" : "btn btn--primary btn--disabled"} onClick={() => handleCheckout()}>Mua hàng</button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default Cart
