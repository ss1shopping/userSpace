import React, { useContext, useState, useEffect } from 'react'
// import DeleteIcon from '@material-ui/icons/Delete';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import { RiDeleteBin6Line } from "react-icons/ri"
import { MdFavoriteBorder } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../app/store/ducks/cardReducer';
import { getStorage } from '../../../_metronic';

const ListItem = (props) => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer.cart)
  const attrs = useSelector(state => state.cartReducer.attrs)
  const selectItem = useSelector(state => state.cartReducer.selectItem)
  const totalMoney = useSelector(state => state.cartReducer.totalMoney)
  // let { cart, setCart, attrs, selectItem, setSelectItem } = useContext(CartContext)
  const [status, setStatus] = useState()

  const handleDeleteItem = (item) => {
    dispatch(cartActions.deleteCart(item))
  }
  const handleChooseItem = (e, index, item) => {

    if (e === true) {
      dispatch(cartActions.setSelectItem(cart[index]))
      dispatch(cartActions.setTotalMoney(totalMoney + (cart[index].modelId.price * cart[index].number)))
      // newCart.attrs["checked"] = true
      // cart[index] = newCart;
      // selectItem.push(newCart)
      // console.log("cart", cart);
      // props.handleSelectItem(selectItem)
    }
    if (e === false) {

      // dispatch(cartActions.loadingcartSuccessful(cart))
      dispatch(cartActions.setTotalMoney(totalMoney - (cart[index].modelId.price * cart[index].number)))
      // newCart.attrs["checked"] = false
      // cart[index] = newCart;
      const filteredItems = selectItem.filter(value => {
        return value._id !== item._id
      })

      dispatch(cartActions.setAgainSelecItem(filteredItems))
      // setSelectItem(filteredItems)
      // props.handleSelectItem(filteredItems)
    }

  }
  useEffect(() => {

    // let finditem = selectItem.filter((e, i) => {
    //   // dispatch(cartActions.setTotalMoney(totalMoney + (item.modelId.price * item.number)))
    //   if (e._id === props.item._id) {
    //     return e
    //   }

    // })
    // if (finditem.length > 0) {
    //   // props.stateStatus = true
    // }


    // dispatch(cartActions.setTotalMoney(total))
    // if (props.item.checked === true) {
    //   dispatch(cartActions.setTotalMoney(totalMoney + (props.item.modelId.price * props.item.number)))
    // }
    // if (getStorage("selectItem") !== null || undefined) {

    //   const indextem = JSON.parse(getStorage("selectItem")).filter((value, index) => {
    //     if (value._id == props.item._id) {
    //       cart[index].checked = true
    //       dispatch(cartActions.setNewCart(cart))
    //     }
    //   })
    // }
    // cart[props.index] = props.item
    // dispatch(cartActions.setNewCart(cart))

  }, [selectItem])
  return (
    <>
      <tr >
        <th>
          <input type="checkbox" size="1"
            defaultChecked={props.stateStatus ? true : false}
            onClick={(e) => handleChooseItem(e.target.checked, props.index, props.item)} />
        </th>
        <th>{props.index + 1}</th>
        <th>{props.item.shopId.name}</th>
        <th>{props.item.itemId.name} ({props.item.modelId.name})</th>
        <th>{props.item.totalPrice / props.item.number}</th>
        <th>{props.item.number}</th>
        <th className="iteractive">
          <div className="iteractive--flex">
            <button className="btn btn--delete" onClick={() => handleDeleteItem(props.item._id)}><RiDeleteBin6Line></RiDeleteBin6Line></button>
            <button className="btn btn--favor">
              <MdFavoriteBorder ></MdFavoriteBorder>
            </button>

          </div>
        </th>
      </tr>
    </>
  )
}
export default ListItem
