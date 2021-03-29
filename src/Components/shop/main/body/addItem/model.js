import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../../../../../app/store/ducks/itemReducer'

export const Model = (props) => {
  const dispatch = useDispatch()
  const model1 = useSelector(state => state.itemReducer.model1)
  const price = useSelector(state => state.itemReducer.price)
  const quantity = useSelector(state => state.itemReducer.quantity)
  let letnewquantity = {}
  const [newmodel, setnewmodel] = useState({})
  const setPrice = (name, value) => {
    price[`${props.value.name},${name}`] = +value
    dispatch(itemActions.setprice(price))
    console.log(price);
  }

  const setQuantity = (name, e) => {
    console.log(name);
    quantity[`${props.value.name},${name}`] = e.target.value
    dispatch(itemActions.setQuantity(quantity))
    console.log(quantity);
  }


  return (
    <div className="row">
      <div style={{ flex: "3" }}>
        <div className="data-group">
          <div className="table-cell">
            <span>{props.value && props.value.name}</span>
          </div>
          <div>
            {
              model1 && model1.map((v, i) => {
                return (
                  <div className="table-cell">
                    <div className="table-cell__variation-model">
                      <div className="table-cell__edit">
                        <div className="product-input-wrapper">
                          <div className="product-input">
                            <div class="product-input__inner">
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
          <div>
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
          <div>
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
                                onChange={(e) => setQuantity(v.name, e)}
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
          <div>
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
                                onChange={(e) => setQuantity(v.name, e)} />
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
