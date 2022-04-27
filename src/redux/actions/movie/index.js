import { api } from "../../../configs/api";
// ** Get popular movies
export const getPopularMovies = () => {
  return async (dispatch) => {
    await api
      .get("/movie/popular", {
        params: {
          api_key: process.env.REACT_APP_MOVIE_KEY,
        },
      })
      .then((response) => {
        dispatch({
          type: "GET_POPULER_MOVIES",
          data: response.data,
        });
      });
  };
};
