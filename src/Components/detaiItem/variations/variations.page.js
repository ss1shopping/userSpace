import React, { useContext, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../app/store/ducks/cardReducer';

const Variations = (props) => {
  const dispatch = useDispatch()
  const attrs = useSelector(state => state.cartReducer.attrs)
    ;
  const [buttonSelect, setButtonSelect] = useState({ object: props.attr.option, activeObject: null })
  //console.log("cariation", props.models);

  const toggleButton = (index, model) => {
    setButtonSelect({ ...buttonSelect, activeObject: buttonSelect.object[index] })
    attrs.value[props.attr.name] = buttonSelect.object[index]
    dispatch(cartActions.setAttribute(attrs))
  }
  const activeObject = (index) => {
    if (buttonSelect.object[index] === buttonSelect.activeObject) {
      return "product--variation--selected"
    } else {
      return "product--variation"
    }
  }
  const handleOver = (model) => {

  }
  useEffect(() => {
    attrs.value[props.attr.name] = null;
    dispatch(cartActions.setAttribute(attrs))
  }, [])
  return (
    <>
      <div className="infor--models--label"> {props.attr.name}</div>
      <div className="infor--models--name">
        {buttonSelect.object.map((model, index) =>
          <button key={index} className={activeObject(index)} onMouseOver={() => handleOver(model)} onClick={() => { toggleButton(index, model) }}>{model}</button>)}
      </div>
    </>
  )
}
export default Variations;