import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Users from "./Users";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";

const Feedback = () => {
  return (
    <div className="py-8">
      <p className="text-5xl font-bold py-8 text-center">
        WHAT THEY SAY ABOUT US
      </p>
      <div className="container mx-auto py-8">
        <OwlCarousel
          autoplay
          loop
          center
          autoplaySpeed={4000}
          autoWidth
          autoplayTimeout={5000}
          
        >
          <div className="item ">
            <Users
              name="JOHN DOE"
              role="CEO OF GETDOUGH"
              desc="“Fusce tempor felis lacus, a hendrerit urna facilisis at. Sed
          sollicitudin bibendum tincidunt. Aenean a bibendum magna. Pellentesque
          feugiat urna a lectus consequat, quis vulputate nunc feugiat.“"
              image={user1}
            />
          </div>
          <div className="item">
            <Users
              name="Dana Schmidt"
              role="CEO OF Apple"
              desc="“Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa omnis, nobis praesentium velit..“"
              image={user2}
            />
          </div>
          <div className="item">
            <Users
              name="Thomas Webb"
              role="CEO OF Amazon"
              desc="“Pellentesque
          feugiat urna a lectus consequat, quis vulputate nunc feugiat.“"
              image={user3}
            />
          </div>
          <div className="item">
            <Users
              name="Janet Ferguson"
              role="CEO OF Google"
              desc="“Fusce tempor felis lacus, a hendrerit urna facilisis at. Sed
          sollicitudin bibendum tincidunt. Aenean a bibendum magna. Pellentesque
          feugiat urna a lectus consequat, quis vulputate nunc feugiat.“"
              image={user4}
            />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Feedback;
