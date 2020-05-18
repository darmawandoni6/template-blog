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
          <Row style={{ marginBottom: 50 }}>
            <Col xl={3}>
              <h2
                style={{ fontSize: 30, color: "#11ABB0", fontWeight: "bold" }}
              >
                About Us
              </h2>
              <p style={{ fontSize: 14, color: "#999999" }}>
                This is what we are.
              </p>
            </Col>
            <Col>
              <p
                style={{
                  fontSize: 20,
                  color: "#A3A3A3",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                non mauris vitae erat consequat auctor eu in elit.
              </p>
            </Col>
          </Row>
          <Row style={{ marginBottom: 24 }}>
            <h3
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#6E6E6E",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              Our Work Process.
            </h3>
          </Row>
          <Row style={{ marginBottom: 24 }}>
            <Col xl={3}>
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#0f9095",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                EXPLORE.
              </h4>
              <p
                style={{
                  fontSize: 15,
                  color: "#A3A3A3",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit.
              </p>
            </Col>
            <Col xl={3}>
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#0f9095",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                DESIGN.
              </h4>
              <p
                style={{
                  fontSize: 15,
                  color: "#A3A3A3",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit.
              </p>
            </Col>
            <Col xl={3}>
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#0f9095",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                DEVELOP.
              </h4>
              <p
                style={{
                  fontSize: 15,
                  color: "#A3A3A3",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit.
              </p>
            </Col>
            <Col xl={3}>
              <h4
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#0f9095",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                DELIVER.
              </h4>
              <p
                style={{
                  fontSize: 15,
                  color: "#A3A3A3",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit.
              </p>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <h3
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#6E6E6E",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              Meet The Team.
            </h3>
          </Row>
          <Row style={{ marginBottom: 50 }}>
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
          <Row style={{ marginBottom: 20 }}>
            <Col>
              <h2
                style={{ fontSize: 30, color: "#11ABB0", fontWeight: "bold" }}
              >
                Testimonials
              </h2>
              <p style={{ fontSize: 14, color: "#999999" }}>
                What our clients are saying.
              </p>
            </Col>
          </Row>
          <Row style={{ marginBottom: 50 }}>
            {Testimony.map((client, i) => (
              <Col xl={6} key={i}>
                <div className="Testimoni-client">
                  <img src={`${BaseUrl}/${client.img}`} alt="pp client" />
                  <div>
                    <p>
                      <span
                        style={{
                          fontSize: 14,
                          color: "#0f9095",
                          fontWeight: "bold",
                        }}
                      >
                        {client.name}
                      </span>
                      <br />
                      <span
                        style={{
                          fontSize: 13,
                          color: "#838C95",
                        }}
                      >
                        {client.job}
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    padding: 10,
                    color: "#838C95",
                    fontSize: 18,
                  }}
                >
                  {client.body}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutUs;
