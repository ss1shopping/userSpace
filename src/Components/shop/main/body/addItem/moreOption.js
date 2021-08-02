import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../../../../../app/store/ducks/itemReducer'

export const MoreOption = (props) => {

  const dispatch = useDispatch()
  const [status, setstatus] = useState(false)
  const [error, setError] = useState(false)
  const tier_variations = useSelector(state => state.itemReducer.tier_variations)
 let timeout=null
  const [listModel, setlistModel] = useState([])
  const [listModel1, setlistModel1] = useState([])
  function check(variations) {
    let newoption = [[]];

    let kq = [];
    for (let i = 0; i < variations.length; i++) {

        newoption[i] = variations[i].options;
       
    }
    for (let i = 0; i < newoption.length; i++) {
        let t1 = newoption[i].length;
        let temp = newoption[i][Math.floor(Math.random() * t1)];
        // console.log(temp);
    }
    let tong = 1;
    newoption.map((value) => {
        tong = value.length * tong;
    });
    let dem = 1;
    for (let i = 0; i < newoption.length; i++) {
        for (let j = 0; j < newoption[i].length - 1; j++) {
            for (let k = j + 1; k < newoption[i].length; k++) {
                if (newoption[i][j] === newoption[i][k]) {
                    return false;
                }
            }
        }
    }
    return true;
}
function convertVariation(variations) {
	const newoption = [[]];

	const kq = [];

	for (let i = 0; i < variations.length; i++) {
		newoption[i] = variations[i].options;
	}

	for (let i = 0; i < newoption.length; i++) {
		const t1 = newoption[i].length;
		// eslint-disable-next-line no-unused-vars
		const temp = newoption[i][Math.floor(Math.random() * t1)];
	// console.log(temp);
	}
	let tong = 1;
	newoption.map((value) => {
		tong = value.length * tong;
		return null;
	});
	let dem = 1;

	while (dem <= tong) {
		let temp1 = 0;
		let str = '';
		while (temp1 < newoption.length) {
			if (temp1 === newoption.length - 1) {
				str += newoption[temp1][Math.floor(Math.random() * newoption[temp1].length)];
			} else {
				str += `${newoption[temp1][Math.floor(Math.random() * newoption[temp1].length)]}-`;
			}

			temp1++;
		}
		if (!kq.includes(str)) {
			kq[dem - 1] = {name:`${props.nameProduct}-${str}`};
			dem++;
		}
	}
	return kq;
}
  const handleSetOptionTierVationation = (index, indexOption, option) => {
    tier_variations[index].options[indexOption] = option
    dispatch(itemActions.setTier_variations(tier_variations))
	
	
	if(timeout) clearTimeout(timeout);
	timeout = setTimeout(() => {
		let check1 = check(tier_variations)
		if(check1===true){
				setError(false)
				let listProduct=convertVariation(tier_variations)
				dispatch(itemActions.setVariation(listProduct))
				dispatch(itemActions.setProduct(listProduct))
			}else{
				setError(true)
			}
			
			
		  }, 300);
		
	
        
	// let variation=convertVariation(tier_variations)
	
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
                    defaultValue={props && props.tier_variations && props.tier_variations.options[props.count]}
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
		<div style={error?{color:"red",textAlign:"center"}:{display:"none"}}> Classification must be diffirent</div>
    </>
  )
}
