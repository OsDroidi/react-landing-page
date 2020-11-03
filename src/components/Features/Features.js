import React from "react";
import { featuresData } from "./data";

const Features = () => {
  return (
    <div className="container mx-auto">
      <p className="text-4xl text-center pt-10">WHY USE OUR PLATFORM</p>
      <div className="flex flex-wrap">
        {featuresData.map((data) => {
          return (
            <div
              key={data.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 p-8"
            >
              <div className="flex flex-row sm:flex-col md:flex-row lg:flex-row xl:flex-row ">
                <div>
                  <img src={data.img} alt={data.alt}  className="p-2"/>
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
