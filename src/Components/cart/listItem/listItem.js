import React, { useContext, useState, useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
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

  const handleDeleteItem = (item, deleteCart) => {
    let filtered = cart.filter(function (value, index, arr) {
      return value !== item;
    });
    const filteredItems = selectItem.filter(value => {

      return value.attrs.id !== item.attrs.id
    })

    deleteCart(filtered)
    // setSelectItem(filteredItems)
  }
  const handleChooseItem = (e, index, item) => {


    // const newItem = JSON.parse(JSON.stringify(item))
    if (e === true) {
      cart[index].checked = true
      // dispatch(cartActions.loadingcartSuccessful(cart))
      dispatch(cartActions.setSelectItem(cart[index]))
      dispatch(cartActions.setTotalMoney(totalMoney + (cart[index].modelId.price * cart[index].number)))
      // newCart.attrs["checked"] = true
      // cart[index] = newCart;
      // selectItem.push(newCart)
      // console.log("cart", cart);
      // props.handleSelectItem(selectItem)
    }
    if (e === false) {
      cart[index].checked = false
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



  }, [])
  return (
    <>
      <tr >
        <th>
          <input type="checkbox" size="1"
            defaultChecked={props.item.checked ? true : false}
            onClick={(e) => handleChooseItem(e.target.checked, props.index, props.item)} />
        </th>
        <th>{props.index + 1}</th>
        <th>{props.item.shopId.name}</th>
        <th>{props.item.itemId.name} ({props.item.modelId.name})</th>
        <th>{props.item.totalPrice / props.item.number}</th>
        <th>{props.item.number}</th>
        <th className="iteractive">
          <div className="iteractive--flex">
            <button className="btn btn--delete" onClick={() => handleDeleteItem(props.item)}><DeleteIcon></DeleteIcon></button>
            <button className="btn btn--favor">
              <FavoriteIcon ></FavoriteIcon>
            </button>

          </div>
        </th>
      </tr>
    </>
  )
}
export default ListItem
