import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../redux/actions/movie";
import { IMAGE_PATH, ORIGINAL_IMAGE_PATH } from "../../configs/api";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/bundle";

const Hero = () => {
  SwiperCore.use([Autoplay]);
  // Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch, store?.data.length]);

  const movies = store.data.results?.slice(0, 4);

  return (
    <div className="rounded-lg ">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movies?.map((movie, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <SlideItem movie={movie} active={`${isActive ? true : false}`} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const SlideItem = ({ movie, active }) => {
  const background = `${ORIGINAL_IMAGE_PATH}${
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  }`;

  return (
    <div
      className={`py-32 w-full  bg-center bg-cover bg-no-repeat rounded-lg before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full  after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full before:bg-gradient-to-tr before:from-black `}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex text-white items-center justify-around ">
        <div className="w-full lg:w-1/2 py-0 px-12 relative">
          <h2 className={`md:text-5xl lg:text-6xl font-bold`}>{movie.title}</h2>
          <div className="font-semibold py-2">{movie.overview}</div>
        </div>
        <div className={`hidden md:block relative px-12 `}>
          <img
            className={`w-40 sm:w-40 md:w-80 lg:w-96 rounded-2xl `}
            src={`${IMAGE_PATH}${movie.poster_path}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
