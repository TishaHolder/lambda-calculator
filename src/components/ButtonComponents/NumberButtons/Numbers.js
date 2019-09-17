import React from "react";
import {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import {numbers} from "../../../data";

/*numbers is the parent component of NumberButton.js - import NumberButton.js
  numbers is the child component of App.js - export statement at the end of this file */
  
const Numbers = (props) => {

  // STEP 2 - add the imported data to state - numbers imported from the numbers array in data.js
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className = "numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {numberState.map((number, index) => <NumberButton key = {index} 
                                                        number = {number} 
                                                        addNumber = {props.addNumber}/>)}
      
    </div>
  );
};

export default Numbers;