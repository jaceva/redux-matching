import './App.css';
import React from 'react';
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';
// Add import statements below

const App = () => {
  // Add dispatch variable below

  const startGameHandler = () => {
    // Add action dispatch below

  }

  const tryAgainHandler = () => {
    // Add action dispatch below
    
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
