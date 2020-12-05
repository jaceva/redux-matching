import { useDispatch } from 'react-redux';
import { addMatch } from '../../../score/scoreSlice';

const initialState = [];

export const visibleCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'card/flipCard':
      let newState = [...state];      
      newState.push(action.payload);
      console.log(newState)

      return newState;
    case 'card/resetCards':
      return []
    default:
      return state;
  }
}

export const flipCard = (id) => {
  return {
    type: 'card/flipCard',
    payload: id
  }
}

export const resetCards = () => {
  return {
    type: 'card/resetCards'
  }
}

export const selectVisibleCardIDs = state => state.visibleCards.map(
  (card) => card.id);
  
export const selectVisibleCardWords = state => state.visibleCards.map(
    (card) => card.word);
