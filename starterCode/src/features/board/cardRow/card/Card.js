import React from 'react';
// Add import statements below

export const Card = ({id, contents}) => {
  // Add selected data and dispatch variables below

  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below

  }

  const style = {
    borderStyle: "solid",
    display: "inline-grid",
    width: "100px",
    color: "grey"
  }
  let cardText = "<<<>>>"
  let click = () => flipHandler(id);

  // 1st if statement
  // implement card id array membership check
  if (false) {
    cardText = contents;
    click = () => {};
  }
  
  // 2nd if statement
  // implement card id array membership check
  if (false) {
    style['color'] = "red";
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (false) {
    click = () => {};
  }
  
  return <button 
    style={style} 
    onClick={click}>{cardText}</button>; 
}