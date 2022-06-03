import React from "react";

function Symbol(props) {
  return (
    <div onClick={() => props.Selected(props.choice)} className="SymbolContainer">
      <div className={props.choice.name}>
        <div className={"Symbol" }>
          <img
            className="SymbolImg"
            src={props.choice.img}
            alt={props.choice.name}
          />
        </div>
      </div>
    </div>
  );
}

export default Symbol;
