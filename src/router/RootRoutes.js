import React from "react";
import { Route, Routes } from "react-router-dom";
import MainScreen from "../pages/main";
import MovieDetailScreen from "../pages/movie-detail";
import PersonDetailScreen from "../pages/person-detail";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="actor/:id" element={<PersonDetailScreen />} />
      <Route path=":category/:id" element={<MovieDetailScreen />} />
      <Route
        path="*"
        element={
          <main className="min-h-screen">
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default RootRoutes;
