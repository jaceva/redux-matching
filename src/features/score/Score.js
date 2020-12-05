import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectVisibleCardWords, resetCards } from '../board/cardRow/card/cardSlice';
import { addMatch, selectNumberMatched } from './scoreSlice';

export const Score = () => {
  const numMatched = useSelector(selectNumberMatched);
  const visibleCardWords = useSelector(selectVisibleCardWords); 
  const dispatch = useDispatch();

  const matched = (matches) => {
    dispatch(addMatch(matches));
    dispatch(resetCards());
  }

  const reset = () => {  
    dispatch(resetCards());
  }

  console.log(visibleCardWords)
  if (visibleCardWords.length == 2 &&
    visibleCardWords[0] === visibleCardWords[1]) {
      matched(visibleCardWords)
      
  }

  return (
    <div>
      Matched: {numMatched}
    </div>
  )
} 