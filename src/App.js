import "./App.css";
import React, { useState } from "react";
import RPSGame from "./Components/RPSGame.js";
import WinnerCircle from "./Components/WinnersCircle.js";
import RulesModal from "./Components/RulesModal.js";
import Rules from "./Components/Rules.js";
import Scoreboard from "./Components/Scoreboard.js";

function App() {
  const [isVisible, setIsVisible] = useState("hidden");
  const [Score, setScore] = useState(0);
  const [Left, setLeft] = useState("Enabled");
  const [Right, setRight] = useState("Disabled");

  function ToggleRules() {
    if (isVisible === "hidden") {
      setIsVisible("");
    } else setIsVisible("hidden");
  }

  return (
    <div className="App">
      <RulesModal isVisible={isVisible} ToggleRules={ToggleRules} />
      <Scoreboard Score={Score} />
      <RPSGame
        Score={Score}
        setScore={setScore}
        setRight={setRight}
        setLeft={setLeft}
      />
      <Rules ToggleRules={ToggleRules} />
      <WinnerCircle Left={Left} Right={Right} />
    </div>
  );
}

export default App;
