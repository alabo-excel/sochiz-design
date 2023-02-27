import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="border border-[#FFFFFF33] rounded-md m-2 w-[32%]">
      <img className="w-full h-52 object-cover" src={img} alt="" />
      {/* <div className="p-3 border b0rder-t-[#FFFFFF33]">
        <h2 className="font-bold text-2xl">{title}</h2>
      </div> */}
    </div>
  );
};

export default Card;
