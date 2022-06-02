import React, { useState } from "react";

function WinnerCircle(props) {

    

  
  return (
    <div className="WinnerContainer">
      <div className={"Winner"+props.Left+" Left"}></div>
      <div className={"Winner"+props.Right+" Right"}></div>
    </div>
  );
}

export default WinnerCircle;
