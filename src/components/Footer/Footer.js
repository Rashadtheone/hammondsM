import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
class Footer extends Component {
    render() {
        return (
            <Container>
                <div className= "footerBackground">
                  <Row>
                    <Col xs="4" md="4"><div className="footerHeader">Contact Us</div> </Col>
                    <Col xs="4" md="4">
                    <Row><div className="footerText"> Phone Number</div></Row>
                    <Row><div className="footerText">Email</div></Row>
                    </Col>
                 </Row>
                 </div>
            </Container>
        );
    }
}

export default Footer;
