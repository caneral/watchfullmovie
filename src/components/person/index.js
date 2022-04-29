import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_PATH } from "../../configs/api";

const PersonCard = ({
  poster_path,
  title,
  vote_average,
  release_date,
  profile_path,
  media_type,
  id
}) => {
  return (
    <div className="p-2 sm:w-1/2 lg:w-1/4 transform hover:scale-95 transition cursor-pointer">
      <Link to={`movie/${id}`}>
        <div className="flex flex-col  border-2 border-opacity-10 border-gray-500 overflow-hidden rounded-lg">
          {poster_path ? (
            <img
              className="w-full lg:h-80 md:h-24 object-cover object-center"
              src={`${IMAGE_PATH}${poster_path}`}
              alt="image"
            />
          ) : profile_path ? (
            <img
              className="w-full lg:h-64 md:h-24 object-cover object-center"
              src={`${IMAGE_PATH}${profile_path}`}
              alt="image"
            />
          ) : null}
          <div className="h-20 flex items-center justify-between p-4 bg-[#050e12]">
            <h3 className="text-base font-medium  sm:w-40 lg:w-40 xl:w-64">
              {title?.length > 30 ? title?.slice(0, 27) + "..." : title} -{" "}
              {release_date?.split("-")[0]}
            </h3>
            <span className="">{vote_average}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PersonCard;
