import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Img from "../Image/portfolio/portofolio.json";
import { BaseUrl } from "../URL/BaseUrl";

class Portfolio extends Component {
  render() {
    return (
      <div className="grey-bg" id="Portofolio">
        <Container>
          <div className="portfolio">
            <h2>Portfolio</h2>
            <p style={{ fontSize: 14 }}>Check out our latest projects.</p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate. At
              vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium.
            </p>
          </div>
          <div className="portfolio ">
            <div className="portfolio-img flex-wrap">
              {Img.map((img, i) => (
                <div>
                  <img key={i} src={`${BaseUrl}/${img.url}`} alt="portofolio" />
                  <p>Comic Sneakers</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
