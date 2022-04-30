import React from "react";
import { Route, Routes } from "react-router-dom";
import MainScreen from "../pages/main";
import MovieDetailScreen from "../pages/movie-detail";
import NotFound from "../pages/not-found";
import PersonDetailScreen from "../pages/person-detail";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="actor/:id" element={<PersonDetailScreen />} />
      <Route path="movie/:id" element={<MovieDetailScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RootRoutes;
