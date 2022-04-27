// ** Initial State
const initialState = {
  data: [],
  loading: false,
  error: ""
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return { ...state, data: action.data };
  }
};
export default movies;
