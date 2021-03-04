import React, { useEffect, useState } from 'react'

import Gallery from 'react-image-gallery';
import { useDispatch, useSelector } from "react-redux"
const ImageSlider = (props) => {
  const [Images, setImages] = useState([])
  const item = useSelector(state => state.itemReducer.detailItem)
  const itemtoedit = props.tier_variations && props.tier_variations
  useEffect(() => {
    setImages([])
  }, [item])

  let images = [];
  item && item.tier_variations.map(item => {
    let editimg = ""
    console.log(item);
    item.images.map(i => {
      editimg = i.replace("public", "http://localhost:4000")
      Images.push({
        showPlayButton: false,
        original: `${editimg}`,
        thumbnail: `${editimg}`
      })

    })

  })
  // setImages(images)


  return (
    <div className="detailItem--image">
      <Gallery showPlayButton={false} showFullscreenButton={false} showBullets={false} slideOnThumbnailOver={true} infinite={false} items={Images} />

    </div>
  )
}

export default ImageSlider
