import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import { Container } from "react-bootstrap";

const breakPoints = [{ height: "70vh", itemsToShow: 1 }];
class Home extends Component {
  render() {
    return (
      <div className="home-bg" id="Home">
        <Carousel breakPoints={breakPoints}>
          <div className="slidder">
            <Container>
              <h2>
                Take a look at some of
                <span style={{ color: "#11ABB0" }}> our works</span> or
                <span style={{ color: "#11ABB0" }}> get in touch</span> to
                discuss how we can help you.
              </h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti eos et accusamus.
              </p>
            </Container>
          </div>
          <div className="slidder">
            {" "}
            <Container>
              <h2>
                Take a look at some of
                <span style={{ color: "#11ABB0" }}> our works</span> or
                <span style={{ color: "#11ABB0" }}> get in touch</span> to
                discuss how we can help you.
              </h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti eos et accusamus.
              </p>
            </Container>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Home;
