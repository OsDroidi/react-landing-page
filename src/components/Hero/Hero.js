import React from "react";
import heroIllustration from "../../images/heroIllustration.png";
import Background from "../../images/fizzy.png";

const Hero = () => {
  return (
    <div
      className="bg-dark-blue text-white bg-fixed "
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex items-center flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row container mx-auto">
        <div className="flex-auto   py-10 m-5">
          <p className="text-5xl font-bold ">BEST HEADLINE IN THE WORLD</p>
          <p className="text-xl text-gray-100 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            rutrum urna felis, dictum dictum erat condimentum sit amet. Cras vel
            est bibendum, Cras vel est bibendum, posuere orci quis, consequat
            nisl.
          </p>

          <button className="bg-white hover:bg-white hover:bg-opacity-75 text-black  font-bold py-3 px-8 rounded mt-10 focus:outline-none">
            CTA BUTTON
          </button>
        </div>
        <div className="flex-auto w-full h-auto  px-4 py-5 m-5 ">
          <img src={heroIllustration} alt="heroIllustration" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
