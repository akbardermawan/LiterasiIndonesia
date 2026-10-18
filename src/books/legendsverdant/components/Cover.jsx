import React from "react";

const Cover = () => {
  return (
    <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto pt-4">
      <div className="w-full relative">
        <img
          src="/images/legendsverdant.jpg"
          alt=""
          className="w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl font-bold bg-clip-text text-black">
            Legends of the Verdant Kingdom
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cover;
