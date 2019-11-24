import React, { useState, useEffect } from "react";
import "./App.scss";

import Game from "./components/Game";

function App() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const randomizedLetters = "develop"
      .split("")
      .sort(() => Math.random() - 0.5);

    setLetters(
      randomizedLetters.map((letter, idx) => ({
        char: letter,
        selected: false,
        idx
      }))
    );
  }, []);

  const onSelectLetter = letter => {
    setLetters(letters.map(l => (l.idx === letter.idx ? letter : l)));
  };

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
        <Game originalWord="develop" letters={letters} onSelectLetter={onSelectLetter} />
      </main>
    </div>
  );
}

export default App;
