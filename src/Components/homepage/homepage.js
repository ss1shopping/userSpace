import React from 'react'
import { Container, Row, Col, Carousel } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (

<section className="homepage">
    
<Carousel>
  <Carousel.Item>
    <img
      className="slide1"
      src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/03/reebok-zig-kinetica-concept-type-1-mood-1-696x464.jpg?fit=700%2C20000&quality=95&ssl=1"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide2"
      src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="nslide3"
      src="https://saigonsneaker.com/wp-content/uploads/2019/11/nhung-doi-giay-trang-dep-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Link to="/shop" className="shopNow">SHOP NOW</Link>

</section>
   )
    }
export default Homepage;