import { combineReducers, createStore } from 'redux';

import { matchedReducer } from '../features/score/scoreSlice.js';
import { boardReducer } from '../features/board/boardSlice.js';
import { visibleCardsReducer } from '../features/board/cardRow/card/cardSlice.js';

const rootReducer = combineReducers({
  matched: matchedReducer,
  board: boardReducer,
  visibleCards: visibleCardsReducer,
});

export const store = createStore(rootReducer);