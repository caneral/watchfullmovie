import movieApi from "../../../configs/movieApi";

// ** Get person detail
export const getPersonDetail = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "LOADING",
      loading: true
    })
    await movieApi.person(id, {params: {}}).then((response) => {
      dispatch({
        type: "GET_PERSON_DETAIL",
        data: response.data,
        loading: false
      });
    });
  };
};





