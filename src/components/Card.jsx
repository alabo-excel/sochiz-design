import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Card = ({ img, title }) => {
  return (
    <div className="rounded-md lg:w-1/3 sm:w-full">
      <Slide>
        <img className="w-full h-52 object-cover" src={img} alt="" />
        {/* <div className="p-3 border border-[#FFFFFF33]">
          <h2 className="text-base sm:text-base text-white">{title}</h2>
        </div> */}
      </Slide>
    </div>
  );
};

export default Card;
