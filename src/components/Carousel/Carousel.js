import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ibm from "../../images/carousel/ibm.svg";
import microsoft from "../../images/carousel/microsoft.svg";
import google from "../../images/carousel/google.svg";
import amazon from "../../images/carousel/amazon.svg";
import apple from "../../images/carousel/apple.svg";
import tesla from "../../images/carousel/tesla.svg";
import samsung from "../../images/carousel/samsung.svg";

const Carousel = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto ">
        <OwlCarousel
          autoplay
          loop
          center
          autoplaySpeed={3000}
          autoWidth
          autoplayTimeout={3000}
          margin={100}
        >
          <div className="item ">
            <img src={ibm} alt="ibm" />
          </div>
          <div className="item">
            <img src={microsoft} alt="microsoft" />
          </div>
          <div className="item">
            <img src={google} alt="google" />
          </div>
          <div className="item">
            <img src={amazon} alt="amazon" />
          </div>
          <div className="item">
            <img src={apple} alt="apple" />
          </div>
          <div className="item">
            <img src={tesla} alt="tesla" />
          </div>
          <div className="item">
            <img src={samsung} alt="samsung" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Carousel;
