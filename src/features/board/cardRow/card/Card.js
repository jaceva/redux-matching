import React, { useEffect, useState } from 'react';
// Add import statements below
import { useDispatch, useSelector } from 'react-redux';
import {
  flipCard,
  selectVisibleIDs,
  selectMatchedIDs,
} from '../../boardSlice.js';
import logo from '../../../../logo.png';

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();
  const [cardState, setCardState] = useState('resting');
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id));
  };

  let cardText = (
    <img src={logo} className="logo-placeholder" alt="Card option" />
  );
  let click = () => {
    flipHandler(id);
    setCardState('selected');
  };

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {};
  }

  useEffect(() => {
    if (visibleIDs.length === 0) {
      setCardState('resting');
    }
    if (matchedIDs.includes(id)) {
      setCardState('matched');
    }
    if (visibleIDs.length === 2 && !matchedIDs.includes(id)) {
      setCardState('no-match');
    }
  }, [visibleIDs, matchedIDs, id]);

  return (
    <button onClick={click} className={`card ${cardState}`}>
      {cardText}
    </button>
  );
};
