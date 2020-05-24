import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

class ContactUs extends Component {
  render() {
    return (
      <div className="contact-bg" id="Contact">
        <Container>
          <Row>
            <Col xl="4" className="services ">
              <h2>Contact Us</h2>
              <p>Get in touch with us.</p>
            </Col>
          </Row>
          <Row className="form-services">
            <Col xl={6} lg={8} md={12} sm={12} xs={12}>
              <Form>
                <Row>
                  <Col xl={3} lg={8} md={12} sm={12} xs={12}>
                    Name &nbsp;<span>*</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
                <Row>
                  <Col xl={3} lg={8} md={12} sm={12} xs={12}>
                    Email &nbsp;<span>*</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
                <Row>
                  <Col xl={3} lg={8} md={12} sm={12} xs={12}>
                    Subject &nbsp;<span>*</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
                <Row>
                  <Col xl={3} lg={8} md={12} sm={12} xs={12}>
                    Message &nbsp;<span>*</span>
                  </Col>
                  <Col>
                    <textarea rows="8" />
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col xl={6} lg={4} md={12} sm={12} xs={12}>
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
