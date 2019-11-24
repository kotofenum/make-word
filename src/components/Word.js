import React from "react";
import "./Word.scss";

function Word(props) {
  return (
    <div className="Word">
      <h3>{props.word}</h3>
      <span>
        {props.word.length === props.originalWord.length &&
        props.word === props.originalWord
          ? "correct"
          : ""}
      </span>
    </div>
  );
}

export default Word;
