import React from "react";

const Cover = () => {
  return (
    <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto pt-4">
      <div className="w-full relative">
        <img
          src="/images/jalanbercabang.jpg"
          alt=""
          className="w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-800 to-white bg-clip-text text-transparent">
            Jalan Bercabang
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cover;
