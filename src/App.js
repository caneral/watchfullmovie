import React from "react";
import Header from "./components/header";
import MainScreen from "./pages/main";

const App = () => {
  return (
    <div className="container mx-auto bg-[#191919] p-2 m-4 rounded-xl">
      <Header/>
      <MainScreen />
    </div>
  );
};

export default App;
