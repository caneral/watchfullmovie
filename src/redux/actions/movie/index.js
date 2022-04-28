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


// ** Get search results
export const getSearchResults = (searchKey) => {
  return async (dispatch) => {
    await api
      .get("/search/multi", {
        params: {
          api_key: process.env.REACT_APP_MOVIE_KEY,
          query: searchKey
        },
      })
      .then((response) => {
        console.log("Dönen veriler:", response)
        dispatch({
          type: "GET_SEARCH_MOVIES",
          data: response.data,
        });
      });
  };
};

// ** Get movie
export const getMovie = (searchKey) => {
  return async (dispatch) => {
    await api
      .get("/movie/414906/videos", {
        params: {
          api_key: process.env.REACT_APP_MOVIE_KEY,
        },
      })
      .then((response) => {
        console.log("Dönen veriler:", response)
        dispatch({
          type: "GET_MOVIE",
          data: response.data,
        });
      });
  };
};