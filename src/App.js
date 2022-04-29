import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import RootRoutes from "./router/RootRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto bg-[#191919] py-4 px-4 my-2 rounded-xl text-white">
        <Link to="/">
          <p className="w-full sm:w-1/2 text-sm sm:text-xl font-bold  text-center sm:text-left ">
            WATCHFULLMOVIE
          </p>
        </Link>
      </div>
      <div className="container mx-auto bg-[#191919] p-2 mb-4 rounded-xl text-white">
        <RootRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
