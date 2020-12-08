import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';
import { setBoard, resetCards } from './features/board/boardSlice';

const App = () => {
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(setBoard())
  }

  const tryAgainHandler = () => {
    dispatch(resetCards())
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
