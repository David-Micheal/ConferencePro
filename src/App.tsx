import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header/Header";
import HomeScreen from "./components/HomeScreen";
import AllRoutes from "./components/AllRoutes/AllRoutes";

function App() {
  return (
    <div>
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
