import React from "react";

/*child component of Operators.js - export statement at the end of this file 
  info is passed in from Operators.js using props, hence the props parameter*/
const OperatorButton = (props) => {


  return (
    <div className = "operator-button-div">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = {props.operator} onClick = {()=> props.addOperator(props.operator)}> {props.operator} </button>
    </div>
  );
};

export default OperatorButton;