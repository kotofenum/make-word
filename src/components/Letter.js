import React from "react";
import "./Letter.scss";

function Letter(props) {
  return (
    <div
      className={"Letter " + (props.letter.selected ? "selected" : "")}
      onClick={() => {
        if (!props.letter.selected) props.onSelectLetter(props.letter);
      }}
    >
      <span>{props.letter.char}</span>
    </div>
  );
}

export default Letter;
