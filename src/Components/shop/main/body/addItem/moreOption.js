import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../../../../../app/store/ducks/itemReducer'

export const MoreOption = (props) => {

  const dispatch = useDispatch()
  const [status, setstatus] = useState(false)
  const tier_variations = useSelector(state => state.itemReducer.tier_variations)
  const [listModel, setlistModel] = useState([])
  const [listModel1, setlistModel1] = useState([])
  const model = useSelector(state => state.itemReducer.model)
  const model1 = useSelector(state => state.itemReducer.model1)
  const totalModel = useSelector(state => state.itemReducer.totalModel)
  const handle_SetTier_variation = (index, name) => {
    let newobj = {
      name,
      option: []

    }
    tier_variations[index] = newobj
    dispatch(itemActions.setTier_variations(tier_variations))

  }
  const handleSetOptionTierVationation = (index, indexOption, option) => {
    console.log(index, indexOption, option);
    let Listnewmodel = [];
    if (index == 0) {

      model[indexOption] = { name: option }
      setlistModel(model)

      dispatch(itemActions.setModel(model))

    } else {

      model1[indexOption] = { name: option }
      dispatch(itemActions.setModel1(model1))
    }
    // dispatch(itemActions.setModel(model.concat(Listnewmodel)))
    tier_variations[index].option[indexOption] = option
    dispatch(itemActions.setTier_variations(tier_variations))
  }
  useEffect(() => {

    props.index === 1 ? setstatus(props.tier_varaitionStatus1) : setstatus(props.tier_varaitionStatus2)

  }, [props.tier_varaitionStatus1, props.tier_varaitionStatus])
  return (
    <>

      <div className="grid-edit-row" style={{ position: "relative", marginBottom: "8px" }}>
        <div className="edit-label">
          <span>Classification</span>
        </div>
        <div className="edit-type-input">
          <div className="edit-text__form">
            <div className="product-edit-content">
              <div className="product-input">
                <div className="product-input__inner">
                  <input type="text" placeholder="Input classification, such as Red, White,etc." size="large" resize="none" rows="2"
                    minrows="2" maxlength="Infinity" restrictiontype="input" max="Infinity" min="-Infinity" class="product-input__input"
                    disabled={status}
                    onChange={(e) => handleSetOptionTierVationation(props.index, props.count, e.target.value)}
                  />
                  <div className="product-input__sulfix">
                    <div className="product-input__sulfix-split"></div>
                    1/20   </div>
                </div>
              </div>
            </div>
          </div>
          <span className="options-remove-btn">
            <i className="btn-icon">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M14.516 3.016h-4v-1a.998.998 0 0 0-.703-.955.99.99 0 0 0-.297-.045h-3a.998.998 0 0 0-.955.703.99.99 0 0 0-.045.297v1h-4a.5.5 0 1 0 0 1h1v10a.998.998 0 0 0 .703.955.99.99 0 0 0 .297.045h9a.998.998 0 0 0 .955-.703.99.99 0 0 0 .045-.297v-10h1a.5.5 0 1 0 0-1zm-8-1h3v1h-3v-1zm6 12h-9v-10h9v10z"></path><path d="M5.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5zM8.016 12.016a.5.5 0 0 0 .5-.5v-5a.5.5 0 1 0-1 0v5a.5.5 0 0 0 .5.5zM10.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5z"></path></g></svg>
            </i>
          </span>
        </div>
      </div>
    </>
  )
}
