import React, { useState } from "react";
import { getSearchResults } from "../../redux/actions/movie/index";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");

  const search = (e) => {
    e.preventDefault();
    dispatch(getSearchResults(searchKey));
  };
  return (
    <header className="flex flex-wrap items-center m-2 h-16">
      <p className="w-full sm:w-1/2 text-sm sm:text-xl font-bold text-white text-center sm:text-left ">
        WATCHFULLMOVIE
      </p>
      <div className="w-full sm:w-1/2  sm:justify-end flex justify-center">
        <form onSubmit={search}>
          <input
            className="p-2 sm:p-3 placeholder:text-gray-400 placeholder:text-base rounded-3xl border-0 outline-none"
            placeholder="Search Movie"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;