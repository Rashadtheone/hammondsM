import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Collapse,Navbar,NavbarToggler,NavbarBrand,
    Nav,NavItem,NavLink, } from 'reactstrap';


class Home extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/"><Link to="/vup/home" >reactstrap</Link></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href=""><Link to="/vup/home" >Gallary</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href=""><Link to="/vup/home" >Services</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href=""><Link to="/vup/home" >About Us</Link></NavLink>
                  </NavItem>

                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}

export default Home;
