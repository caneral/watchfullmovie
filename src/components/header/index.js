import React from "react";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center m-2 h-16">
      <p className="w-full sm:w-1/2 text-sm sm:text-xl font-bold text-white text-center sm:text-left ">
        WATCHFULLMOVIE
      </p>
      <div className="w-full sm:w-1/2  sm:justify-end flex justify-center">
        <input
          className="p-2 sm:p-3 placeholder:text-gray-400 placeholder:text-base rounded-3xl border-0 outline-none"
          placeholder="Search Movie"
        />
      </div>
    </div>
  );
};

export default Header;
