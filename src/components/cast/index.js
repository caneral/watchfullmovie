import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCasts } from "../../redux/actions/movie";

const Cast = ({ category, id }) => {
  //Redux vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getCasts(category, id));
  }, []);

  const casts = store.castData?.cast?.slice(0, 6);

  return (
    <div className="flex flex-wrap gap-3 ">
      {casts?.map((actor, index) => (
          <button key={index} className="text-md ">{actor.name}</button>
      ))}
     </div>
  );
};

export default Cast;
