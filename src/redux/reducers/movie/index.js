// ** Initial State
const initialState = {
  data: [],
  moreData: [],
  searchData: [],
  detailData: [],
  castData: [],
  videoData: [],
  loading: false,
  error: [],
  movieData: [],
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POPULER_MOVIES":
      return { ...state, data: action.data, loading: action.loading };
    case "GET_MOVIE_DETAIL":
      return { ...state, detailData: action.data, loading: action.loading, error: action.error };
    case "GET_MOVIE_DETAIL_REJECTED":
      return { ...state, error: action.data, };
    case "GET_THE_CAST":
      return { ...state, castData: action.data };
    case "GET_MOVIE_VIDEO":
      return { ...state, videoData: action.data };
    case "GET_SEARCH_MOVIES":
      return { ...state, searchData: action.data };
    case "GET_MOVIE":
      return { ...state, movieData: action.data };
    case "LOADING":
      return { ...state, loading: action.loading };
    case "RESET":
      return { ...state, searchData: [], error: [] };
    default:
      return { ...state };
  }
};
export default movies;
