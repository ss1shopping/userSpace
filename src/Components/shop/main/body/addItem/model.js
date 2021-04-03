import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../../../../../app/store/ducks/itemReducer'

export const Model = (props) => {
  const dispatch = useDispatch()
  const model1 = useSelector(state => state.itemReducer.model1)
  const price = useSelector(state => state.itemReducer.price)
  const quantity = useSelector(state => state.itemReducer.quantity)
  const tier_variations = useSelector(state => state.itemReducer.tier_variations)
  let letnewquantity = {}
  console.log(props);
  const [newmodel, setnewmodel] = useState({})
  const setPrice = (name, value) => {
    price[`${props.value.name},${name}`] = +value
    dispatch(itemActions.setprice(price))
    console.log(price);
  }

  const setQuantityforSpecific = (name, value) => {
    console.log(value);
    quantity[`${props.value.name},${name}`] = +value
    // console.log(letnewquantity);
    // let mergeObject = ({ ...quantity, ...letnewquantity });
    dispatch(itemActions.setQuantity(quantity))
    console.log(quantity);
  }


  return (
    <div className="row">
      <div style={{ flex: "3" }}>
        <div className="data-group" style={{flexDirection:"row"}}>
          <div className="table-cell">
            <span>{props.value && props.value.name}</span>
          </div>
          <div className="table-cell-header" style={model1.length === 0?{ display:"none"}:{padding:"0px", border:"none", display:"flex"}}>
            {
              model1 && model1.map((v, i) => {
                return (
                  <div className="table-cell">
                    <div className="table-cell__variation-model">
                      <div className="table-cell__edit">
                        <div className="product-input-wrapper">
                          <div className="product-input">
                            <div class="product-input__inner" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
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
          <div className="table-cell-header" style={{padding:"0px", border:"none"}}>
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
                            <input type="text" placeholder="Insert" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="value" max="Infinity" min="-Infinity" isround="true" class="product-input__input" ></input>
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
                              <input
                                type="text" placeholder="Insert"
                                size="large" resize="vertical" rows="2" minrows="2"
                                restrictiontype="value" max="Infinity" min="-Infinity" isround="true"

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
          <div className="table-cell-header" style={{padding:"0px",border:"none"}}>
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
                            <input type="text" placeholder="Insert" size="large"
                              resize="vertical" rows="2" minrows="2"
                              restrictiontype="value" max="Infinity" min="-Infinity"
                              isround="true" class="product-input__input"
                            // onChange={(e) => setQuantity(e.target.value)}
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
                              <input type="text" placeholder="Insert"
                                size="large" resize="vertical" rows="2" minrows="2"
                                restrictiontype="value" max="Infinity" min="-Infinity" isround="true"
                                class="product-input__input"
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
          <div className="table-cell-header" style={{padding:"0px",border:"none"}}>
            {
              model1.length === 0 ?
                <div className="table-cell">
                  <div className="table-cell__variation-model">
                    <div className="table-cell__edit">
                      <div className="product-input-wrapper">
                        <div className="product-input">
                          <div class="product-input__inner">
                            <input type="text" placeholder="Insert" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="value" max="Infinity" min="-Infinity" isround="true" class="product-input__input"></input>
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
