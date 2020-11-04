import React from "react";

const Users = (props) => {
  return (
    <div className="container mx-auto text-center">
      <div>
        <p className="text-xl text-gray-600 w-1/4 sm:w-auto md:w-2/4 lg:w-2/4 xl:w-2/4 m-auto px-8 pb-5">
          {props.desc}
        </p>
        <hr className="w-6/12 m-auto p-5" />
      </div>
      <div className="pb-5">
        <p className="text-xl font-bold">{props.name}</p>
        <p className="text-xl text-gray-600">{props.role}</p>
      </div>
      <div className="flex flex-wrap justify-center py-5">
        <div className="w-auto px-5">
          <img
            src={props.image}
            alt={props.name}
            className="shadow-md hover:shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
