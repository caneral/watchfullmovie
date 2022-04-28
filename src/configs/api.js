import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: { api_key: process.env.REACT_APP_MOVIE_KEY },
});

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

