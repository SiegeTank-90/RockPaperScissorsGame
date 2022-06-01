import './App.css';
import React, { useState } from 'react';
import RPSGame from "./Components/RPSGame.js"
import RulesModal from "./Components/RulesModal.js"
import Rules from "./Components/Rules.js"
import Scoreboard from "./Components/Scoreboard.js"

function App() {

 const [isVisible, setIsVisible] = useState("hidden")

 function ToggleRules() {
  if (isVisible === "hidden") {
    setIsVisible("")
  } else setIsVisible("hidden")
}


  return (
    <div className="App">
      <RulesModal isVisible={isVisible} ToggleRules={ToggleRules} />
      <Scoreboard />
      <RPSGame />
      <Rules ToggleRules={ToggleRules} />
  
    </div>
  );
}

export default App;
