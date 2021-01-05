import React from 'react';
import { CardRow } from './cardRow/CardRow.js';
// Add import statements below
import { useSelector } from 'react-redux';
import { selectBoard } from './boardSlice';

export const Board = () => {
  // Add selected data variable and implement below
  const currentBoard = useSelector(selectBoard);
  const numberOfCards = currentBoard.length;
  const columns = 4;
  const rows = Math.floor(numberOfCards / columns);

  const getRowCards = (row) => {
    const rowCards = [];
    for (let j = 0; j < 4; j++) {
      const id = row * 4 + j;
      // Implement selected data below
      rowCards.push(currentBoard[id]);
    }

    return rowCards;
  };

  let content = [];
  for (let i = 0; i < rows; i++) {
    const rowCards = getRowCards(i);
    content.push(<CardRow key={i} row={i} cards={rowCards} />);
  }
  return <div className="cards-container">{content}</div>;
};
