import React, { useState } from "react";
import "./Game.scss";

import Letter from "./Letter";
import Word from "./Word";

function Game(props) {
  const [selectedLetters, selectLetter] = useState([]);

  const onSelectLetter = letter => {
    props.onSelectLetter({ ...letter, selected: true });
    selectLetter([...selectedLetters, letter]);
  };

  return (
    <div className="Game">
      <h2>Scrabble the word ({props.letters.length} letters)</h2>
      <div className="Game-letters">
        {props.letters.map((letter, idx) => (
          <Letter letter={letter} key={idx} onSelectLetter={onSelectLetter} />
        ))}
      </div>
      <Word originalWord={props.originalWord} word={selectedLetters.map(l => l.char).join("")} />
    </div>
  );
}

export default Game;
