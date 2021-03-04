import React, { useContext, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { BsStarFill } from "react-icons/bs"
import Variations from './variations/variations.page'
// import Alert from '@material-ui/lab/Alert';
// import Snackbar from '@material-ui/core/Snackbar';
import { useSelector, useDispatch } from "react-redux"
import { itemActions } from '../../app/store/ducks/itemReducer';
import { cartActions } from '../../app/store/ducks/cardReducer';
import { rateActions } from '../../app/store/ducks/ratingReducer'
const Infor = (props) => {
  const dispatch = useDispatch()

  const item = useSelector(state => state.itemReducer.detailItem)
  // const { attrs, cart } = useContext(CartContext)
  const attrs = useSelector(state => state.cartReducer.attrs)
  const cart = useSelector(state => state.cartReducer.cart)
  const rating = useSelector(state => state.rateReducer.rating)

  const [totalRate, settotalRate] = useState(0)
  const [open, setOpen] = useState(false);
  const attribute = item && item.tier_variations.map((attr, index) => {

    return (
      <Variations key={index} attr={attr} index={index} models={item.models}></Variations>
    )
  })

  // const [buttonSelect, setButtonSelect] = useState("product--variation")
  const handleAddtoCart = (e) => {

    //find modelId 
    //concat key word Ex: mauxanh,s
    let keyword = null
    Object.keys(attrs.value).map((value) => {
      console.log(attrs.value[value]);
      if (keyword == null) {
        keyword = attrs.value[value]
      } else {
        keyword = keyword + `,${attrs.value[value]}`

      }
    })

    let found = item.models.find(element => element.name === keyword)
    if (!found) {
      alert("some wrong f5")
    } else {

      dispatch(cartActions.addtocart(item._id, attrs.number, found._id,))
      dispatch(cartActions.setAttribute({ ...attrs, number: 1 }))
      dispatch(cartActions.loadingCart())
    }
    setOpen(true)
    if (e.target.name === 'buyNow') {
      props.history.push("/cart")
    }
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }
  let totalNumberRate = 0;
  rating && rating.map((v, i) => {

    totalNumberRate += v.starRate
  })
  dispatch(rateActions.setTotalRating(totalNumberRate))
  return (

    <div className="detailItem--infor">

      <div className="detailItem--infor--name">
        <span>{item && item.name}</span>
      </div>
      <div className="infor--inforExtra">
        <div className="infor--inforExtra--rate">
          <div className="inforExtra--scores">{item && totalNumberRate / rating.length}</div>
          <div className="inforExtra--flex">
            <BsStarFill className={totalNumberRate / rating.length >= 1.5 ? "active" : "star"}></BsStarFill>
            <BsStarFill className={totalNumberRate / rating.length >= 2.5 ? "active" : "star"}></BsStarFill>
            <BsStarFill className={totalNumberRate / rating.length >= 3.5 ? "active" : "star"}></BsStarFill>
            <BsStarFill className={totalNumberRate / rating.length >= 4.5 ? "active" : "star"}></BsStarFill>
            <BsStarFill className={totalNumberRate / rating.length >= 4.5 ? "active" : "star"}></BsStarFill>

          </div>
          <div className="inforExtra--avaluate">
            {rating && rating.length} đánh giá
          </div>
          <div className="inforExtra--sold"> {item && item.sold} đã bán
          </div>
        </div>
      </div>
      <div className="infor--price">
        <div className="infor--price--salePrice">
          đ{item && item.priceMin}
        </div>
        <div className="infor--price--currentPrice">
          đ{item && item.priceMax}
        </div>
        <div className="infor--price--sale">
          32% giảm
        </div>
      </div>

      <div className="infor--models">
        {attribute}
        {/* <div className="infor--models--label"> Màu sắc:</div>
        <div className="infor--models--name">
          <button className="product--variation">mau xanh</button>
          <button className="product--variation"> mau den </button>
          <button className="product--variation"> mau vang</button>
          <button className="product--variation"> mau do</button>
          <button className="product--variation">mau xanh</button>
          <button className="product--variation"> mau den </button>
          <button className="product--variation"> mau vang</button>
          <button className="product--variation"> mau do</button>
        </div> */}
      </div>

      <div className="infor--number">
        <div className="infor--models--label">Số lượng</div>
        <div className="infor--number--flex">
          <div className="infor--number--input">
            <button className="change__number" name="desc" disabled={attrs.number === 0 ? true : false} onClick={(e) => dispatch(cartActions.setAttribute({ ...attrs, number: attrs.number - 1 }))}>-</button>
            <div className="number"  >{attrs.number}</div>
            <button className="change__number" name="inc" onClick={(e) => dispatch(cartActions.setAttribute({ ...attrs, number: attrs.number + 1 }))}>+</button>
          </div>
          <div className="infor--number--quantity">1232 sản phẩm sẵn có</div>
        </div>
      </div>
      <div className="infor--button">
        <div className="infor--button--flex">
          <button className="btn btn-tinted" disabled={attrs.number === 0 ? true : false} onClick={(e) => handleAddtoCart(e)}> Thêm vào giỏ hàng</button>
          <button className="btn btn--primary" disabled={attrs.number === 0 ? true : false} name="buyNow" onClick={(e) => handleAddtoCart(e)}> Mua ngay</button>
        </div>
      </div>
      <div>

      </div>
    </div >

  )
}

export default withRouter(Infor)
