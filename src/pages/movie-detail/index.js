import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetail } from "../../redux/actions/movie";
import { IMAGE_PATH, ORIGINAL_IMAGE_PATH } from "../../configs/api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Cast from "../../components/cast";
import VideoSection from "../../components/video";
import Footer from "../../components/footer";
const MovieDetailScreen = () => {
  // Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.movies);

  // Route params
  const { category, id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetail(category, id));
    window.scroll(0, 0);
  }, [dispatch, store?.detailData.length]);

  const movie = store?.detailData;
  const loading = store?.loading;
  return (
    <div>
      <div className="relative ">
        {!loading ? (
          <div
            className="flex min-h-[50vh] py-10 bg-center bg-cover bg-no-repeat  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-tr before:from-black"
            style={{
              backgroundImage: `url(${ORIGINAL_IMAGE_PATH}${
                movie.backdrop_path || movie.poster_path
              })`,
            }}
          >
            <div className={`hidden md:block relative px-12`}>
              <img
                className={` sm:w-64 md:w-80 lg:w-96 rounded-2xl `}
                src={`${IMAGE_PATH}${movie.poster_path}`}
              />
            </div>
            <div className="w-2/3 px-8 relative">
              <div className="font-medium text-xl md:text-4xl mb-4">
                <h1>{movie.title || movie.name}</h1>
              </div>

              <div className="gap-4 flex my-2">
                {movie.genres
                  ? movie.genres.map((item, index) => {
                      return (
                        <span
                          className="py-1 px-4 bg-white text-black rounded-2xl font-medium text-sm md:text-lg text-center items-center flex"
                          key={index}
                        >
                          {item.name}
                        </span>
                      );
                    })
                  : null}
              </div>
              <p className="">{movie.overview}</p>
              <div className="relative">
                <h2 className="font-medium text-xl mt-2">Imdb</h2>

                <div className="text-lg font-medium">{movie.vote_average}</div>
              </div>
              <div className="relative">
                <h2 className="font-medium text-xl my-4">Casts</h2>
                <div>
                  <Cast category={category} id={id} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={"50vh"} width={"100%"} count={1} />
          </SkeletonTheme>
        )}
      </div>
      {/* Video Section */}
      <div className="my-4">
        <VideoSection />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MovieDetailScreen;
