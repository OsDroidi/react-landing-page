import React from "react";

const Touch = () => {
  return (
    <div className=" mx-auto text-center bg-dark-blue py-12">
      <p className="text-6xl text-white font-bold">GET IN TOUCH</p>
      <p className="text-3xl text-gray-400 ">
        Learn more how to use our product and sign up to our newsletter.
      </p>

      <div className="w-full py-10">
        <form action="#">
          <div className="max-w-sm mx-auto p-1 pr-0   flex  flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row  items-center">
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-auto  appearance-none rounded border border-white  p-3 text-grey-dark mr-3 mb-5  focus:outline-none"
            />
            <button
              type="submit"
              className=" flex-auto font-bold py-3 px-8 mb-5  bg-transparent hover:bg-white text-white hover:text-black border border-white hover:border-transparent rounded focus:outline-none"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Touch;
