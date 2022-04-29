// ** Initial State
const initialState = {
  data: [],
  movieCredit: [],
  loading: false,
  error: "",
  movieData: [],
};

const persons = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PERSON_DETAIL":
      return { ...state, data: action.data, loading: action.loading };
    case "GET_THE_MOVIE_CREDIT":
      return { ...state, movieCredit: action.data, loading: action.loading };
    case "LOADING":
      return { ...state, loading: action.loading };
    default:
      return { ...state };
  }
};
export default persons;
