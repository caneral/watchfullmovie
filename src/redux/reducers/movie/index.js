// ** Initial State
const initialState = {
  data: [],
  searchData: [],
  loading: false,
  error: "",
  movieData: []
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POPULER_MOVIES":
      return { ...state, data: action.data };
    case "GET_SEARCH_MOVIES":
      return { ...state, searchData: action.data };
    case "GET_MOVIE":
      return { ...state, movieData: action.data };
    default:
      return { ...state };
  }
};
export default movies;
