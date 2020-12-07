import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardRow } from './cardRow/CardRow.js';
import { matched, selectBoard } from './boardSlice.js';

export const Board = () => {
  const currentBoard = useSelector(selectBoard);
  const dispatch = useDispatch();
  const numberOfCards = Object.keys(currentBoard).length
  const rows = Math.floor(numberOfCards/4)

  const getRowCards = (row) => {
    const rowCards = [];
    for(let j=0; j<4; j++) {
      const id = row*4+j;
      rowCards.push(currentBoard[id])
    }

    return rowCards;
  }

  let content = [];
  for (let i=0; i<rows; i++) {
    const rowCards = getRowCards(i);
    content.push(<CardRow 
      key={i} 
      row={i}
      cards={rowCards}/>)
  }
  return content;
}