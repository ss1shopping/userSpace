import React from 'react'
import { Container, Row, Col, Carousel } from "react-bootstrap"
import { Link } from 'react-router-dom'
import DefaultLayout from '../../app/layout/Defaultlayout'
import Category from '../Category/Category'

const Homepage = () => {
  return (
    <DefaultLayout>


      <div className="addbackground">
        <section className="homepage">
          <Category></Category>
          <div className="mycarousel">
            <Carousel>
              <Carousel.Item>
                <img
                  className="slide1"
                  src="https://images.wallpaperscraft.com/image/sneaker_foot_smoke_117714_3840x2400.jpg?fbclid=IwAR3LL1B7O8SyypjMAPBPPqdiywpW-W39wiKmdPxK2qiNkC5xKsqqJUNvpL4"
                  alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide2"
                  src="https://images.wallpaperscraft.com/image/sneakers_anonymous_hoodie_166078_3840x2400.jpg?fbclid=IwAR2PY7j3YtBAB3-Mu8KMsFkPKt1pfXCJU7nK4nIqWRAR64e_9EopquajeB4"
                  alt="Third slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="slide3"
                  src="https://images.wallpaperscraft.com/image/sneakers_legs_tattoo_168288_3840x2400.jpg?fbclid=IwAR1WZ7CrbC4ZOw2UzQu5DyLXBN_g9VvTMwGh-STi8GHIM1C2PMVCIgPp9aI"
                  alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="homepage--banner">

          </div>

          <div class="homepage--flashsale">
            <div class="outerbox">
              <div id="flashsale--header">
                <div class="icon-container">
                  <div class="flashsale-img"></div>
                </div>
                <button class="btn--seemore">See more</button>
              </div>

              <div class="flashsale-item-list">
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

              </div>
            </div>

          </div>



          <div className="homepage--trendSearch">
            <div class="outerbox">
              <div id="trendSearch--header">
                <div class="icon-container">
                    <span class="trendSearch-txt">trend search</span>                  
                </div>
                <button class="btn--seemore">See more</button>
              </div>

              <div class="trendSearch-item-list" >
                <a class="trendSearch-item" href="">
                  <div class="item">
                    <div class="item-textbox">
                      <div class="item-text">
                        <div class="item-name">Women Sandal</div>
                        <div class="item-num">257k+ products</div>
                      </div>
                    </div>

                    <div class="img-holder">
                      <div class="item-img"></div>
                    </div>
                  </div>

                </a>

                <a class="trendSearch-item" href="">
                  <div class="item">
                    <div class="item-textbox">
                      <div class="item-text">
                        <div class="item-name">Toys</div>
                        <div class="item-num">1m+ products</div>
                      </div>
                    </div>
                    <div class="img-holder">
                      <div class="item-img"></div>
                    </div>
                  </div>

                </a>

                <a class="trendSearch-item" href="">
                  <div class="item">
                    <div class="item-textbox">
                      <div class="item-text">
                        <div class="item-name">Food</div>
                        <div class="item-num">2m+ products</div>
                      </div>
                    </div>
                    <div class="img-holder">
                      <div class="item-img"></div>
                    </div>
                  </div>

                </a>

                <a class="trendSearch-item" href="">
                  <div class="item">
                    <div class="item-textbox">
                      <div class="item-text">
                        <div class="item-name">Shoes</div>
                        <div class="item-num">325k+ products</div>
                      </div>
                    </div>
                    <div class="img-holder">
                      <div class="item-img"></div>
                    </div>
                  </div>

                </a>

                <a class="trendSearch-item" href="">
                  <div class="item">
                    <div class="item-textbox">
                      <div class="item-text">
                        <div class="item-name">Card</div>
                        <div class="item-num">2m+ products</div>
                      </div>
                    </div>
                    <div class="img-holder">
                      <div class="item-img"></div>
                    </div>
                  </div>

                </a>

              </div>


            </div>
          </div>

          <div className="homepage--suggest">
            <div class="outerbox">
              <div id="suggestion-header">
                <div class="suggest-txt-wrapper">
                  <span class="suggest-txt">suggestion</span>
                </div>
              </div>

              <div class="suggestion-item-list">
                <div class="suggest-item-outer">
                  <a class="suggest-item-inner" href="">
                    <div class="item-wrap">
                      <div class="item">
                        <div class="item-img">
                          <img src="https://cf.shopee.vn/file/d7e23ea65af2019d9777449d864b1704_tn" class="img-product"></img>
                        </div>

                        <div class="txt-box">
                          <div class="product-desc-wrapper">
                            <div class="product-desc">
                              <div class="product-desc-txt">[Mã CBSD28A hoàn 13K xu đơn 99k] Túi Xách Đeo Vai Kiểu Dáng Đơn Giản Thời Trang Cho Nữ</div>
                            </div>
                          </div>
                          <div class="price-tag">
                            <div class="price-wrapper">
                              <span class="price">$100</span>
                            </div>
                            <div class="sold-num">123 Sold</div>
                          </div>
                        </div>

                        <div class="item-hover-footer">See more like this</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="suggest-item-outer">
                  <a class="suggest-item-inner" href="">
                    <div class="item-wrap">
                      <div class="item">
                        <div class="item-img">
                          <img src="https://cf.shopee.vn/file/d7e23ea65af2019d9777449d864b1704_tn" class="img-product"></img>
                        </div>

                        <div class="txt-box">
                          <div class="product-desc-wrapper">
                            <div class="product-desc">
                              <div class="product-desc-txt">[Mã CBSD28A hoàn 13K xu đơn 99k] Túi Xách Đeo Vai Kiểu Dáng Đơn Giản Thời Trang Cho Nữ</div>
                            </div>
                          </div>
                          <div class="price-tag">
                            <div class="price-wrapper">
                              <span class="price">$100</span>
                            </div>
                            <div class="sold-num">123 Sold</div>
                          </div>
                        </div>

                        <div class="item-hover-footer">See more like this</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="suggest-item-outer">
                  <a class="suggest-item-inner" href="">
                    <div class="item-wrap">
                      <div class="item">
                        <div class="item-img">
                          <img src="https://cf.shopee.vn/file/d7e23ea65af2019d9777449d864b1704_tn" class="img-product"></img>
                        </div>

                        <div class="txt-box">
                          <div class="product-desc-wrapper">
                            <div class="product-desc">
                              <div class="product-desc-txt">[Mã CBSD28A hoàn 13K xu đơn 99k] Túi Xách Đeo Vai Kiểu Dáng Đơn Giản Thời Trang Cho Nữ</div>
                            </div>
                          </div>
                          <div class="price-tag">
                            <div class="price-wrapper">
                              <span class="price">$100</span>
                            </div>
                            <div class="sold-num">123 Sold</div>
                          </div>
                        </div>

                        <div class="item-hover-footer">See more like this</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="suggest-item-outer">
                  <a class="suggest-item-inner" href="">
                    <div class="item-wrap">
                      <div class="item">
                        <div class="item-img">
                          <img src="https://cf.shopee.vn/file/d7e23ea65af2019d9777449d864b1704_tn" class="img-product"></img>
                        </div>

                        <div class="txt-box">
                          <div class="product-desc-wrapper">
                            <div class="product-desc">
                              <div class="product-desc-txt">[Mã CBSD28A hoàn 13K xu đơn 99k] Túi Xách Đeo Vai Kiểu Dáng Đơn Giản Thời Trang Cho Nữ</div>
                            </div>
                          </div>
                          <div class="price-tag">
                            <div class="price-wrapper">
                              <span class="price">$100</span>
                            </div>
                            <div class="sold-num">123 Sold</div>
                          </div>
                        </div>

                        <div class="item-hover-footer">See more like this</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="suggest-item-outer">
                  <a class="suggest-item-inner" href="">
                    <div class="item-wrap">
                      <div class="item">
                        <div class="item-img">
                          <img src="https://cf.shopee.vn/file/d7e23ea65af2019d9777449d864b1704_tn" class="img-product"></img>
                        </div>

                        <div class="txt-box">
                          <div class="product-desc-wrapper">
                            <div class="product-desc">
                              <div class="product-desc-txt">[Mã CBSD28A hoàn 13K xu đơn 99k] Túi Xách Đeo Vai Kiểu Dáng Đơn Giản Thời Trang Cho Nữ</div>
                            </div>
                          </div>
                          <div class="price-tag">
                            <div class="price-wrapper">
                              <span class="price">$100</span>
                            </div>
                            <div class="sold-num">123 Sold</div>
                          </div>
                        </div>

                        <div class="item-hover-footer">See more like this</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="suggest-item-outer">
                  <a class="suggest-item-inner" href="">
                    <div class="item-wrap">
                      <div class="item">
                        <div class="item-img">
                          <img src="https://cf.shopee.vn/file/d7e23ea65af2019d9777449d864b1704_tn" class="img-product"></img>
                        </div>

                        <div class="txt-box">
                          <div class="product-desc-wrapper">
                            <div class="product-desc">
                              <div class="product-desc-txt">[Mã CBSD28A hoàn 13K xu đơn 99k] Túi Xách Đeo Vai Kiểu Dáng Đơn Giản Thời Trang Cho Nữ</div>
                            </div>
                          </div>
                          <div class="price-tag">
                            <div class="price-wrapper">
                              <span class="price">$100</span>
                            </div>
                            <div class="sold-num">123 Sold</div>
                          </div>
                        </div>

                        <div class="item-hover-footer">See more like this</div>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </section>
      </div>
    </DefaultLayout>
  )
}
export default Homepage;