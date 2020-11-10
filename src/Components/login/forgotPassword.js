import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'

export const ForgotPassword = () => {
    return (
        <div id="forgotpassword" style={{marginTop:"100px"}}>
            <Container>
                <Row>
                    <Col>
                    <div className="forgotpassword">
                    <h3>
                    Enter your user account's verified email address and we will send you a password reset link.
                    </h3>
                    <input type="text"></input>
                    <button className="btn"></button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
