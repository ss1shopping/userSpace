import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImgSlider=(props)=>{
 console.log(props.images);
    return (
      <Carousel autoComplete infiniteLoop autoPlay >

        {props.images.map((index,key)=>{
          const img1=index.replace("public","http://localhost:4000")
          return(
          <div key={key}>
           <img src={img1} />
           </div>)
        })}



    </Carousel>
    )

}

export default ImgSlider
