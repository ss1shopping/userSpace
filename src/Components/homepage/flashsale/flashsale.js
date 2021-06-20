import React from 'react'
import { Link } from 'react-router-dom'

export const Flashsale = () => {
  return (
    <div className="homepage--flashsale">
      <div className="outerbox">
        <div id="flashsale--header">
          <div className="icon-container">
            <div className="flashsale-img"></div>
          </div>
          <button className="btn--seemore">See more</button>
        </div>

        <div className="flashsale-item-list">
          <Link className="flashsale-item" to="/">
            <div className="item">
              <div className="item-img-wrapper">
                <div className="item-img"></div>
              </div>
              <div className="item-price-wrapper">
                <span className="item-price">$200</span>
              </div>
            </div>
          </Link>
          <a className="flashsale-item" href="">
            <div className="item">
              <div className="item-img-wrapper">
                <div className="item-img"></div>
              </div>
              <div className="item-price-wrapper">
                <span className="item-price">$200</span>
              </div>
            </div>
          </a>

          <a className="flashsale-item" href="">
            <div className="item">
              <div className="item-img-wrapper">
                <div className="item-img"></div>
              </div>
              <div className="item-price-wrapper">
                <span className="item-price">$200</span>
              </div>
            </div>
          </a>

          <a className="flashsale-item" href="">
            <div className="item">
              <div className="item-img-wrapper">
                <div className="item-img"></div>
              </div>
              <div className="item-price-wrapper">
                <span className="item-price">$200</span>
              </div>
            </div>
          </a>

          <a className="flashsale-item" href="">
            <div className="item">
              <div className="item-img-wrapper">
                <div className="item-img"></div>
              </div>
              <div className="item-price-wrapper">
                <span className="item-price">$200</span>
              </div>
            </div>
          </a>

          <a className="flashsale-item" href="">
            <div className="item">
              <div className="item-img-wrapper">
                <div className="item-img"></div>
              </div>
              <div className="item-price-wrapper">
                <span className="item-price">$200</span>
              </div>
            </div>
          </a>

          <a className="flashsale-item" href="">
            <div className="item">
              <div className="item-img-wrapper">
                <div className="item-img"></div>
              </div>
              <div className="item-price-wrapper">
                <span className="item-price">$200</span>
              </div>
            </div>
          </a>

        </div>
      </div>

    </div>
  )
}
