import React from "react";
import Header from "./components/header";
import MainScreen from "./pages/main";
import MovieDetailScreen from "./pages/movie";
import { BrowserRouter, Route } from "react-router-dom";
import RootRoutes from "./router/RootRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto bg-[#191919] p-2 m-4 rounded-xl">
        {/* <Header /> */}
        {/* <MainScreen /> */}
        {/* <MovieDetailScreen /> */}
        <RootRoutes/>
      </div>
    </BrowserRouter>
  );
};

export default App;
