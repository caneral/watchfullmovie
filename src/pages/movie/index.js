import React, { useEffect } from "react";
import { getMovie } from "../../redux/actions/movie";
import { useDispatch, useSelector } from "react-redux";

const MovieDetailScreen = () => {
    const store = useSelector(state => state.movies.movieData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie());
  }, []);

  console.log({first:store.results})

  return <div>
      
  </div>;
};

export default MovieDetailScreen;
