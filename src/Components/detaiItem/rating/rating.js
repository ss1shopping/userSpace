import React, { useEffect, useState } from 'react'
import { BsStarFill } from "react-icons/bs"
import avatar from "../../../app/scss/avatar.png"
import { useSelector, useDispatch } from "react-redux"
import { rateActions } from '../../../app/store/ducks/ratingReducer'


export const Rating = () => {
  const dispatch = useDispatch()
  const [page, setpage] = useState()
  const item = useSelector(state => state.itemReducer.detailItem)
  const starRate = useSelector(state => state.rateReducer.starRate)
  const rating = useSelector(state => state.rateReducer.rating)
  const rate = useSelector(state => state.rateReducer.starRate)
  useEffect(() => {
    if (item) {
      dispatch(rateActions.getRating(page, item._id, rate))
    }
  }, [rate, item])
  let listRating = null
  listRating = rating && rating.map((value, i) => {
    return (
      <div className="rating--box">
        <div className="rating--avatar">
          <img atl="img" src={avatar} />
        </div>
        <div className="rating--main">
          <div className="name"> manhtien</div>
          <div className="star">
            <BsStarFill className={value.starRate >= 1 ? "active" : ""}></BsStarFill>
            <BsStarFill className={value.starRate >= 2 ? "active" : ""}></BsStarFill>
            <BsStarFill className={value.starRate >= 3 ? "active" : ""}></BsStarFill>
            <BsStarFill className={value.starRate >= 4 ? "active" : ""}></BsStarFill>
            <BsStarFill className={value.starRate >= 4.5 ? "active" : ""}></BsStarFill>
          </div>
          <div className="review"> {value.review}</div>
          <div className="time"> {value.updatedAt}</div>
        </div>
        <div></div>
      </div>
    )
  })
  return (
    <div className="rating">
      <div className="rating--wrapper">
        {listRating}
        <div className="rating--box">

          <div className="rating--avatar">
            <img atl="img" src={avatar} />
          </div>
          <div className="rating--main">
            <div className="name"> manhtien</div>
            <div className="star">
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
            </div>
            <div className="review"> hang dep chat vl</div>
            <div className="time"> 10-21-21</div>
          </div>
          <div></div>
        </div>
        <div className="rating--box">
          <div className="rating--avatar">
            <img atl="img" src={avatar} />
          </div>
          <div className="rating--main">
            <div className="name"> manhtien</div>
            <div className="star">
              <BsStarFill className="active"></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
            </div>
            <div className="review"> hang dep chat vl</div>
            <div className="time"> 10-21-21</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
