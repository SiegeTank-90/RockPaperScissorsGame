import React from "react";

function PlayAgain(props) {
  if (props.Title === "You Win") {
    props.setScore(props.Score + 1);
  }

  return (
    <div className="PlayAgainContainer">
      <h1>{props.Title}</h1>
      <button className="PlayAgainButton" onClick={() => props.Reset()}>
        PLAY AGAIN
      </button>
    </div>
  );
}

export default PlayAgain;
