import React, { useState } from "react";
import { getSearchResults, RESET_ACTION } from "../../redux/actions/movie/index";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({scrollToTop}) => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");

  const search = (e) => {
    e.preventDefault();
    if(e.keyCode === 13 && searchKey !== ""){
      scrollToTop()
      dispatch(getSearchResults(searchKey));
    }else if(searchKey === ""){
      dispatch(RESET_ACTION)
    }
  };
  return (
    <header className="flex flex-wrap items-center m-2 h-16 absolute top-0 z-20 bottom-0 left-0 right-0 ">
      <p className="w-full sm:w-1/2 text-sm sm:text-xl font-bold  text-center sm:text-left ">
        WATCHFULLMOVIE
      </p>
      <div className="w-full sm:w-1/2  sm:justify-end flex justify-center">
        <form onSubmit={search}>
          <input
            className="p-2 sm:p-3 placeholder:text-gray-400 placeholder:text-base rounded-3xl border-0 outline-none"
            placeholder="Search Movie"
            maxLength={80}
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyUp={(e) => search(e)}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
