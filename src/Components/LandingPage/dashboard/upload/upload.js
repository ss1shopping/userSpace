 import React,{useCallback, useState,useEffect} from 'react'
 import {Container, InputGroup, Row,Col} from "react-bootstrap"
 import {useDropzone} from 'react-dropzone'

import FooterDashboard from "../../../footer/footerDashboard"
import NavbarCustom from '../navbar/navbar'
import {useDispatch,useSelector} from "react-redux"
import { itemActions } from '../../../../app/store/ducks/itemReducer'
import Axios from 'axios'
 export const Upload = () => {
   
   // const [urlImage,setUrlImage]=useState()
    const [name,setName]=useState()
    const [price,setPrice]=useState()
    const [quanttity,setQuantity]=useState()
    const [desc,setDesc]=useState()
    const urlimage=useSelector(state=>state.itemReducer.urlImage)
    const message = useSelector(state => state.itemReducer.msg)
    function MyDropzone() {
    
        const onDrop = useCallback(acceptedFiles => {
          const formData=new FormData()
          const config={
            header:{"content-type":"multiple/form-data"}
          }
          formData.append("file",acceptedFiles[0])
          Axios.post("http://localhost:4000/item/uploadImage",formData,config)
          .then(res=>{
            console.log(res.data);
            // let newarray=[...urlimage,res.data.path]
            dispatch(itemActions.addImageSuccessful(res.data))

          }
            
            )
        //  dispatch(itemActions.addImage(formData))
          // setUrlImage(acceptedFiles)
          //   console.log(acceptedFiles);
            //URL.createObjectURL(acceptedFiles[0])
        //   urlImage.push(URL.createObjectURL(acceptedFiles[0]))
         // console.log(urlImage);
        
        }, [])
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      
        return (
          <div className="drop" {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drop image in here</p>
            }
          </div>
        )
      }
let a;
const dispatch=useDispatch()
  useEffect(() => {
    
  }, [])
   
  const addItem=()=>{
   dispatch(itemActions.uploaditem(name,price,quanttity,desc,urlimage))
   dispatch(itemActions.deleteUrlImage())
  }
 
      
     return (
         <div className="upload">
             <NavbarCustom></NavbarCustom>
             <div className="content">

           <Container>
           <Row className="padding">
             <form>

           <Col md={12}>
           
             <h2>upload sản phẩm</h2>
           <div className="upload__body">
              <input type="text" name="name" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
           </div>
           </Col>
           <Col md={12} >
           <div className="upload__body">
              <input type="text" name="quantity" placeholder="quantity" onChange={(e)=>setQuantity(e.target.value)}/>
           </div> 
           </Col>
           <Col md={12} >
           <div className="upload__body">
              <input type="text" name="price" placeholder="price" onChange={(e)=>setPrice(e.target.value)}/>
           </div>
           </Col >
           <Col md={12} >
           <div className="upload__body">
             <textarea name="description" placeholder="description" onChange={(e)=>setDesc(e.target.value)}></textarea>
           </div></Col>
           <Col md={12}>
           <div className='upload__body'>
         <MyDropzone className="file"
                      multiple 
         ></MyDropzone>
           </div>
           <div className="upload__body">
     <span>{message}</span>
           </div>
           </Col>
           <Col md={12}>
             <div className="upload__body">
              <input  type="reset" className="btn" onClick={()=>addItem()} value="upload"/>

             </div>
           </Col>
             </form>
           {a}
           <FooterDashboard></FooterDashboard>
           </Row>    
           </Container>  
             </div>
         </div>
     )
 }
 