import React, { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider.page'
import Infor from './Infor.page'
// import "./detaiItem.styles.scss"
// import data from "../../seed1.json"
//import start from "../../star_rate-24px.svg"

import DefaultLayout from '../../app/layout/Defaultlayout'
import { useDispatch, useSelector } from "react-redux"
import { itemActions } from '../../app/store/ducks/itemReducer'
import { getStorage } from '../../_metronic/utils/utils'
import { Rating } from './rating/rating'
import { NavRating } from './navRating/navRating'
import { InputRating } from './rating/inputRating'

const DetailItem = () => {
  const dispatch = useDispatch()
  const [page, setpage] = useState()
  //const item = useSelector(state => state.itemReducer.detailItem)
  const item = useSelector(state => state.itemReducer.detailItem)
  useEffect(() => {
    //itemActions.getItem(getStorage("idItem"))
    if (getStorage("chooseItem") === "" || null || undefined) {
      item && dispatch(itemActions.getItem(item.name))
    } else {
      dispatch(itemActions.getItem(getStorage("chooseItem")))
    }
  }, [])
  // if (item !== null || undefined) {


  // }
  return (
    <DefaultLayout>


      <div className="detailItem">
        <div className="detailItem--group">


          <div className="detailItem--wrapper">
            <div className="detailItem--wrapper--image">
              <ImageSlider tier_variations={item && item.tier_variations}>
              </ImageSlider>
            </div>
            <div className="detailItem--wrapper--infor">
              <Infor></Infor>
            </div>
          </div>
          <div className="detailItem--content">
            <div className="content--left">
              <div className="product--detail page--product__detail">
                <div className="content">
                  <div className="content--label">Chi Tiết Sản Phẩm</div>
                  <div className="content--attr">
                    <div className="content--attr--element">
                      <label>Danh mục</label>
                      <div>Vinall {'>'} {item && item.category[0].name} {'>'} {item && item.category[1].name}</div>
                    </div>
                    <div className="content--attr--element">
                      <label>Chất liệu</label>
                      <div> vải </div>
                    </div>
                    <div className="content--attr--element">
                      <label>Chất liệu</label>
                      <div> vải </div>
                    </div>
                    <div className="content--attr--element">
                      <label>Chất liệu</label>
                      <div> vải </div>
                    </div >
                    <div className="content--attr--element">
                      <label>Chất liệu</label>
                      <div> vải </div>
                    </div>
                  </div>
                </div>
                <div className="description">
                  <div className="description--label">MÔ TẢ SẢN PHẨM</div>
                  <div className="description--text">
                    <span>{item && item.desc}<br />
                    </span>
                  </div>

                </div>
              </div>
              <div className="product--detail page--product__rating">
                <div className="product--rating--header">
                  ĐÁNH GIÁ SẢN PHẨM
              </div>
                <InputRating></InputRating>
                <NavRating></NavRating>
                <div className="product--rating--list">
                  <Rating></Rating>
                </div>
              </div>
              <div className="reconmendation"></div>
            </div>
            <div className='content--right'>
              <div className="page--product--vouchers">right</div>
              <div className="page--product--hotsales"></div>
            </div>
          </div>


        </div>

      </div>
    </DefaultLayout>
  )
}
export default DetailItem