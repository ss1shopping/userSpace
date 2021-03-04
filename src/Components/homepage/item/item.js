import React from 'react'

export const Item = (props) => {
  return (
    <div class="suggest-item-outer">
      <a class="suggest-item-inner" href="">
        <div class="item-wrap">
          <div class="item">
            <div class="item-img">
              <img src={props.item && props.item.tier_variations[0].image[0]} class="img-product" />
            </div>

            <div class="txt-box">
              <div class="product-desc-wrapper">
                <div class="product-desc">
                  <div class="product-desc-txt">{props.item.name}</div>
                </div>
              </div>
              <div class="price-tag">
                <div class="price-wrapper">
                  <span class="price">${props.item.priceMin}-${props.item.priceMax}</span>
                </div>
                <div class="sold-num">{props.item.sold} Sold</div>
              </div>
            </div>

            <div class="item-hover-footer">See more like this</div>
          </div>
        </div>
      </a>
    </div>
  )
}
