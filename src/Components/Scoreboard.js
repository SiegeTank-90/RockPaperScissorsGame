import React from "react";
import TitleImg from "../images/logo.svg";

function Scoreboard() {
  return (
    <header className="Header">
    <div className="ScoreboardContainer">
      <img className="Title" alt="TitleImg" src={TitleImg} />
      <div className="ScoreContainer">
        <h3 className="ScoreHeader">SCORE</h3>
        <h3 className="ScoreCount">0</h3>
      </div>
    </div>
    </header>
  );
}

export default Scoreboard;
