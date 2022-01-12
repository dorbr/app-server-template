import React, { useEffect } from "react";
import { Header } from "./core/";

import { nameVariable } from "./store/cache/cacheVariables";

import "./App.css";

function App() {
  useEffect(() => {
    nameVariable(localStorage.getItem("name") || "UNKNOWN");
  });
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
