import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../../../app/store/ducks/itemReducer'
import { Item } from '../../item/item'

export const Suggestion = () => {
  const dispatch = useDispatch()
  const page = useSelector(state => state.itemReducer.page)
  const item = useSelector(state => state.itemReducer.item)
  // const state = useSelector(state => state.state) 
  // const [page, setpage] = useState(1)

  useEffect(() => {
    dispatch(itemActions.loadingitem(page, "_id", null))
  }, [])

  return (
    <div className="homepage--suggest">
      <div className="outerbox">
        <div id="suggestion-header">
          <div className="suggest-txt-wrapper">
            <span className="suggest-txt">suggestion</span>
          </div>
        </div>
        <div className="suggestion-item-list">
          {
            item && item.map((value, index) => {
              return (
                <>
                  <Item key={index} item={value} id={value._id}></Item>
                </>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}
