import React ,{useState,useCallback,useRef,useEffect, Component} from 'react';
import Dropzone  from 'react-dropzone';
import {Row ,Col, Button} from "react-bootstrap"
import * as ml5 from "ml5"

class Machinelearning extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
         this.state={
      path:undefined,
      classifier:undefined,
      prediction:undefined,
      percent:undefined
  }
    }
    
 
 onDrop(file){
console.log(file[0].path);
const url=URL.createObjectURL(file[0])
this.setState({path:url})
}
 async componentDidMount() {
    const mobileNet=await ml5.imageClassifier("MobileNet",()=>{
      console.log("model load");
      this.setState({classifier:mobileNet})
    })
}

 handleMl(){
    const imgtag=this.myRef
    console.log(imgtag);
   
     const {classifier}=this.state
    classifier.predict(imgtag.current,(err,result)=>{
        console.log(result);
        if(err){
            console.log(err);
        }
       this.setState({prediction:result[0].label})
       this.setState({percent:result[0].confidence*100})
       console.log(this.state.prediction);
    })
}
render(){
    return (
        <div style={{marginTop:"100px"}}>
            <Row className="text-center">
                <Col className="col-12">
                <div>
                    <label>Image</label>
                    {this.state.path!==undefined &&
                <img ref={this.myRef} src={this.state.path} alt="image to machine learning analysis"  className="image" height={300}></img>
                    }
                    {this.state.prediction!==undefined &&
                    <div>
                        <div>prediction: {this.state.prediction}</div>
                       <div>{this.state.percent}%</div>

                    </div>
                    }
                   
                   
                </div>
                </Col >
                <Col className="col-12"> 
                 <Button className="btn" disabled={!this.state.path} onClick={()=>this.handleMl()}> Detect</Button>
                <Dropzone onDrop={(file)=>this.onDrop(file)}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  )}
</Dropzone></Col>
            </Row>
           
        </div>
    );
};
}

export default Machinelearning;