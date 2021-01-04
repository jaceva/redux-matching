import './App.css';
import React from 'react';
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';
// Add import statements below
import { useDispatch } from 'react-redux';
import { resetCards, setBoard } from './features/board/boardSlice.js';

const App = () => {
  // Add dispatch variable below
  const dispatch = useDispatch();

  const startGameHandler = () => {
    // Add action dispatch below
    dispatch(setBoard())
  }

  const tryAgainHandler = () => {
    // Add action dispatch below
    dispatch(resetCards());
  }

  return (
    <div className="App">
      <Score/>
      <Board/>
      <button onClick={startGameHandler}>New Game</button>
      <button onClick={tryAgainHandler}>Try New Pair</button>
    </div>
  );
}

export default App;