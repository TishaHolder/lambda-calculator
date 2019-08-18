import React from "react";

/*child component of Numbers.js - export statement at the end of this file 
  info is passed in from Numbers.js using props, hence the props parameter*/
const NumberButton = (props) => {  

  return (
    <div className = "number-button-div">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = {props.number} onClick = {()=> props.addNumber(props.number)}> {props.number} </button>
    </div>
  );
};

export default NumberButton;
