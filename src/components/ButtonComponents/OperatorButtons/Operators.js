import React from "react";
import {useState} from "react";

//import any components needed
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file
import {operators} from "../../../data";

/*this is the parent component for Operator Button - OperatorButton is imported
  this is the child component of App.js - export statement at the end of this file */
const Operators = (props) => {
  // STEP 2 - add the imported data to state - operators imported from the operators array in data.js
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div className = "operators-div">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {operatorState.map((operator, index) => <OperatorButton key = {index} 
                                                              operator = {operator.value } 
                                                              addOperator = {props.addOperator}/>)}

    </div>
  );
};

export default Operators;
