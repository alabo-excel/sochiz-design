import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Card = ({ img, title }) => {
  return (
    <div className="rounded-md my-3 w-[30%] sm:w-full">
      <Fade delay={1e3} cascade>
        <img className="w-full h-52 object-cover" src={img} alt="" />
        <div className="p-3 border border-[#FFFFFF33]">
          <h2 className="text-base sm:text-base text-white">{title}</h2>
        </div>
      </Fade>
    </div>
  );
};

export default Card;
