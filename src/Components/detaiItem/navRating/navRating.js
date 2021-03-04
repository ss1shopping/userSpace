import React, { useState } from 'react'
import { BsStarFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { rateActions } from '../../../app/store/ducks/ratingReducer'
export const NavRating = () => {
  const dispatch = useDispatch()
  const [number, setnumber] = useState(1)
  const totalNumberRate = useSelector(state => state.rateReducer.totalNumberRate)
  const rate = useSelector(state => state.rateReducer.starRate)
  const handleChangeStarRate = (value, star) => {
    setnumber(value)
    dispatch(rateActions.changerate(star))
  }

  return (
    <div className="product-rating-overview">
      <div className="product-rating-overview__briefing">
        <div className="product-rating-overview__score-wrapper">
          <span className="product-rating-overview__rating-score">4.9</span>
          <span className="product-rating-overview__rating-score-out-of">trên 5</span>
        </div>
        <div className="vinall-rating-stars product-rating-overview__stars">
          <div className="vinall-rating-stars__stars">
            <div className="vinall-rating-stars__star-wrapper">
              <div className="star">

                <BsStarFill className={totalNumberRate > 0.5 ? "active" : ""}></BsStarFill>
              </div>

            </div>
            <div className="vinall-rating-stars__star-wrapper">
              <div className="star">

                <BsStarFill className={totalNumberRate > 1.5 ? "active" : ""}></BsStarFill>
              </div>
            </div>
            <div className="vinall-rating-stars__star-wrapper">
              <div className="star">

                <BsStarFill className={totalNumberRate > 2.5 ? "active" : ""}></BsStarFill>
              </div>
            </div>
            <div className="vinall-rating-stars__star-wrapper">
              <div className="star">

                <BsStarFill className={totalNumberRate > 3.5 ? "active" : ""}></BsStarFill>
              </div>
            </div>
            <div className="vinall-rating-stars__star-wrapper">
              <div className="star">

                <BsStarFill className={totalNumberRate > 4.5 ? "active" : ""}></BsStarFill>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-rating-overview__filters">
        <div className={number === 1 ? "product-rating-overview__filter active" : "product-rating-overview__filter"} onClick={() => handleChangeStarRate(1, null)}>Tất cả </div>
        <div className={number === 2 ? "product-rating-overview__filter active" : "product-rating-overview__filter"} onClick={() => handleChangeStarRate(2, 5)}> 5 sao</div>
        <div className={number === 3 ? "product-rating-overview__filter active" : "product-rating-overview__filter"} onClick={() => handleChangeStarRate(3, 4)}> 4 sao</div>
        <div className={number === 4 ? "product-rating-overview__filter active" : "product-rating-overview__filter"} onClick={() => handleChangeStarRate(4, 3)}> 3 sao</div>
        <div className={number === 5 ? "product-rating-overview__filter active" : "product-rating-overview__filter"} onClick={() => handleChangeStarRate(5, 2)}>2 sao</div>
        <div className={number === 6 ? "product-rating-overview__filter active" : "product-rating-overview__filter"} onClick={() => handleChangeStarRate(6, 1)}>1 sao</div>
        <div className={number === 7 ? "product-rating-overview__filter active" : "product-rating-overview__filter"} onClick={() => handleChangeStarRate(7)}>Có bình luân</div>
        <div className="product-rating-overview__filter">Có hình ảnh</div>
      </div>
    </div>


  )
}
