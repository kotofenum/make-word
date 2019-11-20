import React from "react";
import "./App.scss";

import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span>Make </span>
          <span className="w">w</span>
          <span className="o">o</span>
          <span className="r">r</span>
          <span className="d">d</span>
        </h1>
      </header>
      <main>
        <Game word="develop" />
      </main>
    </div>
  );
}

export default App;
