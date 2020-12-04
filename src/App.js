import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';
import { setBoard } from './features/board/boardSlice.js';

const App = () => {
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(setBoard())
  }

  return (
    <div className="App">
      <Score/>
      <Board/>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default App;
