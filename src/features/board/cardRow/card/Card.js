import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { flipCard, selectBoard } from '../../boardSlice.js';

export const Card = ({id}) => {
  
  const board = useSelector(selectBoard);
  
  const card = board[id];
  const dispatch = useDispatch();

  const makeVisible = (id) => {
    dispatch(flipCard(id));
  }

  const word = card.word;
  const visible = card.visible;

  let cardText = "<<<>>>"
  if (visible) {
    cardText = word;
  }

  const style = {
    borderStyle: "solid",
    display: "inline-grid",
    width: "100px"
  }

  return <button style={style} onClick={() => makeVisible(id)}>{cardText}</button>; 
}