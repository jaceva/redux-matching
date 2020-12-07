import React from 'react';
import { useSelector } from 'react-redux';
import { CardRow } from './cardRow/CardRow.js';
import { selectBoard } from './boardSlice.js';

export const Board = () => {
  const currentBoard = useSelector(selectBoard);
  const numberOfCards = currentBoard.length
  const columns = 4;
  const rows = Math.floor(numberOfCards/columns)

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