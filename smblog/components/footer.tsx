import React from "react";

const footer = () => {
  return (
    <div className="flex flex-row my-[2rem] justify-center items-center gap-[2rem]">
      <div className="w-[35%] h-1 bg-gray-800"></div>
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="font-bold text-3xl">Smruti.code</p>
        <p className="tracking-extrawide">BLOG</p>
      </div>
      <div className="w-[35%] h-1 bg-gray-800"></div>
    </div>
  );
};

export default footer;
