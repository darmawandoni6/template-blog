import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faStar,
  faCamera,
  faGlobeAsia,
  faListAlt,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

class Services extends Component {
  render() {
    return (
      <div className="services-bg" id="Services">
        <Container>
          <Row style={{ marginBottom: 10 }}>
            <Col xl="4" className="services">
              <h2
                style={{ fontSize: 30, color: "#11ABB0", fontWeight: "bold" }}
              >
                Service
              </h2>
              <p style={{ fontSize: 14 }}>Our list of awesome services.</p>
            </Col>
            <Col className="services ">
              <p style={{ fontSize: 20 }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium.
              </p>
            </Col>
          </Row>
          <Row style={{ marginBottom: 30 }}>
            <Col xl="4" className="services ">
              <h2
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 18 }}
              >
                <FontAwesomeIcon icon={faDesktop} /> &nbsp; WEBDESIGN
              </h2>
              <p style={{ fontSize: 14 }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
                At vero eos et accusamus et molestias iusto odio dignissimos.
              </p>
            </Col>
            <Col xl="4" className="services ">
              <h2
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 18 }}
              >
                <FontAwesomeIcon icon={faStar} /> &nbsp; BRANDING
              </h2>
              <p style={{ fontSize: 14 }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
                At vero eos et accusamus et iusto odio dignissimos. .
              </p>
            </Col>
            <Col xl="4" className="services ">
              <h2
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 18 }}
              >
                <FontAwesomeIcon icon={faCamera} /> &nbsp; PHOTOGRAPHY
              </h2>
              <p style={{ fontSize: 14 }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et molestias quas molestias excepturi sint occaecati
                cupiditate. At vero eos et accusamus et iusto odio dignissimos.
              </p>
            </Col>
          </Row>

          <Row>
            <Col xl="4" className="services ">
              <h2
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 18 }}
              >
                <FontAwesomeIcon icon={faGlobeAsia} /> &nbsp; WEB DEVELOPMENT
              </h2>
              <p style={{ fontSize: 14 }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
                At vero eos et accusamus et molestias iusto odio dignissimos.
              </p>
            </Col>
            <Col xl="4" className="services ">
              <h2
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 18 }}
              >
                <FontAwesomeIcon icon={faListAlt} /> &nbsp; USER INTERFACE
              </h2>
              <p style={{ fontSize: 14 }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
                At vero eos et accusamus et iusto odio dignissimos. .
              </p>
            </Col>
            <Col xl="4" className="services ">
              <h2
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 18 }}
              >
                <FontAwesomeIcon icon={faPrint} /> &nbsp; PRINTING
              </h2>
              <p style={{ fontSize: 14 }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et molestias quas molestias excepturi sint occaecati
                cupiditate. At vero eos et accusamus et iusto odio dignissimos.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Services;
