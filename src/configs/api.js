import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
