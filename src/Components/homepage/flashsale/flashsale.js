import React from 'react'
import { Link } from 'react-router-dom'

export const Flashsale = () => {
  return (
    <div class="homepage--flashsale">
      <div class="outerbox">
        <div id="flashsale--header">
          <div class="icon-container">
            <div class="flashsale-img"></div>
          </div>
          <button class="btn--seemore">See more</button>
        </div>

        <div class="flashsale-item-list">
          <Link class="flashsale-item" to="/">
            <div class="item">
              <div class="item-img-wrapper">
                <div class="item-img"></div>
              </div>
              <div class="item-price-wrapper">
                <span class="item-price">$200</span>
              </div>
            </div>
          </Link>
          {/* <a class="flashsale-item" href="">
            <div class="item">
              <div class="item-img-wrapper">
                <div class="item-img"></div>
              </div>
              <div class="item-price-wrapper">
                <span class="item-price">$200</span>
              </div>
            </div>
          </a>

          <a class="flashsale-item" href="">
            <div class="item">
              <div class="item-img-wrapper">
                <div class="item-img"></div>
              </div>
              <div class="item-price-wrapper">
                <span class="item-price">$200</span>
              </div>
            </div>
          </a>

          <a class="flashsale-item" href="">
            <div class="item">
              <div class="item-img-wrapper">
                <div class="item-img"></div>
              </div>
              <div class="item-price-wrapper">
                <span class="item-price">$200</span>
              </div>
            </div>
          </a>

          <a class="flashsale-item" href="">
            <div class="item">
              <div class="item-img-wrapper">
                <div class="item-img"></div>
              </div>
              <div class="item-price-wrapper">
                <span class="item-price">$200</span>
              </div>
            </div>
          </a>

          <a class="flashsale-item" href="">
            <div class="item">
              <div class="item-img-wrapper">
                <div class="item-img"></div>
              </div>
              <div class="item-price-wrapper">
                <span class="item-price">$200</span>
              </div>
            </div>
          </a>

          <a class="flashsale-item" href="">
            <div class="item">
              <div class="item-img-wrapper">
                <div class="item-img"></div>
              </div>
              <div class="item-price-wrapper">
                <span class="item-price">$200</span>
              </div>
            </div>
          </a> */}

        </div>
      </div>

    </div>
  )
}
