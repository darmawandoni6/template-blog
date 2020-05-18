import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Container>
          <div className="navigation">
            <Link
              activeClass="#"
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img src={require("../Image/logo.png")} alt="logo" />
            </Link>
            <div className="menu">
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: "white" }}
              >
                <div>Home</div>
              </Link>
              <Link
                activeClass="active"
                to="Services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: "white" }}
              >
                <div>Services</div>
              </Link>
              <Link
                activeClass="active"
                to="Portofolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: "white" }}
              >
                <div>Portofolio</div>
              </Link>
              <Link
                activeClass="active"
                to="Journal"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: "white" }}
              >
                <div>Journal</div>
              </Link>
              <Link
                activeClass="active"
                to="AboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: "white" }}
              >
                <div>About Us</div>
              </Link>
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ color: "white" }}
              >
                <div>Contact</div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;
