import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
class Footer extends Component {
    render() {
        return (
            <Container>
                  <Row>
                    <Col xs="4" md="4">Contact Us</Col>
                    <Col xs="4" md="4">
                    <Row>Phone Number</Row>
                    <Row>Email</Row>
                    </Col>
                 </Row>
            </Container>
        );
    }
}

export default Footer;
