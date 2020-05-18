import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-elastic-carousel";

const breakPoints = [{ height: "70vh", itemsToShow: 1 }];
class Home extends Component {
  render() {
    return (
      <Container fluid="md" id="Home">
        <Carousel breakPoints={breakPoints} id="Home">
          <div className="slidder">
            <h2>
              Take a look at some of
              <span style={{ color: "#11ABB0" }}> our works</span> or
              <span style={{ color: "#11ABB0" }}> get in touch</span> to discuss
              how we can help you.
            </h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti eos et accusamus.
            </p>
          </div>
          <div className="slidder">
            <h2>
              Take a look at some of
              <span style={{ color: "#11ABB0" }}> our works</span> or
              <span style={{ color: "#11ABB0" }}> get in touch</span> to discuss
              how we can help you.
            </h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti eos et accusamus.
            </p>
          </div>
        </Carousel>
      </Container>
    );
  }
}

export default Home;
