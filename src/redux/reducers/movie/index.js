// ** Initial State
const initialState = {
  data: [],
  moreData: [],
  searchData: [],
  loading: false,
  error: "",
  movieData: [],
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POPULER_MOVIES":
      return { ...state, data: action.data, loading: action.loading };
    case "GET_MORE_POPULER_MOVIES":
      return { ...state, moreData: action.data };
    case "GET_SEARCH_MOVIES":
      return { ...state, searchData: action.data };
    case "GET_MOVIE":
      return { ...state, movieData: action.data };
    case "LOADING":
      return { ...state, loading: action.loading };
    case "RESET":
      return { ...state, searchData: [] };
    default:
      return { ...state };
  }
};
export default movies;
