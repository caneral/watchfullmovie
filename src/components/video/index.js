import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieVideos } from "../../redux/actions/movie";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const VideoSection = () => {
  // Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.movies);

  const { category, id } = useParams();

  useEffect(() => {
    dispatch(getMovieVideos(category, id));
  }, []);

  const videos = store.videoData?.results?.slice(0, 3);
  const loading = store.loading;

  return (
    <>
      {loading ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={"50vh"} width={"100%"} count={1} />
        </SkeletonTheme>
      ) : (
        <div>
          {videos?.map((video, index) => {
            return (
              <div key={index}>
                <h2 className="text-lg font-medium my-2">{video.name}</h2>
                <iframe
                  className="w-full sm:h-80 md:h-96 lg:h-[500px]"
                  title="video"
                  src={`https://www.youtube.com/embed/${video.key}`}
                ></iframe>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default VideoSection;
