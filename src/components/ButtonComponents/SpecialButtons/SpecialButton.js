import React from "react";

/*child component of Specials.js - export statement at the end of this file 
  info is passed in from Specials.js using props, hence the props parameter*/
const SpecialButton = (props) => { 

  return (
    <div className = "specialButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = {props.special} onClick = {()=> props.addSpecial(props.special)} > {props.special} </button>
    </div>
  );
};

export default SpecialButton;
