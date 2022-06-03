import React, { useState } from "react";
import PlayAgain from "./PlayAgain.js";
import Symbol from "./Symbol.js";
import SelBG from "../images/bg-triangle.svg";

function Game(GameProps) {
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
  const defaultState = (
    <div className="GridContainer">
      <div className="Grid-4">
        <img className="SelectBackground" alt="Background" src={SelBG} />
      </div>
      <div className="Grid-1">
        <Symbol choice={GameObjects.Rock} Selected={Selected} />
      </div>
      <div className="Grid-2">
        <Symbol choice={GameObjects.Paper} Selected={Selected} />
      </div>

      <div className="Grid-3">
        <Symbol choice={GameObjects.Sissors} Selected={Selected} />
      </div>
    </div>
  );
  const [GameState, setGameState] = useState(defaultState);

  function ComputerPick(props) {

    if (1 === props) {
      return GameObjects.Rock;
    } else if (2 === props) {
      return GameObjects.Paper;
    } else if (3 === props) {
      return GameObjects.Sissors;
    }
  }

  function Reset() {
    GameProps.setLeft("Disabled");
    GameProps.setRight("Disabled");
    setGameState(defaultState);
  }

  function CalculateWinner(player, computer) {
    if (player === 1 && computer === 3) {
      return "You Win";
      // Rock
    } else if (player === 2 && computer === 1) {
      return "You Win";
      //Paper
    } else if (player === 3 && computer === 2) {
      return "You Win";

      //Siscores
    } else if (player === computer) {
      return "Draw";
    } else {
      return "You Lose";
    }
  }

  function Selected(props) {
    var ID = Math.floor(Math.random() * 3) + 1;
    var Computer = ComputerPick(ID);


    setGameState(
      <div className="MatchContainer">
        <Symbol choice={props} />
        <div className="EmptySymbol"></div>
      </div>
    );

    setTimeout(() => {
      if (CalculateWinner(props.id, ID) === "You Win") {
        GameProps.setLeft("Enabled");
        GameProps.setScore((PrevScore) => PrevScore + 1);
        setGameState(
          <div className="MatchContainer">
            <Symbol choice={props} />
            <PlayAgain Title="You Win" Reset={Reset} />
            <Symbol choice={Computer} />
          </div>
        );
      } else if (CalculateWinner(props.id, ID) === "You Lose") {
        GameProps.setRight("Enabled");
        GameProps.setScore((PrevScore) => PrevScore - 1);
        setGameState(
          <div className="MatchContainer">
            <Symbol choice={props} />
            <PlayAgain Title="You Lose" Reset={Reset} />
            <Symbol choice={Computer} />
          </div>
        );
      } else if (CalculateWinner(props.id, ID) === "Draw") {
        setGameState(
          <div className="MatchContainer">
            <Symbol choice={props} />
            <PlayAgain Title="Draw" Reset={Reset} />
            <Symbol choice={props} />
          </div>
        );
      }
    }, 1500);
    clearTimeout();
  }

  return <>{GameState}</>;
}

export default Game;
