import React from "react";
import closeIcon from "../images/icon-close.svg";
import imgRules from "../images/image-rules.svg";

function RulesModal(props) {


  return (
    <div className={ props.isVisible + " ModalContainer"}>
      <div className="FlexContainer">
        <div className="ModalContent">
          <div className="ModalHeader">
            <h1 className="ModalHeaderTitle">RULES</h1>
            <img onClick={props.ToggleRules} className="closeIcon" src={closeIcon} alt="close" />
          </div>
          <img
            className="rulesImg"
            src={imgRules}
            alt="Rock Beats scissors, sissors beats paper, paper beats rock"
          />
        </div>
      </div>
    </div>
  );
}

export default RulesModal;
