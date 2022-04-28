import React, { useEffect } from "react";
import Movie from "../../components/movie";
import { getPopularMovies } from "../../redux/actions/movie";
import { useDispatch, useSelector } from "react-redux";

const MainScreen = () => {
  // Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch, store.data.length]);

  const movies = store.data.results;
  console.log(movies)
  const renderMovies = () => {
    return movies?.map((movie, index) => <Movie key={index} {...movie} />);
  };

  return <div className="flex flex-wrap">
      {renderMovies()}
      </div>;
};

export default MainScreen;
