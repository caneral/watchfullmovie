import React, { useEffect, useRef } from "react";
import Movie from "../../components/movie";
import { getPopularMovies } from "../../redux/actions/movie";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import Hero from "../../components/hero";

const MainScreen = () => {

  const searchSection = useRef(null);
  const scrollToTop = () => window.scrollTo({top: searchSection.current.offsetTop, behavior: "smooth"})

  // Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch, store?.data.length]);

  const popularMovies = store.data.results;
  const searchList = store.searchData.results;

  const renderPopularMovies = () => {
    return popularMovies?.map((movie, index) => (
      <Movie key={index} {...movie} />
    ));
  };

  const renderSearchList = () => {
    return searchList?.filter((item) => item.title && item.poster_path).map((movie, index) => (

      <Movie key={index} {...movie} />
    ))
  }

  return (
    <div className="relative">
      <Header scrollToTop={scrollToTop} />
      <Hero/>
      <div ref={searchSection}>
        <h3 className="p-2 my-4 text-white font-semibold text-xl">POPULAR MOVIES</h3>
        <div className="w-full flex flex-wrap">{ searchList?.length > 0 ?  renderSearchList() :  renderPopularMovies()}</div>
      </div>
    </div>
  );
};

export default MainScreen;
