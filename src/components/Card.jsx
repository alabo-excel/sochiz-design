import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Card = ({ img, title }) => {
  return (
    <div className=" rounded-md lg:w-1/3 sm:w-full">
      <Slide>
        <img
          className="transition duration-500 hover:scale-125  hover:z-10  w-full h-52 object-cover"
          src={img}
          alt=""
        />
      </Slide>
    </div>
  );
};

export default Card;
