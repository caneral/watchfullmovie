// ** Initial State
const initialState = {
  data: [],
  loading: false,
  error: ""
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POPULER_MOVIES':
      return { ...state, data: action.data }
      default:
        return { ...state }
  }
};
export default movies;

