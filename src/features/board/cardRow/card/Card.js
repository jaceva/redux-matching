import React from 'react';
// Add import statements below
import { useDispatch, useSelector } from 'react-redux';
import { flipCard, selectVisibleIDs, selectMatchedIDs } from '../../boardSlice.js'

export const Card = ({id, contents}) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id));
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
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }
  
  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    style['color'] = "red";
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {};
  }
  
  return <button 
    style={style} 
    onClick={click}>{cardText}</button>; 
}