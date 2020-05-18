import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      matches: window.matchMedia("(min-width: 800px)").matches,
    };
  }
  componentDidMount() {
    const handler = (e) =>
      this.setState({ matches: e.matches, checked: false });
    window.matchMedia("(min-width: 800px)").addListener(handler);
  }
  show = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };
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
            <div className={this.state.checked ? "show-menu" : "menu"}>
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
            <div
              className="icon-bars"
              onClick={() => {
                this.show();
              }}
            >
              <FontAwesomeIcon icon={faBars} />
              <input
                type="checkbox"
                name="menu"
                checked={this.state.checked}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;
