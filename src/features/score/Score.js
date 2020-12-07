import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatched } from '../board/boardSlice';


export const Score = () => {
  const numMatched = useSelector(selectMatched);

  return (
    <div>
      Matched: {numMatched.length}
    </div>
  )
} 