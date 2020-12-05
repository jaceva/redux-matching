import React from 'react';
import { useSelector } from 'react-redux';
import { CardRow } from './cardRow/CardRow.js';
import { selectBoard } from './boardSlice.js';

export const Board = () => {
  const currentBoard = useSelector(selectBoard);
  const numberOfCards = Object.keys(currentBoard).length
  const rows = Math.floor(numberOfCards/4)

  const getRowCards = (row) => {
    const rowCards = {};
    for(let j=0; j<4; j++) {
      const id = row*4+j;
      rowCards[id] = currentBoard[id]
    }

    return rowCards;
  }

  let content = [];
  for (let i=0; i<rows; i++) {
    // Get cards in Row
    const rowCards = getRowCards(i);
    content.push(<CardRow 
      key={i} 
      row={i}
      cards={rowCards}/>)
  }
  return content;
}