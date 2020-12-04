import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardRow } from './cardRow/CardRow.js';
import { selectBoard } from './boardSlice.js';

export const Board = () => {
  const currentBoard = useSelector(selectBoard);
  const numberOfCards = Object.keys(currentBoard).length
  const rows = Math.floor(numberOfCards/4)

  let content = [];
  for (let i=0; i<rows; i++) {
    content.push(<CardRow key={i} row={i}/>)
  }
  return content;
}