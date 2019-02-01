import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
class Aboutus extends Component {
  render() {
    return (
      <div className="aboutUsContainer">
        <Container>
          <div className="logoContainer">
            <Row>
              <Col xs="12" md="12">
                <h2 />
                <div className="logoHeader">
                  <img
                    src="http://www.thegarden.net.au/wp-content/uploads/2015/03/portfolio-full-placeholder-1000x500.gif"
                    alt="header"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="ownerSection">
            <Row>
              <Col xs="6" md="6">
                <div className="">
                  <img
                    src="https://stroops.com/wp-content/uploads/2016/11/placeholder-profile-male-500x500.png"
                    alt="header"
                  />
                </div>
              </Col>
              <Col xs="6" md="6">
                <h2>Name - Contact Information - Statement?</h2>{" "}
              </Col>
            </Row>
          </div>
          <div className="companyInfo">
            <Row>
              <Col xs="12" md="12">
                <h2>
                  Company Information (founded when? Location? For? Where?)
                </h2>{" "}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Aboutus;
