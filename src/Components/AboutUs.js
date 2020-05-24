import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Team from "../Image/team.json";
import Testimony from "../Image/client.json";
import { BaseUrl } from "../URL/BaseUrl";

class AboutUs extends Component {
  render() {
    return (
      <div className="grey-bg" id="AboutUs">
        <Container>
          <Row className="row-1">
            <Col xl={3}>
              <h2>About Us</h2>
              <p>This is what we are.</p>
            </Col>
            <Col>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                non mauris vitae erat consequat auctor eu in elit.
              </p>
            </Col>
          </Row>
          <Row className="row-2">
            <h3>Our Work Process.</h3>
          </Row>
          <Row className="row-3">
            <Col xl={3}>
              <h4>EXPLORE.</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit.
              </p>
            </Col>
            <Col xl={3}>
              <h4>DESIGN.</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit.
              </p>
            </Col>
            <Col xl={3}>
              <h4>DEVELOP.</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit.
              </p>
            </Col>
            <Col xl={3}>
              <h4>DELIVER.</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit.
              </p>
            </Col>
          </Row>
          <Row className="row-2">
            <h3>Meet The Team.</h3>
          </Row>
          <Row className="row-4">
            {Team.map((team, i) => (
              <Col xl={3} lg={4} md={6} sm={6} xs={6} key={i}>
                <div className="about-team">
                  <img src={`${BaseUrl}/${team.photo}`} alt="team" />
                  <h5>{team.name}</h5>
                  <p>{team.jabatan}</p>
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
              </Col>
            ))}
          </Row>
          <Row className="row-5">
            <Col>
              <h2>Testimonials</h2>
              <p>What our clients are saying.</p>
            </Col>
          </Row>
          <Row className="row-6">
            {Testimony.map((client, i) => (
              <Col xl={6} key={i}>
                <div className="Testimoni-client">
                  <img src={`${BaseUrl}/${client.img}`} alt="pp client" />
                  <div>
                    <p>
                      <span>{client.name}</span>
                      <br />
                      <span>{client.job}</span>
                    </p>
                  </div>
                </div>
                <div>{client.body}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutUs;
