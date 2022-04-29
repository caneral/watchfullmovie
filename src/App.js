import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RootRoutes from "./router/RootRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto bg-[#191919] p-2 m-4 rounded-xl text-white">
        <RootRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
