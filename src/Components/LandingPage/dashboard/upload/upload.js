 import React,{useCallback, useState,useEffect} from 'react'
 import {Container, InputGroup, Row,Col} from "react-bootstrap"
 import {useDropzone} from 'react-dropzone'
 
 export const Upload = () => {
    const [urlImage,setUrlImage]=useState([])
    function MyDropzone() {
    
        const onDrop = useCallback(acceptedFiles => {
            urlImage.push(URL.createObjectURL(acceptedFiles[0]))
        //   urlImage.push(URL.createObjectURL(acceptedFiles[0]))
          console.log(urlImage);
        
        }, [urlImage])
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      
        return (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
          </div>
        )
      }
let a;
  useEffect(() => {
     console.log("chay");
     a=urlImage.map((index,key)=>{
      return(
          <Col>
          <img src={index}></img>
          </Col>

      )
    })
  }, [urlImage])
    
       
      
     return (
         <div className="upload">
           <Container>
           <Row className="padding">
           <Col md={12}>
           <div className="upload__body">
              <input type="text" name="name" placeholder="name "/>
           </div>
           </Col>
           <Col md={12} >
           <div className="upload__body">
              <input type="text" name="quantity" placeholder="quantity "/>
           </div> 
           </Col>
           <Col md={12} >
           <div className="upload__body">
              <input type="text" name="price" placeholder="price"/>
           </div>
           </Col >
           <Col md={12} >
           <div className="upload__body">
             <textarea name="description" placeholder="description"></textarea>
           </div></Col>
           <Col>
           <div className='upload__body'>
         <MyDropzone md={12}></MyDropzone>
           </div>
           </Col>
           {a}
           </Row>    
           </Container>  
         </div>
     )
 }
 