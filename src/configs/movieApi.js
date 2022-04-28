import { api } from "./api";
const movieApi = {
    getPopularMoviesList: (params) => {
      const url = "movie/" + "popular";
      return api.get(url, params);
    },
    getVideos: (id) => {
      const url = "movie/" + id + "/popular";
      return api.get(url, {params: {}});
    },
    search: (params) => {
      const url = "search/" + "multi";
      return api.get(url, {params: params});
    },
    detail: (id, params) => {
      const url = "popular/" + id;
      return api.get(url, {params: params});
    },
    credits: (id) => {
      const url = "popular/" + id + "/credits";
      return api.get(url, {params: {}});
    },
  };
  
  export default movieApi;
  