import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/bundle";
import { getMovieCredits } from "../../redux/actions/person";
import { IMAGE_PATH } from "../../configs/api";

const MovieSlide = () => {
  SwiperCore.use([Autoplay]);

  // Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.persons);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieCredits(id));
  }, []);

  const credits = store.movieCredit?.cast?.slice(0,10);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        grabCursor={false}
        spaceBetween={0}
        slidesPerView={3}
        autoplay={{ delay: 4000 }}
      >
        {credits?.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to={`/movie/${movie.id}`}>
                <SlideItem movie={movie} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const SlideItem = ({ movie }) => {
  return (
    <div className={`py-4 w-full  rounded-lg`}>
      <div className="flex items-center justify-around ">
        <div className={`md:block relative px-12 `}>
          <img
            className={`md:w-44 lg:w-64 rounded-2xl `}
            src={`${IMAGE_PATH}${movie?.poster_path }`}
            alt={`${movie.title}`}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieSlide;
