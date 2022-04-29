import React from "react";
import { Route, Routes } from "react-router-dom";
import MainScreen from "../pages/main";
import MovieDetailScreen from "../pages/movie-detail";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="category" element={<MainScreen />} />
      <Route path=":category/:id" element={<MovieDetailScreen />} />

      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default RootRoutes;
