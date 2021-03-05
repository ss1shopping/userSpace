import React, { useState, useEffect } from 'react'
import { BsSearch } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { itemActions } from '../../app/store/ducks/itemReducer'
export const SearchBar = () => {
  const dispatch = useDispatch()
  const searchItem = useSelector(state => state.itemReducer.searchItem)
  const [status, setstatus] = useState(false)
  const [listSuggesstion, setlistSuggesstion] = useState([])
  const [keyword, setkeyword] = useState("")
  const handleChangeInput = (e) => {
    setkeyword(e)
  }
  useEffect(() => {

    dispatch(itemActions.searchItem(keyword))
  }, [keyword])
  return (
    <div className="header--searchbar">
      <div className="header--searchbar--box">
        <div className="header--searchbar--box--input">
          <form>
            <input type="text" placeholder="search" onBlur={() => setstatus(false)} onFocus={() => setstatus(true)} onChange={(e) => handleChangeInput(e.target.value)} />
          </form>
        </div>

        <button className="header--searchbar--box--icon"> <BsSearch></BsSearch></button>
        <div className="header--searchbar--box--suggetions" style={status ? { display: "block" } : { display: "none" }}>
          <div className="suggetion">
            <div className="suggetion--wrapper">
              {
                searchItem && searchItem.map((v, index) => {
                  return (
                    <div className="suggetion--item">
                      <Link to="/">
                        {v.name}
                      </Link>
                    </div>
                  )
                })
              }

              <div className="suggetion--item">  <Link to="/">
                item3
              </Link> </div>
              <div className="suggetion--item"> <Link to="/">
                item2
              </Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
