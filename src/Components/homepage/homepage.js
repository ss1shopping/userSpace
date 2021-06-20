import React from 'react'
import { Carousel } from "react-bootstrap"
import { Link } from 'react-router-dom'
import DefaultLayout from '../../app/layout/Defaultlayout'
import Category from '../Category/Category'
import { Flashsale } from './flashsale/flashsale'
import { Suggestion } from './suggestion/suggestion'
import { TrendingSearch } from './trendingSearch/trendingSearch'

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
          <Flashsale></Flashsale>
          <div className="homepage--trendSearch">
            <div className="outerbox">
              <div id="trendSearch--header">
                <div className="icon-container">
                  <span className="trendSearch-txt">trend search</span>
                </div>
                <button className="btn--seemore">See more</button>
              </div>
              <TrendingSearch></TrendingSearch>
            </div>
          </div>
          <Suggestion></Suggestion>

        </section>
      </div>
    </DefaultLayout>
  )
}
export default Homepage;