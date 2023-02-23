import React from "react";

import { Twitter, Facebook, Instagram } from "./FooterElements";

const Footer = () => {
  return (
    <div className="bg-dark-blue-foot  text-white text-xl">
      <div className="flex items-center flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row  container mx-auto p-8">
        <p className="flex-auto mb-2">PRODUCT</p>
        <p className="flex-auto mb-2">PARTNERS</p>
        <p className="flex-auto mb-2">RESOURCES</p>
        <p className="flex-auto mb-2">ABOUT</p>
        <Twitter />
        <Facebook />
        <Instagram />
      </div>
      <small className="flex justify-center items-center pb-5">
        <a target="_blank" rel="noreferrer" href="https://osdroidi.com/">
          Made by Osama Mehifoodh
        </a>
      </small>
    </div>
  );
};

export default Footer;
