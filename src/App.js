import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';
import { resetCards } from './features/board/cardRow/card/cardSlice.js';
import { setBoard } from './features/board/boardSlice';
import { clearMatched } from './features/score/scoreSlice';

const App = () => {
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(clearMatched())
    dispatch(resetCards())
    dispatch(setBoard())
  }

  const tryAgain = () => {
    dispatch(resetCards())
  }

  return (
    <div className="App">
      <Score/>
      <Board/>
      <button onClick={startGame}>Start Game</button>
      <button onClick={tryAgain}>Try New Pair</button>
    </div>
  );
}

export default App;
