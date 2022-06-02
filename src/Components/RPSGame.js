import React, { useCallback, useState } from "react";
import PlayAgain from "./PlayAgain.js";
import Symbol from "./Symbol.js";
import SelBG from "../images/bg-triangle.svg";

function Game(prop) {
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
  var [ID, setID]  = useState(Math.floor(Math.random() * 3) + 1);
  var Computer = ComputerPick();

  function ComputerPick() {
    if (1 === ID) {
      return GameObjects.Rock;
    } else if (2 === ID) {
      return GameObjects.Paper;
    } else if (3 === ID) {
      return GameObjects.Sissors;
    }
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
    setGameState(
      <div className="MatchContainer">
        <Symbol choice={props} Selected={Selected} />
        <div className="EmptySymbol"></div>
      </div>
    );

    setTimeout(() => {
      if (CalculateWinner(props.id, ID) === "You Win") {
        setGameState(
          <div className="MatchContainer">
            <Symbol choice={props} Selected={""} />
            <PlayAgain
              Title="You Win"
              Reset={Reset}
              Score={prop.Score}
              setScore={prop.setScore}
            />
            <Symbol choice={Computer} Selected={""} />
          </div>
        );
      } else if (CalculateWinner(props.id, ID) === "You Lose") {
        setGameState(
          <div className="MatchContainer">
            <Symbol choice={props} Selected={""} />
            <PlayAgain
              Title="You Lose"
              Reset={Reset}
              Score={prop.Score}
              setScore={prop.setScore}
            />
            <Symbol choice={Computer} Selected={""} />
          </div>
        );
      } else if (CalculateWinner(props.id, ID) === "Draw") {
        setGameState(
          <div className="MatchContainer">
            <Symbol choice={props} Selected={""} />
            <PlayAgain
              Title="Draw"
              Reset={Reset}
              Score={prop.Score}
              setScore={prop.setScore}
            />
            <Symbol choice={Computer} Selected={""} />
          </div>
        );
      }
    }, 1500);
  }

  const defaultState = (
    <div className="GridContainer">
      <div className="Grid-4">
        <img className="SelectBackground" src={SelBG} />
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

  function Reset() {
    setID( Math.floor(Math.random()*3)+1);
    console.log(ID)
    setGameState(defaultState);
  }

  const [GameState, setGameState] = useState(defaultState);
  return <>{GameState}</>;
}

export default Game;
