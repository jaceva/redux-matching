import React, { useEffect, useState } from 'react';
// Add import statements below
import { useDispatch, useSelector } from 'react-redux';
import {
  flipCard,
  selectVisibleIDs,
  selectMatchedIDs,
} from '../../boardSlice.js';
// import logo from '../../../../logo.png';

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();
  //const [cardState, setCardState] = useState('resting');
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id));
  };

  let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";
  
  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
