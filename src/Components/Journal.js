import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Post from "../Image/author.json";
import { BaseUrl } from "../URL/BaseUrl";

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
              <Col xl={2} lg={2} md={0} sm={0} xs={0}>
                <div className="pp-author">
                  <img src={`${BaseUrl}/${jornal.img}`} alt="author" />
                </div>
              </Col>
              <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                <h3 className="jornal-title">{jornal.title}</h3>
                <p>
                  {jornal.body}
                  <span>&nbsp; Readmore ... &nbsp;</span>
                </p>
              </Col>
              <Col xl={2} lg={2} md={4} sm={4} xs={4}>
                <p
                  style={{
                    fontFamily: "montserrat-bold",
                    fontSize: 14,
                    color: "white",
                  }}
                >
                  {jornal.created}
                  <br />
                  <span
                    style={{ fontFamily: "opensans-regular", fontSize: 14 }}
                  >
                    {jornal.createdBy}
                  </span>
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
