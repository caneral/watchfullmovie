import React, { useEffect, useState, useRef } from "react";
import Movie from "../../components/movie";
import {
  getMorePopularMovies,
  getPopularMovies,
} from "../../redux/actions/movie";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import Hero from "../../components/hero";
import movieApi from "../../configs/movieApi";
import PersonCard from "../../components/person";

const MainScreen = () => {
  const searchSection = useRef(null);
  const scrollToTop = () =>
    window.scrollTo({
      top: searchSection.current.offsetTop,
      behavior: "smooth",
    });

  // Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.movies);

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getPopularMovies());
    setData(store.data.results);
  }, [dispatch, store?.data.length]);

  const popularMovies = store.data.results;
  const searchList = store.searchData.results;
  const totalPage = store.data.total_pages;

  const renderPopularMovies = () => {
    return data?.map((movie, index) => <Movie key={index} {...movie} />);
  };

  const renderSearchList = () => {
    return searchList?.map((movie, index) => {
      if (movie.media_type === "person") {
          return movie.known_for?.filter((item) => item.poster_path && item.title).map((item, index) =>
          <PersonCard key={index} {...item} />)
      } else if(movie.media_type !== "tv" && movie.poster_path !== null) {

        return <Movie key={index} {...movie} />;
      }
    });
  };

  const loadMore = async () => {
    let response = null;
    const params = {
      page: page + 1,
    };
    response = await movieApi.getPopularMoviesList(params);

    setData([...data, ...response.data.results]);
    setPage(page + 1);
  };

  return (
    <div className="relative">
      <Header scrollToTop={scrollToTop} />
      <Hero />
      <div ref={searchSection}>
        <h3 className="p-2 my-4 text-white font-semibold text-xl">
          { searchList?.length > 0 ? 'SEARCH RESULTS' :  'POPULAR MOVIES' }
        </h3>
        <div className="w-full flex flex-wrap">
          {searchList?.length > 0 ? renderSearchList() : renderPopularMovies()}
        </div>
      </div>

      {page < totalPage && searchList?.length === undefined ? (
        <div className="flex justify-center ">
          <button
            className="text-white rounded-3xl px-4 py-2 m-2  border-4 font-medium border-white"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MainScreen;
