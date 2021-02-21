import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ImgSlider = (props) => {
  console.log(props.images);
  return (



    <Carousel autoComplete infiniteLoop autoPlay showThumbs={false} >

      {props.images.map((index, key) => {
        const img1 = index.replace("public", "http://localhost:4000")
        return (
          <div key={key}>
            <LazyLoadImage src={img1} alt="description" effect="blur"

            />
          </div>)
      })}



    </Carousel>

  )

}

export default ImgSlider
