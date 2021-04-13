import React, { useState, useEffect } from 'react'
import { BsSearch } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { itemActions } from '../../app/store/ducks/itemReducer'
const SearchBar = (props) => {
  const dispatch = useDispatch()
  console.log(props);
  const searchItem = useSelector(state => state.itemReducer.searchItem)
  const keyword = useSelector(state => state.itemReducer.keyword)
  const [status, setstatus] = useState(false)

  const [listSuggesstion, setlistSuggesstion] = useState([])
  // const [keyword, setkeyword] = useState("")
  const handleChangeInput = (e) => {
    // setkeyword(e)
    dispatch(itemActions.setKeyword(e))
  }
  useEffect(() => {

    dispatch(itemActions.searchItem(keyword))
  }, [keyword])
  const handleWait = () => {
    setTimeout(() => {
      setstatus(!status)
    }, 500);
  }
  // const handlesearchItem = (e) => {
  //   dispatch(itemActions.searchItem(keyword))
  //   console.log("asdiashdiashdahsdjahsdjhas");
  //   if (e.key === "Enter") {
  //     // dispatch(itemActions.setKeyword(keyword))
  //     // props.history.push(`search?keyword=${keyword}`)
  //   }
  // }
  useEffect(() => {

    dispatch(itemActions.searchItem(props.location.search.slice(9, props.location.search.length)))
  }, [])
  return (
    <div className="header--searchbar">
      <div className="header--searchbar--box">
        <div className="header--searchbar--box--input">
          <form action={`/search?${keyword}`}>
            <input type="text" name="keyword" placeholder="search" onBlur={() => handleWait()} onFocus={() => setstatus(true)} onChange={(e) => handleChangeInput(e.target.value)} />
          </form>
        </div>

        <button className="header--searchbar--box--icon"> <BsSearch></BsSearch></button>
        <div className="header--searchbar--box--suggetions" style={status ? { display: "block" } : { display: "none" }}>
          <div className="suggetion">
            <div className="suggetion--wrapper">
              {

                searchItem && searchItem.slice(0, 10).map((v, index) => {
                  const url = `/detail/${v._source.name}`
                  return (
                    <div className="suggetion--item" >
                      <Link to={url} >
                        {v._source.name}
                      </Link>
                    </div>
                  )
                })
              }

              {/* <div className="suggetion--item" onClick={() => console.log("dasdsa")}>  <Link to="/banhang">
                item3
              </Link> </div>
              <div className="suggetion--item" onClick={() => console.log("dasdsa")}> <Link to="/">
                item2
              </Link> </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(SearchBar);