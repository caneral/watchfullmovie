import React from "react";
import { IMAGE_PATH } from "../../configs/api";

const Movie = ({ poster_path, title, vote_average, release_date }) => {
  return (
    <div className="p-2 sm:w-1/2 lg:w-1/4">
      <div className="flex flex-col h-full border-2 border-opacity-10 border-gray-500 overflow-hidden rounded-lg">
        {poster_path ? (
          <img
            className="w-full lg:h-72 md:h-48 object-cover object-center"
            src={`${IMAGE_PATH}${poster_path}`}
            alt="image"
          />
        ) : null}
        <div className="h-20 flex items-center justify-between p-4 bg-[#050e12]">
          <h3 className="text-base font-medium text-white sm:w-40 lg:w-40 xl:w-64">
            {title.length > 30 ? title.slice(0, 27) + "..." : title} -{" "}
            {release_date.split("-")[0]}
          </h3>
          <span className="text-white">{vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
