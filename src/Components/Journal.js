import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Post from "../Image/author.json";

class Journal extends Component {
  render() {
    return (
      <div className="journal-bg" id="Journal">
        <Container>
          <Row style={{ marginBottom: 50 }}>
            <Col>
              <h2>Journal</h2>
              <p>Our latest posts and rants.</p>
            </Col>
          </Row>
          {Post.map((jornal, i) => (
            <Row key={i}>
              <Col xl={2}>
                <div className="pp-author flex-content">
                  <img src={jornal.img} alt="author" />
                </div>
              </Col>
              <Col xl={8}>
                <h3 className="jornal-title">{jornal.title}</h3>
                <p style={{ color: "#7fe6ed" }}>
                  {jornal.body}
                  <span className="jornal-title">
                    &nbsp; Readmore &nbsp;
                    <FontAwesomeIcon icon={faAngleRight} className="asdasd" />
                  </span>
                </p>
              </Col>
              <Col xl={2}>
                <p>
                  {jornal.created}
                  <br />
                  {jornal.createdBy}
                </p>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}

export default Journal;
