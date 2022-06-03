import React from "react";

function PlayAgain(props) {
 

  return (
    <div className="PlayAgainContainer">
      <h1 className="PlayAgainTitle">{props.Title}</h1>
      <button className="PlayAgainButton" onClick={props.Reset}>
        PLAY AGAIN
      </button>
    </div>
  );
}

export default PlayAgain;
