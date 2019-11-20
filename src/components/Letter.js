import React from "react";
import "./Letter.scss";

function Letter(props) {
  return (
    <div className="Letter">
      <span>{props.letter}</span>
    </div>
  );
}

export default Letter;
