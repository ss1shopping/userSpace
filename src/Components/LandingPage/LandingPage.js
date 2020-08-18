import React, {Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col,Card} from "react-bootstrap";
import { connect } from "react-redux";
 class LandingPage extends Component {
   componentWillMount() {
     var dispatch=this.props.dispatch                 //cách gọi hàm thực thi trong store
     dispatch({type:"feachData"})    
    
   }
   componentDidUpdate(prevProps, prevState) {
     console.log(this.props.phimChieuRap.title2);
   
   }
   
  render() {
    let loadImage
    if(this.props.phimChieuRap){
   loadImage= this.props.phimChieuRap.map((index,key)=>{
     const href=`/${index.title}/xemphim`
    return (
      <Col  key={key} md={4} lg={3} sm={6} xs={6}>
          <Link to={href} className="film" >
       <Card >
              <Card.Img variant="top"  src={index.urlImage} alt="avatar cua tien"></Card.Img>
            <Card.Body>
              <Card.Title className="card-title">{index.title1}</Card.Title>
               <Card.Text className="card-text">
                  {index.title2}
               </Card.Text>
            </Card.Body>
            </Card> 
            </Link>
            </Col>
  )
})
    }
    return (
       <>
      <div >
        {/* ref={test} */}
     <Container className="padding">
       <Row className="padding">
          <Col xs={12}>
        <h1 className='display-4'>
        Phim Chieu Rap Moi
        </h1>
        <hr/>
        </Col>
             {loadImage}
       </Row>
     </Container>
      </div>
    </>
    )
  }
}
const mapStateToProps =(state)=>({
 phimChieuRap:state.crawlerReducer.phimChieuRap
})

export default connect(mapStateToProps)(LandingPage);
