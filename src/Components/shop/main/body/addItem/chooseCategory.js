import React from 'react'
import { DefaultLayout } from '../../defaultLayout'
import { DefaultLayout2 } from "../DefaultLayout2"
export const ChooseCategory = () => {
  return (
    <DefaultLayout2>
      <div className="additem">
        <div className="additem__wrap">
          <div className="header">
            <h2 className="title">Add a product</h2>
            <p className="desc">Please choose the suitable category for your product.</p>
          </div>

          <div className="product-name-edit">
            <label className="product-label">Product name:</label>
            <div className="input-wrap">
              <div className="item-form">
                <div className="item-content">
                  <div className="edit-input">
                    <div className="name-input">
                      <input className="shop-input" type="text" placeholder="Insert name here" size="large" minLength="10"></input>                     
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
              <div className="category-wrap">
                <div className="category-list">
                  <ul className="scroll-item">
                    <li className="category-item">
                      <p className="category-item__text">Men's wear</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Women's wear</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Shoe</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Skin Care</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Electronic</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Food</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Watch</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Accessory</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Pet's Good</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Baby's wear</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Vehicle</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Voucher</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Toy</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                    <li className="category-item">
                      <p className="category-item__text">Wallet</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                  </ul>
                  <ul className="scroll-item">
                    <li className="category-item">
                      <p className="category-item__text">Men's wear</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                  </ul>
                  <ul className="scroll-item">
                    <li className="category-item">
                      <p className="category-item__text">Men's wear</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                  </ul>
                  <ul className="scroll-item">
                    <li className="category-item">
                      <p className="category-item__text">Men's wear</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                  </ul>
                  <ul className="scroll-item">
                    <li className="category-item">
                      <p className="category-item__text">Men's wear</p>
                      <i className="category-item__next-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                        </svg>
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="category-selected">
              <span className="category-selected__label">Category chosen:</span>
              <span className="category-selected__no-select">No category selected</span>
            </div>
          </div>
          <button type="button" disabled="disabled" className="cate-confirm-btn">
              <span>Next</span>
            </button>
        </div>
        
      </div>
    </DefaultLayout2>
  )
}
