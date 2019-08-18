import React from "react";

/*child component of App.js - export statement at the end of the file
  info is passed in from App.js using props, hence the props parameter */
const Display = (props) => {
  
  return <div className = "display-div">{/* Display any props data here */}

      {props.displayValue}  
  
  </div>;
};

export default Display;/*child component of App.js*/
