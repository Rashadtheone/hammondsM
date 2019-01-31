import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Navi extends Component {
    render() {
        return (
            <Container>
                 <Row>
          <Col xs="3" md="3">Mission Statment/purpose</Col>
          <Col xs="9" md="9">Gallay</Col>
        </Row>
            </Container>
        );
    }
}

export default Navi;
