import React from "react";

/*child component of App.js - export statement at the end of the file
  info is passed in from App.js using props */
const Logo = (props) => {
  return (
    <div className="logo-container">

      <img className="logo-icon" src={props.logoValue} alt="Lambda's Logo" />
      
    </div>
  );
};

export default Logo;
