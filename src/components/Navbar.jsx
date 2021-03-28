import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Navbars extends Component {
  render() {
    const { navData } = this.props;
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <img src={navData[0]?.brewery.images?.icon} alt="" />
          <Navbar.Brand className="ml-3">
            {navData[0]?.brewery.name}
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/About" className="nav-link">
              About us
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
