import movieApi from "../../../configs/movieApi";

// ** Get popular movies
export const getPopularMovies = () => {
  return async (dispatch) => {
    await movieApi.getPopularMoviesList().then((response) => {
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
    await movieApi.search({query: searchKey})
      .then((response) => {
        console.log("Dönen veriler:", response);
        dispatch({
          type: "GET_SEARCH_MOVIES",
          data: response.data,
        });
      });
  };
};

