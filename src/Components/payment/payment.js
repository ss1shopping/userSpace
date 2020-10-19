import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import '../../app/scss/payment/payment.scss'
import anh1 from "../../app/scss/avatar.jpg"
import anh2 from "../../app/scss/1.jpg"
import anh3 from "../../app/scss/2.jpeg"
import anh4 from "../../app/scss/3.jpg"
import anh5 from "../../app/scss/avatar.jpg"
import anh6 from "../../app/scss/1.jpg"
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
const Payment = () => {


    return (
        <div style={{ marginTop: "117px" }}>
            <div className="box">
                <Container fluid>
                    <Row >
                        <Col lg={4} md={6} sm={12}>
                            <div className="box__item">
                                <div className="delete"><button className="delbut">&#9747;</button></div>
                                <div className="box__item--image">
                                    <img className="image" src={anh1} />
                                </div>
                                <div className="box__item--infor">
                                    <div className="box__item--name">
                                        Product 1
                                </div>
                                    <div className="box__item--price">PriceItem1</div>
                                    <div className="box__item--quantity">
                                        <div className="box__item--button">
                                            <div><button className="minus"><AiOutlineMinus /></button></div>
                                            <div className="quantity">2</div>
                                            <div><button className="plus"><AiOutlinePlus /></button></div>
                                        </div>
                                    </div>
                                    <div className="box__item--Sum">SumItem1</div>

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="box__item">
                                <div className="delete"><button className="delbut">&#9747;</button></div>
                                <div className="box__item--image">
                                    <img className="image" src={anh1} />
                                </div>
                                <div className="box__item--infor">
                                    <div className="box__item--name">
                                        Product 1
                                </div>
                                    <div className="box__item--price">PriceItem1</div>
                                    <div className="box__item--quantity">
                                        <div className="box__item--button">
                                            <div><button className="minus"><AiOutlineMinus /></button></div>
                                            <div className="quantity">2</div>
                                            <div><button className="plus"><AiOutlinePlus /></button></div>
                                        </div>
                                    </div>
                                    <div className="box__item--Sum">SumItem1</div>

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="box__item">
                                <div className="delete"><button className="delbut">&#9747;</button></div>
                                <div className="box__item--image">
                                    <img className="image" src={anh1} />
                                </div>
                                <div className="box__item--infor">
                                    <div className="box__item--name">
                                        Product 1
                                </div>
                                    <div className="box__item--price">PriceItem1</div>
                                    <div className="box__item--quantity">
                                        <div className="box__item--button">
                                            <div><button className="minus"><AiOutlineMinus /></button></div>
                                            <div className="quantity">2</div>
                                            <div><button className="plus"><AiOutlinePlus /></button></div>
                                        </div>
                                    </div>
                                    <div className="box__item--Sum">SumItem1</div>

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="box__item">
                                <div className="delete"><button className="delbut">&#9747;</button></div>
                                <div className="box__item--image">
                                    <img className="image" src={anh1} />
                                </div>
                                <div className="box__item--infor">
                                    <div className="box__item--name">
                                        Product 1
                                </div>
                                    <div className="box__item--price">PriceItem1</div>
                                    <div className="box__item--quantity">
                                        <div className="box__item--button">
                                            <div><button className="minus"><AiOutlineMinus /></button></div>
                                            <div className="quantity">2</div>
                                            <div><button className="plus"><AiOutlinePlus /></button></div>
                                        </div>
                                    </div>
                                    <div className="box__item--Sum">SumItem1</div>

                                </div>
                            </div>
                        </Col>


                    </Row>

                    <Row>
                        {/* <div className="final"> */}
                        <Col md={12} lg={4} sm={12} xs={12} className="button1">
                            <a href="" className="opt1">Back To Store</a>
                        </Col>
                        <Col md={12} lg={4} sm={12} xs={12} className="totalamount">
                            <div className="tamount">
                                <span>Total: </span>
                                <span className="totalnumber">180$</span>
                            </div>
                        </Col>
                        <Col md={12} lg={4} sm={12} xs={12} className="button2">
                            <a href="" className="opt2">Check Out</a>
                        </Col>
                        {/* </div> */}
                    </Row>
                </Container>
            </div>


        </div>
    )
}
export default Payment