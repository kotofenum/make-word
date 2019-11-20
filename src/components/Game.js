import React from "react";
import "./Game.scss";

import Letter from "./Letter";

function Game(props) {
  return (
    <div className="Game">
      <h2>Scrabble the word ({props.word.length} letters)</h2>
      <div className="Game-word">
        { props.word.split('').sort(() => Math.random() - 0.5).map(letter => <Letter letter={letter} />)}
      </div>
    </div>
  );
}

export default Game;
