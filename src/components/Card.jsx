import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="rounded-md m-2 w-[32%] sm:w-full">
      <img className="w-full h-52 object-cover" src={img} alt="" />
      <div className="p-3 border border-[#FFFFFF33]">
        <h2 className="text-xl text-white">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
