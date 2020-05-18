import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

class ContactUs extends Component {
  render() {
    return (
      <div className="services-bg" id="Contact">
        <Container>
          <Row style={{ marginBottom: 10 }}>
            <Col xl="4" className="services ">
              <h2
                style={{ fontSize: 30, color: "#11ABB0", fontWeight: "bold" }}
              >
                Service
              </h2>
              <p style={{ fontSize: 14 }}>Our list of awesome services.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" style={{ color: "white" }}>
                    Nama<span style={{ color: "#11ABB0" }}>*</span>
                  </Form.Label>
                  <Col sm="10" className="about-input">
                    <input type="text" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label column sm="2" style={{ color: "white" }}>
                    Email<span style={{ color: "#11ABB0" }}>*</span>
                  </Form.Label>
                  <Col sm="10" className="about-input">
                    <input type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" style={{ color: "white" }}>
                    SubJect<span style={{ color: "#11ABB0" }}>*</span>
                  </Form.Label>
                  <Col sm="10" className="about-input">
                    <input type="text" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" style={{ color: "white" }}>
                    SubJect<span style={{ color: "#11ABB0" }}>*</span>
                  </Form.Label>
                  <Col sm="10" className="about-input">
                    <textarea rows="10" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2" />
                  <Col sm="2" className="about-input">
                    <button>Submit</button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p>
                  Nascetur augue hac platea enim, egestas pulvinar vutulvinar
                  cum, ac eu.
                  <br />
                  <br /> Kreative Design Studio
                  <br /> Anystreet Avenue 012 <br />
                  State, Anytown <br />
                  <br />
                  Phone: 0 123 456 789 0 <br />
                  Email: info [@] kreativedesign.com
                </p>
              </div>
              <div className="contact-info">
                <h3>Template Info</h3>
                <p>
                  Kreative is a free website template by
                  <span style={{ color: "white" }}> styleshout.com.</span> This
                  work is released and licensed under the Creative
                  <span style={{ color: "white" }}>
                    &nbsp; Commons Attribution 3.0 License
                  </span>
                  , which means that you are free to use and modify it for any
                  personal or commercial purpose. All I ask is that you give me
                  credit by including a credit link to
                  <span style={{ color: "white" }}> my website.</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContactUs;
