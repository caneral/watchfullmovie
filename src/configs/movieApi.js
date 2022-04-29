import { api } from "./api";
const movieApi = {
    getPopularMoviesList: (params) => {
      const url = "movie/" + "popular";
      return api.get(url,  {params: params});
    },
    getVideos: (id) => {
      const url = "movie/" + id + "/popular";
      return api.get(url, {params: {}});
    },
    search: (params) => {
      const url = "search/" + "multi";
      return api.get(url, {params: params});
    },
    detail: (category, id, params) => {
      const url = category + '/' + id;
      return api.get(url, params);
    },
    credits: (category, id) => {
      const url = category +'/'+ id + "/credits";
      return api.get(url, {params: {}});
    },
  };
  
  export default movieApi;
  