import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../../../../../app/store/ducks/itemReducer'
import { categoryActions } from '../../../../../app/store/ducks/categoryReducer'
import { DefaultLayout } from '../../defaultLayout'
import { DefaultLayout2 } from "../DefaultLayout2"
import { Link } from 'react-router-dom'
export const ChooseCategory = () => {
  const dispatch = useDispatch()
  let chooseCategoryToAdd = useSelector(state => state.categoryReducer.chooseCategoryToAdd)
  const itemToUpload = useSelector(state => state.itemReducer.itemToUpload)
  const category = useSelector(state => state.categoryReducer.category)
  const [category1, setcategory1] = useState()
  const [category2, setcategory2] = useState()
  const [category3, setcategory3] = useState()
  const [category4, setcategory4] = useState()
  const [type1, settype1] = useState()
  const [type2, settype2] = useState()
  const [type3, settype3] = useState()
  const [type4, settype4] = useState()
  const [type5, settype5] = useState()

  const handleChooseCategory1toAdd = (index, value) => {
    chooseCategoryToAdd[0] = value
    setcategory1(value)
    settype1(index)
    dispatch(categoryActions.chooseCategoryToAdd(chooseCategoryToAdd))
  }
  const handleChooseCategory2toAdd = (index, value) => {
    chooseCategoryToAdd[1] = value
    setcategory2(value)
    settype2(index)
    dispatch(categoryActions.chooseCategoryToAdd(chooseCategoryToAdd))
  }
  const handleChooseCategory3toAdd = (index, value) => {
    chooseCategoryToAdd[2] = value
    setcategory3(value)
    settype3(index)
    dispatch(categoryActions.chooseCategoryToAdd(chooseCategoryToAdd))
  }
  const handleChooseCategory4toAdd = (index, value) => {
    chooseCategoryToAdd[3] = value
    setcategory4(value)
    settype4(index)
    dispatch(categoryActions.chooseCategoryToAdd(chooseCategoryToAdd))
  }
  const handleChooseCategory5toAdd = (index, value) => {
    chooseCategoryToAdd[4] = value
    setcategory4(value)
    settype5(index)
    dispatch(categoryActions.chooseCategoryToAdd(chooseCategoryToAdd))
  }
  const handleAddItem = (value) => {
    itemToUpload.name = value
    dispatch(itemActions.itemToUpload(itemToUpload))
  }
  useEffect(() => {
    dispatch(categoryActions.getCategory())
  }, [])
  return (
    <DefaultLayout2>
      <div className="additem">
        <div className="additem__wrap">
          <div className="header">
            <h2 className="title">Add a product</h2>
            <p className="desc">Please choose the suitable category for your product.</p>
          </div>

          <div class="product-name-edit">
            <label class="product-label">Product name:</label>
            <div class="input-wrap">
              <div class="item-form">
                <div class="item-content">
                  <div class="edit-input">
                    <div class="name-input">
                      <input class="shop-input" type="text" placeholder="Insert name here" size="large" minLength="10" onChange={(e) => handleAddItem(e.target.value)}></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="category-selector">
            <div className="selector">
              <div className="search-input">
                <div className="search-input__inner">
                  <div className="search-input__prefix">
                    <i className="search-input__prefix-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M31.7 31.7c-.4.4-1 .4-1.3 0l-8.9-8.9c-2.3 2-5.2 3.2-8.5 3.2-7.2 0-13-5.8-13-13S5.8 0 13 0s13 5.8 13 13c0 3.2-1.2 6.2-3.2 8.5l8.9 8.9c.4.3.4.9 0 1.3zM24 13c0-6.1-4.9-11-11-11S2 6.9 2 13s4.9 11 11 11 11-4.9 11-11z" fill-rule="evenodd" clip-rule="evenodd"></path>
                      </svg>
                    </i>
                  </div>
                  <input className="shop-input" type="text" placeholder="Category name" size="large" minLength="10"></input>
                </div>
              </div>
              <div class="category-wrap">
                <div class="category-list">
                  <ul class="scroll-item">
                    {
                      category && category.branches.map((v, i) => {
                        return (

                          <li key={i} className={type1 === i ? `category-item-active` : `category-item`} onClick={() => handleChooseCategory1toAdd(i, v)}>
                            <p class="category-item__text">{v.name}</p>
                            <i class="category-item__next-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                              </svg>
                            </i>
                          </li>
                        )
                      })
                    }

                  </ul>
                  <ul class="scroll-item">
                    {
                      category1 && category1.branches.map((v, i) => {
                        return (
                          <li key={i} className={type2 === i ? `category-item-active` : `category-item`} onClick={() => handleChooseCategory2toAdd(i, v)}>
                            <p class="category-item__text">{v.name}</p>
                            <i class="category-item__next-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                              </svg>
                            </i>
                          </li>
                        )
                      })
                    }
                  </ul>
                  <ul class="scroll-item">
                    {
                      category2 && category2.branches.map((v, i) => {
                        return (
                          <li key={i} className={type3 === i ? `category-item-active` : `category-item`} onClick={() => handleChooseCategory3toAdd(i, v)}>
                            <p class="category-item__text">{v.name}</p>
                            <i class="category-item__next-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                              </svg>
                            </i>
                          </li>
                        )
                      })
                    }

                  </ul>
                  <ul class="scroll-item">
                    {
                      category3 && category3.branches.map((v, i) => {
                        return (
                          <li key={i} className={type4 === i ? `category-item-active` : `category-item`} onClick={() => handleChooseCategory4toAdd(i, v)}>
                            <p class="category-item__text">{v.name}</p>
                            <i class="category-item__next-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                              </svg>
                            </i>
                          </li>
                        )
                      })
                    }
                  </ul>
                  <ul class="scroll-item">
                    {
                      category4 && category4.branches.map((v, i) => {
                        return (
                          <li key={i} className={type5 === i ? `category-item-active` : `category-item`} onClick={() => handleChooseCategory5toAdd(i, v)}>
                            <p class="category-item__text">{v.name}</p>
                            <i class="category-item__next-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                              </svg>
                            </i>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div class="category-selected">
              <span class="category-selected__label">Category chosen:</span>
              <span class="category-selected-select">
                {
                  chooseCategoryToAdd && chooseCategoryToAdd.map((v, i) => {
                    return (
                      <span key={i}>
                        {v.name} {'>'}
                      </span>
                    )
                  })
                }
              </span>
              <span class="category-selected__no-select" style={chooseCategoryToAdd.length === 0 ? { display: "block" } : { display: "none" }}>
                No category selected
              </span>
            </div>
          </div>
          <Link to="/banhang/add-product" type="button" disabled={itemToUpload.name ? true : false} class="cate-confirm-btn">
            <span>Next</span>
          </Link>
        </div>

      </div>
    </DefaultLayout2>
  )
}
