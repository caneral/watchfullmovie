import movieApi from "../../../configs/movieApi";

// ** Get popular movies
export const getPopularMovies = (params) => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING",
      loading: true
    })
    await movieApi.getPopularMoviesList(params).then((response) => {
      dispatch({
        type: "GET_POPULER_MOVIES",
        data: response.data,
        loading: false
      });
    });
  };
};

// ** Get popular movies
export const getMovieDetail = (category, id) => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING",
      loading: true
    })
    await movieApi.detail(category, id, {params: {}}).then((response) => {
      dispatch({
        type: "GET_MOVIE_DETAIL",
        data: response.data,
        loading: false,
        error: []
      });
    })
    .catch((err) => {
      dispatch({
        type: "GET_MOVIE_DETAIL_REJECTED",
        data: err.response
      })
    })
  };
};

// ** Get the cast and crew for a movie
export const getCasts = (category, id) => {
  return async (dispatch) => {
    await movieApi.credits(category, id).then((response) => {
      dispatch({
        type: "GET_THE_CAST",
        data: response.data,
      });
    });
  };
};

// ** Get videos
export const getMovieVideos = (category, id) => {
  return async (dispatch) => {
    await movieApi.getVideos(category, id).then((response) => {
      dispatch({
        type: "GET_MOVIE_VIDEO",
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
