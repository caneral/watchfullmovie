// ** Initial State
const initialState = {
    data: [],
    loading: false,
    error: "",
    movieData: [],
  };
  
  const persons = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PERSON_DETAIL":
        return { ...state, data: action.data, loading: action.loading };
      default:
        return { ...state };
    }
  };
  export default persons;
  