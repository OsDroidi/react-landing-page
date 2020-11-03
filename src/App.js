import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Touch from "./components/Touch/Touch";
import How from "./components/How/How";
import Feedback from "./components/Feedback/Feedback";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Features />
      <How />
      <Feedback />
      <Touch />
      <Carousel />
      <Footer />
    </Router>
  );
}

export default App;
