import React, { useEffect, useState } from 'react'

import Gallery from 'react-image-gallery';
//import {useSelector} from "react-redux";
import {connect,useSelector,useDispatch} from 'react-redux';
const ImageProduct=(props) =>{
    const [Images, setImages] = useState([])
const itemtoedit =useSelector(state=>state.itemReducer.itemtoEdit)
useEffect(() => {
       if (itemtoedit) {
           let images = [];

           itemtoedit && itemtoedit.image.map(item => {
                 const editimg=item.replace("public","http://localhost:4000")
               images.push({
                   original: `${editimg}`,
                   thumbnail:`${editimg}`

               })
           })
           setImages(images)
       }else{
           return(
               <div>  no Image</div>
           )
       }
   }, [])

    return (
        <div >
            <Gallery items={Images} />


        </div>
    )
}

export default ImageProduct
