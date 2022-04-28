import React, { useEffect } from "react";
import Movie from "../../components/movie";
import { getPopularMovies } from "../../redux/actions/movie";
import { useDispatch, useSelector } from "react-redux";
import PopularMovies from "../../components/popularMovie";

const MainScreen = () => {
  // Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch, store?.data.length]);

  const popularMovies = store.data.results;
  const movies = store.searchData.results;
console.log(popularMovies) //The Batman 414906
  console.log(movies);
  const renderPopularMovies = () => {
    return popularMovies?.map((movie, index) => <PopularMovies key={index} {...movie} />);
  };
  const renderMovies = () => {
    return movies?.map((movie, index) => <Movie key={index} {...movie} />);
  };

  return (
    <div className="flex">
      <div className="w-full flex flex-wrap">
        {renderMovies()}
      </div>
      <div className="flex flex-col w-full  md:w-1/3  ">
        <p className="m-2 p-2 text-white font-bold  bg-red-500" >POPULAR MOVIES</p>

        <div className="flex flex-wrap ">{renderPopularMovies()}</div>
      </div>
    </div>
  );
};

export default MainScreen;
