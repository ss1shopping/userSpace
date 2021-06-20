import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { itemActions } from '../../app/store/ducks/itemReducer'
import { setStorage } from '../../_metronic'

export const Item = (props) => {
  const dispatch = useDispatch()
  const [url, seturl] = useState(`/detail/${props.item.name.replace('/',"")}`)
  const handleChooseItem = () => {
    // seturl(`/detail/${props.item.name}`)
    console.log("id" + props.id);
    let null1 = true
    props.item._id ? null1 = true : props.item._id = props.id
    dispatch(itemActions.itemChooseToEdit(props.item))
    setStorage("chooseItem", props.id)
    //props.item._id ? setStorage("chooseItem", props.id) : setStorage("chooseItem", props.item._id)
  }
  return (
    <div class="suggest-item-outer">
      <Link class="suggest-item-inner" to={url} onClick={() => handleChooseItem()}>
        <div class="item-wrap">
          <div class="item">
            <div class="item-img">
              <img src={props.item && props.item.tier_variations && props.item.tier_variations[0] && "http://localhost:4000/" + props.item.tier_variations[0].images[0]} class="img-product" />
            </div>

            <div class="txt-box">
              <div class="product-desc-wrapper">
                <div class="product-desc">
                  <div class="product-desc-txt">{props.item.name}</div>
                </div>
              </div>
              <div class="price-tag">
                <div class="price-wrapper">
                  <span class="price">${props.item.priceMin}-${props.item.priceMax}</span>
                </div>
                <div class="sold-num">{props.item.sold} Sold</div>
              </div>
            </div>

            <div class="item-hover-footer">See more like this</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
