import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../../../../../app/store/ducks/itemReducer'

export const Model = (props) => {
  const dispatch = useDispatch()
  const model1 = useSelector(state => state.itemReducer.model1)
  const price = useSelector(state => state.itemReducer.price)
  const quantity = useSelector(state => state.itemReducer.quantity)
  const tier_variations = useSelector(state => state.itemReducer.tier_variations)
  const products = useSelector(state => state.itemReducer.products)
  let letnewquantity = {}
  
  const [newmodel, setnewmodel] = useState({})
  const setPrice = (index, value) => {
	 
    products[index].price = +value
    dispatch(itemActions.setProduct(products))

  }

  const setQuantityforSpecific = (index, value) => {
	products[index].quantity = +value
    dispatch(itemActions.setProduct(products))


  }
  const setCostforSpecificOne = (index, value) => {
	products[index].cost = +value
    dispatch(itemActions.setProduct(products))
      }
	const setSkuforSpecificOne = (index,value) => {
	products[index].sku = +value
	dispatch(itemActions.setProduct(products))
		}
	
  useEffect(() => {
	  console.log("runnnnn");
 
 
  }, [tier_variations])

  return (
    <div className="row">
      <div style={{ flex: "3" }}>
        <div className="data-group" style={{ flexDirection: "row" }}>
          <div className="table-cell">
            <span>{props.value && props.value.name}</span>
          </div>
        
          <div className="table-cell-header" 
	  style={{ padding: "0px", border: "none", display: "flex", flexDirection: "column" }}
	  >
                  <div className="table-cell" >
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
                                defaultValue={props && props.value && props.value.price}
                                class="product-input__input"
                                onChange={(e) => setPrice(props.index,e.target.value)}
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
             
          </div>
	  
          <div className="table-cell-header" 
	 style= {{ padding: "0px", border: "none", display: "flex", flexDirection: "column" }}
			>
            
                  <div className="table-cell" >
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
								defaultValue={props && props.value && props.value.quantity}
                                onChange={(e) => setQuantityforSpecific()}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
             
          </div>
		  <div className="table-cell-header" 
	 style= {{ padding: "0px", border: "none", display: "flex", flexDirection: "column" }}
			>
           
                  <div className="table-cell" >
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
								defaultValue={props && props.value && props.value.cost}
                                onChange={(e) => setQuantityforSpecific()}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               
          </div>
          <div className="table-cell-header" 
		  style={{ padding: "0px", width: "100%",border: "none", display: "flex", flexDirection: "column" }}
		  >
           
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
              
          </div>

        </div>
      </div>

    </div>
  )
}
