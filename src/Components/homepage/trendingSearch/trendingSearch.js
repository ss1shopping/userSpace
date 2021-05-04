import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../app/constant/api/apiConstants'

export const TrendingSearch = () => {
  const category = useSelector(state => state.categoryReducer.category)

  return (
    <div className="trendSearch-item-list" >
      <Link className="trendSearch-item" to="/">
        <div className="item">
          <div className="item-textbox">
            <div className="item-text">
              <div className="item-name">Women Sandal</div>
              <div className="item-num">257k+ products</div>
            </div>
          </div>

          <div className="img-holder">
            <img className="item-img" src="https://cf.shopee.vn/file/4fc8585500bb7cf8c11a3e4c15d47cc1"/>
          </div>
        </div>
      </Link>
      {
        category && category.branches.map((v, i) => {
          return (
            <a className="trendSearch-item" href="">
              <div className="item">
                <div className="item-textbox">
                  <div className="item-text">
                    <div className="item-name">{v.name}</div>
                    <div className="item-num">2m+ products</div>
                  </div>
                </div>
                <div className="img-holder">
                  <img className="item-img" src={`${API_URL}${v.icon}`}></img>
                </div>
              </div>
            </a>

          )
        })
      }
      {/* <a className="trendSearch-item" href="">
        <div className="item">
          <div className="item-textbox">
            <div className="item-text">
              <div className="item-name">Toys</div>
              <div className="item-num">1m+ products</div>
            </div>
          </div>
          <div className="img-holder">
            <div className="item-img"></div>
          </div>
        </div>

      </a>

     
      <a className="trendSearch-item" href="">
        <div className="item">
          <div className="item-textbox">
            <div className="item-text">
              <div className="item-name">Shoes</div>
              <div className="item-num">325k+ products</div>
            </div>
          </div>
          <div className="img-holder">
            <div className="item-img"></div>
          </div>
        </div>

      </a>

      <a className="trendSearch-item" href="">
        <div className="item">
          <div className="item-textbox">
            <div className="item-text">
              <div className="item-name">Card</div>
              <div className="item-num">2m+ products</div>
            </div>
          </div>
          <div className="img-holder">
            <div className="item-img"></div>
          </div>
        </div>

      </a> */}

    </div>

  )
}
