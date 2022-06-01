import React from "react";
import Symbol from "./Symbol.js";
import SelBG from "../images/bg-triangle.svg";

function Game() {
  const GameObjects = {
    Rock: {
      id: 1,
      name: "Rock",
      img: "./images/icon-rock.svg"
    },
    Paper: {
      id: 2,
      name: "Paper",
      img: "./images/icon-paper.svg"
    },
    Sissors: {
      id: 3,
      name: "Sissors",
      img: "./images/icon-scissors.svg"
    }
  };

  function Selected(props) {
    console.log(props);
  }

  return (
    <>
      
      <div className="FlexContainer">
        <img className="SelectBackground" src={SelBG} />
        <Symbol choice={GameObjects.Rock} Selected={Selected} />
        <Symbol choice={GameObjects.Paper} Selected={Selected} />
        <Symbol choice={GameObjects.Sissors} Selected={Selected} />
      </div>
    </>
  );
}

export default Game;
