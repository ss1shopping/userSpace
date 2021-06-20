import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../../../../../app/store/ducks/itemReducer'

export const Model = (props) => {
  const dispatch = useDispatch()
  const model1 = useSelector(state => state.itemReducer.model1)
  const price = useSelector(state => state.itemReducer.price)
  const quantity = useSelector(state => state.itemReducer.quantity)
  const tier_variations = useSelector(state => state.itemReducer.tier_variations)
  const detailItem = useSelector(state => state.itemReducer.detailItem)
  let letnewquantity = {}
  console.log(props);
  const [newmodel, setnewmodel] = useState({})
  const setPrice = (name, value) => {
    price[`${props.value.name},${name}`] = +value
    dispatch(itemActions.setprice(price))

  }
  const setPriceOne = ( value) => {
	price[`${props.value.name}`] = +value
	dispatch(itemActions.setprice(price))
    
      }
    
  const setQuantityforSpecific = (name, value) => {
    console.log(value);
    quantity[`${props.value.name},${name}`] = +value
    // console.log(letnewquantity);
    // let mergeObject = ({ ...quantity, ...letnewquantity });
    dispatch(itemActions.setQuantity(quantity))

  }
  const setQuantityforSpecificOne = ( value) => {
	console.log(value);
	quantity[`${props.value.name}`] = +value
	// console.log(letnewquantity);
	// let mergeObject = ({ ...quantity, ...letnewquantity });
	dispatch(itemActions.setQuantity(quantity))
    
      }
  useEffect(() => {

  }, [])

  return (
    <div className="row">
      <div style={{ flex: "3" }}>
        <div className="data-group" style={{ flexDirection: "row" }}>
          <div className="table-cell">
            <span>{props.value && props.value.name}</span>
          </div>
          <div className="table-cell-header" style={model1.length === 0 ? { display: "none" } : { width: "100%", padding: "0px", border: "none", display: "flex", flexDirection: "column" }}>
            {
		   
              model1 && model1.map((v, i) => {
                return (
                  <div className="table-cell" style={{ width: "100%" }} key={i}>
                    <div className="table-cell__variation-model">
                      <div className="table-cell__edit">
                        <div className="product-input-wrapper">
                          <div className="product-input">
                            <div class="product-input__inner" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <div>{v.name}</div>
                              {/* <input type="text" placeholder="Insert" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="value" max="Infinity" min="-Infinity" isround="true" class="product-input__input"></input> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
	      
            }
	  
          </div>
          <div className="table-cell-header" 
	  style={model1.length === 0 && !props.value? { display: "none" } : { padding: "0px", border: "none", display: "flex", flexDirection: "column" }}
	  >
            {
              model1.length === 0 ?
                <div className="table-cell">
                  <div className="table-cell__variation-model">
                    <div className="table-cell__edit">
                      <div className="product-input-wrapper">
                        <div className="product-input">
                          <div class="product-input__inner">
                            <div className="product-input__prefix">
                              $
                                  <span className="product-input__prefix-split"></span>
                            </div>
                            <input type="number" placeholder="Insert" size="large" 
			    resize="vertical" rows="2" minrows="2" restrictiontype="value"
			     max="Infinity" min="-Infinity" isround="true" class="product-input__input" 
			     defaultValue={price && price[`${props.value.name}`]}
			     onChange={(e) => setPriceOne( e.target.value)}
			     ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> : ""
            }

            {
              model1 && model1.map((v, i) => {
                return (
                  <div className="table-cell" key={i}>
                    <div className="table-cell__variation-model">
                      <div className="table-cell__edit">
                        <div className="product-input-wrapper">
                          <div className="product-input">
                            <div class="product-input__inner">
                              <div className="product-input__prefix">
                                $
                                        <span className="product-input__prefix-split"></span>
                              </div>
                              <input
                                type="number" placeholder="Insert"
                                size="large" resize="vertical" rows="2" minrows="2"
                                restrictiontype="value" max="Infinity" min="-Infinity" isround="true"
                                defaultValue={price && price[`${props.value.name},${v.name}`]}
                                class="product-input__input"
                                onChange={(e) => setPrice(v.name, e.target.value)}
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
	  
          <div className="table-cell-header" 
	 style= { model1.length === 0 && !props.value? { display: "none" } : { padding: "0px", border: "none", display: "flex", flexDirection: "column" }}
	>

            {
              model1.length === 0 ?
                <div className="table-cell">
                  <div className="table-cell__variation-model">
                    <div className="table-cell__edit">
                      <div className="product-input-wrapper">
                        <div className="product-input">
                          <div class="product-input__inner">
                            <div className="product-input__prefix">
                              $
                                  <span className="product-input__prefix-split"></span>
                            </div>
                            <input type="number" placeholder="Insert" size="large"
                              resize="vertical" rows="2" minrows="2"
                              restrictiontype="value" max="Infinity" min="-Infinity"
                              isround="true" class="product-input__input"
			      defaultValue={quantity && quantity[`${props.value.name}`]}
                             onChange={(e) => setQuantityforSpecificOne(e.target.value)}
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> : ""
            }
            {
              model1 && model1.map((v, i) => {
                return (
                  <div className="table-cell" key={i}>
                    <div className="table-cell__variation-model">
                      <div className="table-cell__edit">
                        <div className="product-input-wrapper">
                          <div className="product-input">
                            <div class="product-input__inner">
                              <div className="product-input__prefix">
                                $
                                        <span className="product-input__prefix-split"></span>
                              </div>
                              <input type="number" placeholder="Insert"
                                size="large" resize="vertical" rows="2" minrows="2"
                                restrictiontype="value" max="Infinity" min="-Infinity" isround="true"
                                class="product-input__input"
                                defaultValue={quantity && quantity[`${props.value.name},${v.name}`]}
                                onChange={(e) => setQuantityforSpecific(v.name, e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="table-cell-header" style={model1.length === 0 && !props.value ? { display: "none" } : { padding: "0px", width: "100%",border: "none", display: "flex", flexDirection: "column" }}>
            {
              model1.length === 0 ?
                <div className="table-cell">
		<div className="table-cell__variation-model">
		  <div className="table-cell__edit" style={{width:"110%",marginLeft:"-6%"}}>
		    <div className="product-input-wrapper">
		      <div className="product-input">
			<div class="product-input__inner">
			  <input type="text" placeholder="Insert" size="large" resize="vertical" rows="2"
			    minrows="2" restrictiontype="value" max="Infinity" min="-Infinity" isround="true"
			    class="product-input__input"
			  />
			</div>
		      </div>
		    </div>
		  </div>
		</div>
	      </div>: ""
            }
            {
              model1 && model1.map((v, i) => {
                return (
                  <div className="table-cell">
                    <div className="table-cell__variation-model">
                      <div className="table-cell__edit">
                        <div className="product-input-wrapper">
                          <div className="product-input">
                            <div class="product-input__inner">
                              <input type="text" placeholder="Insert" size="large" resize="vertical" rows="2"
                                minrows="2" restrictiontype="value" max="Infinity" min="-Infinity" isround="true"
                                class="product-input__input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>


        </div>
      </div>

    </div>
  )
}
