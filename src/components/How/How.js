import React from "react";
import howIllustration from "../../images/howIllustration.png";
import Background from "../../images/pattern.png";

const How = () => {
  return (
    <div
      className="bg-dark-blue text-white bg-fixed"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className=" flex items-center flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row container mx-auto">
        <div className="fflex-auto w-full h-auto  px-4 py-5 m-5">
          <img src={howIllustration} alt="howIllustration" />
        </div>
        <div className="flex-auto   py-10 m-5">
          <p className="text-5xl font-bold ">HOW IT WORKS</p>
          <p className="text-xl text-gray-100 mt-4">
            Fusce tempor felis lacus, a hendrerit urna facilisis at. Sed
            sollicitudin bibendum tincidunt. Aenean a bibendum magna.
            Pellentesque feugiat urna a lectus consequat, quis vulputate nunc
            feugiat. Fusce non augue ligula. Ut sed ultrices lacus. Quisque
            pharetra nisl a pulvinar dictum. Quisque volutpat mi consectetur,
            rutrum lacus nec, porttitor nunc. Vivamus non est vitae erat feugiat
            ultricies eu id sapien. Duis vel magna posuere, malesuada mauris
            eget, tempus eros.
          </p>

          <button className="  font-bold py-3 px-8 mt-10 bg-transparent hover:bg-white text-white hover:text-black border border-white hover:border-transparent rounded focus:outline-none">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default How;
