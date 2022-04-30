import React, { useEffect, useState, useRef } from "react";
import Movie from "../../components/movie";
import { getPopularMovies, RESET_ACTION } from "../../redux/actions/movie";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import Hero from "../../components/hero";
import movieApi from "../../configs/movieApi";
import PersonCard from "../../components/person";
import SkeletonLoading from "../../components/skeleton";
import Footer from "../../components/footer";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Aos from "aos";
import "aos/dist/aos.css";

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
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);

  useEffect(() => {
    dispatch(RESET_ACTION);
    dispatch(getPopularMovies());
    setData(store.data.results);
    // window.scroll(0, 0);
    Aos.init({ duration: 2000 });
  }, [dispatch, store?.data.length]);

  const loading = store.loading;
  const searchList = store.searchData.results;
  const totalPage = store.data.total_pages;

  const renderPopularMovies = () => {
    return data?.map((movie, index) => <Movie key={index} {...movie} />);
  };

  const renderSearchList = () => {
    return searchList?.map((movie, index) => {
      if (movie.media_type === "person") {
        return movie.known_for
          ?.filter((item) => item.poster_path && item.title)
          .map((item, index) => <PersonCard key={index} {...item} />);
      } else if (movie.media_type !== "tv" && movie.poster_path !== null) {
        return <Movie key={index} {...movie} />;
      }
    });
  };

  const loadMore = async () => {
    let response = null;
    const params = {
      page: page + 1,
    };
    setLoadMoreLoading(true);
    response = await movieApi.getPopularMoviesList(params);
    setLoadMoreLoading(false);
    setData([...data, ...response.data.results]);
    setPage(page + 1);
  };

  const skeletonRender = () => {
    return (
      <div className="flex flex-wrap w-full">
        <SkeletonLoading />
        <SkeletonLoading />
        <SkeletonLoading />
        <SkeletonLoading />
      </div>
    );
  };
  return (
    <div className="relative ">
      <Header scrollToTop={scrollToTop} />
      <Hero />
      <div ref={searchSection}>
        <h3 className="p-2 my-4  font-semibold text-xl">
          {searchList?.length > 0 ? "SEARCH RESULTS" : "POPULAR MOVIES"}
        </h3>
        <div data-aos="fade-up" className="w-full flex flex-wrap ">
          {loading
            ? skeletonRender()
            : searchList?.length > 0
            ? renderSearchList()
            : renderPopularMovies()}
        </div>
      </div>

      {page < totalPage && searchList?.length === undefined ? (
        <div className="flex justify-center ">
          {loadMoreLoading ? (
            <CircularProgress />
          ) : (
            <Button
              variant="outlined"
              className="rounded-3xl px-10 py-2 m-2  border-2  border-white text-white"
              onClick={() => loadMore()}
            >
              Load More
            </Button>
          )}
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default MainScreen;
