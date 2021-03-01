import React, { useEffect, useState } from 'react'

import Gallery from 'react-image-gallery';

const ImageSlider = (props) => {
  const [Images, setImages] = useState([])
  const itemtoedit = props.tier_variations[0]
  useEffect(() => {
    if (itemtoedit) {
      let images = [];
      itemtoedit && itemtoedit.image.map(item => {
        // const editimg = item.replace("public", "http://localhost:4000")
        images.push({
          showPlayButton: false,
          original: `${item}`,
          thumbnail: `${item}`

        })
      })
      setImages(images)
    } else {
      return (
        <div>  no Image</div>
      )
    }
  }, [])

  return (
    <div className="detailItem--image">
      <Gallery showPlayButton={false} showFullscreenButton={false} showBullets={false} slideOnThumbnailOver={true} infinite={false} items={Images} />


    </div>
  )
}

export default ImageSlider
