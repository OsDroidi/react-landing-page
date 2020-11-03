import React from "react";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";

const Feedback = () => {
 
  return (
    <div className="container mx-auto text-center">
      <div>
        <p className="text-5xl font-bold pt-12">WHAT THEY SAY ABOUT US</p>
        <p className="text-xl text-gray-600 py-5 w-6/12 m-auto">“Fusce tempor felis lacus, a hendrerit urna facilisis at. Sed
            sollicitudin bibendum tincidunt. Aenean a bibendum magna.
            Pellentesque feugiat urna a lectus consequat, quis vulputate nunc
            feugiat.“</p>
        <hr className="w-6/12 m-auto p-5" />
      </div>
      <div className="pb-5">
        <p className="text-xl font-bold">JOHN DOE</p>
        <p className="text-xl text-gray-600">CEO OF GETDOUGH</p>
      </div>
      <div className="flex flex-wrap justify-center py-5">
        <div className="w-auto px-5">
          <img
            src={user1}
            alt={user1}
            className="shadow-md hover:shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
        <div className="w-auto px-5">
          <img
            src={user2}
            alt={user2}
            className="shadow-md hover:shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            
          />
        </div>

        <div className="w-auto px-5">
          <img
            src={user3}
            alt={user3}
            className="shadow-md hover:shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>

        <div className="w-auto px-5">
          <img
            src={user4}
            alt={user4}
            className="shadow-md hover:shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;