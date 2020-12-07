import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { flipCard , selectVisible, selectMatched } from '../../boardSlice';


export const Card = ({id, contents}) => {
  const visibleIDs = useSelector(selectVisible);
  const matchedIDs = useSelector(selectMatched);
  const dispatch = useDispatch();

  // flip card action
  const flip = (id) => {
    dispatch(flipCard(id));
  }

  // init card info
  const style = {
    borderStyle: "solid",
    display: "inline-grid",
    width: "100px",
    color: "grey"
  }
  let cardText = "<<<>>>"
  let click = () => flip(id);

  // show text and disable click if visible or matched
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }
  
  // red text if matched
  if (matchedIDs.includes(id)) {
    style['color'] = "red";
  }

  // don't allow flip while two unmatched cards are visible
  if (visibleIDs.length == 2) {
    click = () => {};
  }
  
  return <button 
    style={style} 
    onClick={click}>{cardText}</button>; 
}