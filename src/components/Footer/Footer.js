import React from "react";

import { Twitter, Facebook, Instagram } from "./FooterElements";

const Footer = () => {
  return (
    <div className="bg-dark-blue-foot  text-white text-xl">
      <div className="flex items-center flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row  container mx-auto p-12   ">
        <p className="flex-auto mb-2">PRODUCT</p>
        <p className="flex-auto mb-2">PARTNERS</p>
        <p className="flex-auto mb-2">RESOURCES</p>
        <p className="flex-auto mb-2">ABOUT</p>
        <Twitter />
        <Facebook />
        <Instagram />
      </div>
    </div>
  );
};

export default Footer;
