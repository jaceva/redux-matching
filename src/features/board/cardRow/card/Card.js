import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { flipCard, selectVisibleCardIDs, selectVisibleCardWords } from './cardSlice.js';
import { selectMatched } from '../../../score/scoreSlice';

export const Card = ({id, word}) => {
  const visibleCardIDs = useSelector(selectVisibleCardIDs);
  const matched = useSelector(selectMatched);
  const dispatch = useDispatch();

  const makeVisible = (word) => {
    dispatch(flipCard(word));
  }

  const style = {
    borderStyle: "solid",
    display: "inline-grid",
    width: "100px",
    color: "grey"
  }

  let cardText = "<<<>>>"
  let click = () => makeVisible({id:id, word:word})
  if (visibleCardIDs.includes(id) || 
    matched.includes(word)) {
    cardText = word;
    click = () => {};
  }

  if (visibleCardIDs.length == 2) {
    click = () => {};
  }

  if (matched.includes(word)) {
    style['color'] = "red";
  }

  return <button 
    style={style} 
    onClick={click}>{cardText}</button>; 
}