import React from "react";
import { featuresData } from "./data";

const Features = () => {
  return (
    <div className="container mx-auto py-12">
      <p className="text-5xl text-center font-bold py-12">WHY USE OUR PLATFORM</p>
      <div className="flex flex-wrap">
        {featuresData.map((data) => {
          return (
            <div
              key={data.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3  py-5 pb-12"
            >
              <div className="flex items-center flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row text-center sm:text-center md:text-left lg:text-left xl:text-left">
                <div>
                  <img src={data.img} alt={data.alt} className="p-2 center" />
                </div>

                <div>
                  <p className="text-9xl font-bold "> {data.title}</p>
                  <p>{data.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
