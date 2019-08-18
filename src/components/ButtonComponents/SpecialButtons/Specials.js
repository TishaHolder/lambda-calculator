import React from "react";
import {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";

//Import your array data to from the provided data file 
import {specials} from "../../../data";

/*specials is the parent component of SpecialButton.js - import SpecialButton.js
  specials is the child component of App.js - export statement at the end of this file */
  
const Specials = (props) => {
  // STEP 2 - add the imported data to state - special characters imported from the specials array in data.js
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div className = "specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {specialState.map((specialCharacter, index) => <SpecialButton key = {index} 
                                                                    special = {specialCharacter} 
                                                                    addSpecial = {props.addSpecial}/>)}

    </div>
  );
};

export default Specials;
