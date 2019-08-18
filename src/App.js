import {useState} from "react";
import React from "react";

/*import all child components of App.js into this file */
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import logo from "./Img/Lambda_Logo_white.png"; //logo src value
import Display from "./components/DisplayComponents/Display";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import "./App.css";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  

  const [logoValue, setLogoValue] = useState(logo);

  const [displayValue, setDisplayValue] = useState("");

  const addNumber = (number) => {  
    
    /*when the C button is pressed it places a blank string in displayValue. this results in an undefined value 
      and calculation errors. this if statement checks for undefined and replaces the blank string with the number that
      is entered*/
    if((typeof displayValue === "undefined") || (displayValue === "invalid operation")) {
      setDisplayValue(number);
    }
    else {
      setDisplayValue(displayValue =>  displayValue + number);   
    } 
    
  }

  const addOperator = (operator) => {       

    if(operator === "=") {

      try {
        //setDisplayValue(displayValue => eval(displayValue));
        eval(displayValue);     
        
        //checks if the user divided by zero. a zero division returns "Infinity" to the screen
        if (eval(displayValue) === Infinity) {
          setDisplayValue("can't divide by zero");
        }
        else {      
        setDisplayValue(displayValue => eval(displayValue));
        }
        
      }      
      catch (error) {
        if(error.name === "SyntaxError" || error.name === "RangeError") {
          console.log("error catch");
          setDisplayValue("invalid operation");

        }
        else {
          //setDisplayValue(displayValue => eval(displayValue), 10);
          //setDisplayValue(displayValue => eval(displayValue));
          setDisplayValue("invalid operation");
        }

      }//end catch      

     
    }  //end if
    
    //if another operator besides "=" was selected and the calculator returned undefined or invalid operation 
    //add the operator to the display instead of the words "undefined" or "invalid operation"
    else if((typeof displayValue === "undefined") || (displayValue === "invalid operation")) {
      setDisplayValue(operator);
    }
    else if (typeof displayValue !== "undefined") {
      setDisplayValue(displayValue => displayValue + " " + operator + " ");
    }
   

  }//end addOperator

  const addSpecial = (special) => {

    if(special === "AC") {
      setDisplayValue("");
    }   

    if(special === "%") {

            
      try {
        //setDisplayValue(displayValue => eval(displayValue));
        eval(displayValue);

        if (isNaN(eval(displayValue))){
          console.log("nan", displayValue);
          setDisplayValue = "";
          

        }
        else {          
      
        setDisplayValue(displayValue => eval(displayValue)/100);
        }

        
        
      }  //end try    

      catch (error) {
        if(error.name === "SyntaxError") {
        setDisplayValue("invalid operation");

        }
        /*else {
          setDisplayValue(displayValue => eval(displayValue)/100);
        }*/

      }//end catch

      //setDisplayValue(displayValue => eval(displayValue)/100);
    }    
    /*else {
     
      setDisplayValue(displayValue => eval(displayValue));
    }*/

  }//end addSpecial

  const [numberValue, setNumberValue] = useState(0);
  const [operatorValue, setOperatorValue] = useState(0);
  const [specialValue, setSpecialValue] = useState(0);   

  return (
    <div className="container">

      <div className="calculator">

        <div className="logo">  
          <Logo logoValue={logoValue}/> 
        </div> {/*logo icon */}
    
          {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
          <div className="display"> 

              <Display displayValue={displayValue} /> 
          
          </div> {/* display div */}

            <div className = "button-div">               

                <div className="symbols">

                    {/*left div */}
                    <div className="number-special-div">
                        {/* <Specials />
                        <Numbers /> */}

                        <Specials addSpecial = {addSpecial}/>

                        <Numbers addNumber = {addNumber} />                
                    
                    </div>  {/*end left side div */}

                    {/*right div */}
                    <div className = "operator-div">

                        <Operators addOperator = {addOperator}/>

                    </div> {/* end right side div */}                  

                </div>{/*end symbols div */}

            </div>{/*end button-div */}

        </div>{/*end calculator div */}

    </div>/* end container div */
  );
}

export default App; /*child component of index.js */
