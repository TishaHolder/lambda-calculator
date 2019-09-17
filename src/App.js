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

  //adds the numbers selected by the user to the display
  const addNumber = (number) => {  
    
    /*when the AC button is pressed it places a blank string in displayValue. this results in an undefined value 
      and calculation errors. this if statement checks for undefined and replaces the blank string with the number that
      is entered. if the value detected is not undefined or an invalid operation, it is added to the display*/
    if((typeof displayValue === "undefined") || (displayValue === "invalid operation") || (displayValue === "can't divide by zero")) {
      setDisplayValue(number);
    }
    else {
      setDisplayValue(displayValue =>  displayValue + number);   
    } 
    
  }

  //adds the operators selected by the user to the display
  const addOperator = (operator) => {       

    //if the equal sign is selected call the eval function to calculate operation
    if(operator === "=") {

      //try...catch block checks for syntax or other errors in the eval function...for example if the user enters two 
      //plus signs instead of one
      try {
        //setDisplayValue(displayValue => eval(displayValue));
        eval(displayValue); //try checks the eval function for errors    
        
        //checks if the user divided by zero. a zero division returns "Infinity" to the screen
        if (eval(displayValue) === Infinity) {
          setDisplayValue("can't divide by zero");

        }//if the try block did not return any errors or the user did not divide by zero set the results to the screen
        else {
        setDisplayValue(displayValue => eval(displayValue).toFixed(2));
        }
        
      }      
      catch (error) {//handle errors found in the try block by displaying error messages to the screen
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
    
    //if the AC button or another operator besides "=" was selected and the calculator returned undefined or invalid operation 
    //add the operator to the display instead of the words "undefined" or "invalid operation"
    else if((typeof displayValue === "undefined") || (displayValue === "invalid operation") || (displayValue === "can't divide by zero")) {
      setDisplayValue(operator);
    }
    else if (typeof displayValue !== "undefined") {
      setDisplayValue(displayValue => displayValue + " " + operator + " ");
    }
   

  }//end addOperator

  //add the special characters selected by the user to the display
  const addSpecial = (special) => {

    //if the AC button is selected, clear the screen and replace the content with an empty string
    if(special === "AC") {
      setDisplayValue("");
    }   

    //if the percentage sign is selected call the eval function to calculate operation
    if(special === "%") {
      
      //try...catch block checks for syntax or other errors in the eval function...for example if the user enters two 
      //plus signs instead of one
      try {
        
        eval(displayValue);

        //checks if the result returned from calculating the percentage is not a number
        if (isNaN(eval(displayValue))){
          console.log("nan", displayValue);
          setDisplayValue = "";

        }//if the try block did not return any errors or NaN errors, divide by 100 and set the results to the screen
        else {       
          setDisplayValue(displayValue => eval(displayValue)/100).toFixed(2);
        }        
        
      }//end try    

      catch (error) {//handle errors found in the try block by displaying error messages to the screen
        if(error.name === "SyntaxError") {
          setDisplayValue("invalid operation");

        }
        
      }//end catch
      
    }    
    
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


