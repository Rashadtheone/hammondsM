import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
class Footer extends Component {
  render() {
    return (
      <Container>
        <div className="footerBackground">
          <Row>
            <Col xs="4" md="4">
              <div className="footerHeader">Contact Us</div>{" "}
            </Col>
            <Col xs="4" md="4">
              <Row>
                <div className="footerText"> Phone Number</div>
              </Row>
              <Row>
                <div className="footerText">Email</div>
              </Row>
            </Col>
            <Col xs="4" md="4">
              <Form>
                <FormGroup>
                  <Label className="footerText " for="email">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="footerText" for="footerText">
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="footerText" for="footerText">
                    Request Details
                  </Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="Please enter what services you would like, and when you would want requested project done"
                  />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Footer;
