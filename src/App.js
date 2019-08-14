import {useState} from "react";
import React from "react";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Display from "./components/DisplayComponents/Display";
import "./App.css";

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component



function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [displayValue, setDisplayValue] = useState(0);
  const [numberValue, setNumberValue] = useState(0);
  const [operatorValue, setOperatorValue] = useState(0);
  const [specialValue, setSpecialValue] = useState(0);

   

  return (
    <div className="container">

      <div className="calculator">

        <div className="logo">  <Logo /> </div> {/*logo icon */}
    
          {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
          <div className="display"> 

          <Display displayValue={displayValue} /> </div> {/* display div */}

            <div className = "button-div">               

                <div className="symbols">

                    <div className="left-div">
                        {/* <Specials />
                        <Numbers /> */}

                        <Specials specialValue = {specialValue}/>

                        <Numbers numberValue = {numberValue} />                
                    
                    </div>  {/*end left side div */}

                    <div className = "right-div">

                        <Operators operatorValue = {operatorValue}/>

                    </div> {/* end right side div */}
                  

                </div>{/*end symbols div */}

            </div>{/*end button-div */}

        </div>{/*end calculator div */}

    </div>/* end container div */
  );
}

export default App;
