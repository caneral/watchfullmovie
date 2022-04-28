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
    <div className="mb-12 mx-2 rounded-lg">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movies?.map((movie, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => <SlideItem movie={movie} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const SlideItem = ({ movie, className }) => {
  const background = `${ORIGINAL_IMAGE_PATH}${
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  }`;
  console.log("DATA:", background);

  return (
    <div
      className={`py-36 lg:py-64 w-full relative bg-center bg-cover rounded-lg bg-no-repeat  ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};

export default Hero;
