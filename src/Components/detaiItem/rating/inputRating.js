import React, { useState } from 'react'
import { BsStarFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { rateActions } from '../../../app/store/ducks/ratingReducer'
export const InputRating = () => {
  const dispatch = useDispatch()
  const [number, setnumber] = useState(0)
  const [review, setreview] = useState("")
  const item = useSelector(state => state.itemReducer.detailItem)
  const handleHoverChange = (value) => {
    setnumber(value)
    console.log(number);
  }
  const handleSubmitRating = () => {
    dispatch(rateActions.createRating(item._id, number, review))
    setreview("null")
    setnumber(0)
  }
  return (
    <div className="inputRating">
      <div className="inputRating--wrapper">
        <div className="inputRating--header">

        </div>
        <div className="inputRating--main">
          <div className="inputRating--main--input">
            <textarea type="text" cols="50" rows="5" onChange={(e) => setreview(e.target.value)}></textarea>
          </div>
          <div className="inputRating--main--star">
            <div className="wrapper">
              <div onMouseOver={() => handleHoverChange(1)} onClick={() => setnumber(1)}>

                <BsStarFill className={number >= 1 ? "active" : ""} ></BsStarFill>
              </div>
              <div onMouseOver={() => handleHoverChange(2)} onClick={() => setnumber(2)}>

                <BsStarFill className={number >= 2 ? "active" : ""} ></BsStarFill>
              </div>

              <div onMouseOver={() => handleHoverChange(3)} onClick={() => setnumber(3)}>

                <BsStarFill className={number >= 3 ? "active" : ""}></BsStarFill>
              </div>

              <div onMouseOver={() => handleHoverChange(4)} onClick={() => setnumber(4)}>

                <BsStarFill className={number >= 4 ? "active" : ""} ></BsStarFill>
              </div>

              <div onMouseOver={() => handleHoverChange(5)} onClick={() => setnumber(5)}>

                <BsStarFill className={number >= 5 ? "active" : ""} ></BsStarFill>
              </div>

            </div>
          </div>
          <div className="inputRating--main--button">
            <button className="btn btn--outline" onClick={() => handleSubmitRating()}> Rating</button>
          </div>
        </div>
      </div>
    </div>
  )
}
