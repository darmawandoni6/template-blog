import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <div className="footer">
            <div>
              © 2014 Kreative | Design by
              <span style={{ color: "#0B686B" }}>Styleshout</span>
            </div>
            <div className="icon-sosmed">
              <img
                src={require("../Image/icon-sosmed/facebook-f-brands.svg")}
                alt="facebook"
              />
              <img
                src={require("../Image/icon-sosmed/twitter-brands.svg")}
                alt="twitter"
              />
              <img
                src={require("../Image/icon-sosmed/google-plus-brands.svg")}
                alt="google"
              />
              <img
                src={require("../Image/icon-sosmed/linkedin-in-brands.svg")}
                alt="linkedin"
              />
              <img
                src={require("../Image/icon-sosmed/skype-brands.svg")}
                alt="skype"
              />
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
