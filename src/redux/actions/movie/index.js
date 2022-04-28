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
  const params = {query: searchKey}
  return async (dispatch) => {
    await movieApi.search(params)
      .then((response) => {
        dispatch({
          type: "GET_SEARCH_MOVIES",
          data: response.data,
        });
      });
  };
};

// ** Reset
export const RESET_ACTION = {
  type: "RESET"
}
