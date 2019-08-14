import React from "react";

const NumberButton = (props) => {  

  return (
    <div className = "number-button-div">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = {props.number}> {props.number} </button>
    </div>
  );
};

export default NumberButton;
