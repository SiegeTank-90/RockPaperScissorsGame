import React from "react";

function Rules(props) {



  return (
    <div className="RulesButtonContainer">
      <button onClick={props.ToggleRules} className="RulesButton">RULES</button>
    </div>
  );
}

export default Rules;
