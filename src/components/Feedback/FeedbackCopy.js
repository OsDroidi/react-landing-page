import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";

const FeedbackCopy = () => {
  return (
    <OwlCarousel
      
      loop
      nav
      autoplay
      center
      autoplaySpeed={3000}
     autoWidth
      autoplayTimeout={3000}
      margin={100}
     
    >
      <div class="item ">
      
        <div className="w-auto px-5">
          <img
            src={user1}
            alt={user1}
            className="shadow-md hover:shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
        
      </div>
      <div class="item">
        <div className="w-auto px-5">
          <img
            src={user2}
            alt={user2}
            className="shadow-md hover:shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
      <div class="item">
        <div className="w-auto px-5">
          <img
            src={user3}
            alt={user3}
            className="shadow-md hover:shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
      <div class="item">
        <div className="w-auto px-5">
          <img
            src={user4}
            alt={user4}
            className="shadow-md hover:shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
    </OwlCarousel>
  );
};

export default FeedbackCopy;

/* 
 const userInfo1 = [
    {
      name: "JOHN DOE",
      role: "CEO OF GETDOUGH",
      desc: `“Fusce tempor felis lacus, a hendrerit urna facilisis at. Sed
          sollicitudin bibendum tincidunt. Aenean a bibendum magna. Pellentesque
          feugiat urna a lectus consequat, quis vulputate nunc feugiat.“`,
    },
    {
      name: "Dana Schmidt",
      role: "CEO OF Apple",
      desc: `“Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa omnis, nobis praesentium velit..“`,
    },
    {
      name: "Janet Ferguson",
      role: "CEO OF Google",
      desc: `“Fusce tempor felis lacus, a hendrerit urna facilisis at. Sed
          sollicitudin bibendum tincidunt. Aenean a bibendum magna. Pellentesque
          feugiat urna a lectus consequat, quis vulputate nunc feugiat.“`,
    },
    {
      name: "Thomas Webb",
      role: "CEO OF Amazon",
      desc: `“Fusce tempor felis lacus, a hendrerit urna facilisis at. Sed
          sollicitudin bibendum tincidunt. Aenean a bibendum magna. Pellentesque
          feugiat urna a lectus consequat, quis vulputate nunc feugiat.“`,
    },
  ];

  const [text, setText] = useState(userInfo1.desc);

  const changeText = () => {
    setText("New title");
  }; */