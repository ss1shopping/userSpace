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
      <div class="outerbox">
        <div id="suggestion-header">
          <div class="suggest-txt-wrapper">
            <span class="suggest-txt">suggestion</span>
          </div>
        </div>
        <div class="suggestion-item-list">
          {
            item && item.map((value, index) => {
              return (
                <>
                  <Item item={value}></Item>
                </>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}
