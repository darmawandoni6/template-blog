import React, { Component } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Journal from "./Components/Journal";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

import "./scss/main.scss";
class App extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Home />
        <Services />
        <Portfolio />
        <Journal />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
