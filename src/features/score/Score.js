import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatched } from '../board/boardSlice';


export const Score = () => {
  const cardsMatched = useSelector(selectMatched);

  return (
    <div>
      Matched: {cardsMatched.length}
    </div>
  )
} 