// cardOrder {
//  1:
// }
// visible

const initialState = {
  0: 'Provider', 
  1: 'Provider', 
  2: 'selector', 
  3: 'selector', 
  4: 'useSelector()', 
  5: 'useSelector()', 
  6: 'useDispatch()', 
  7: 'useDispatch()', 
  8: 'Pure Function', 
  9: 'Pure Function', 
  10: 'react-redux', 
  11: 'react-redux', 
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'board/setBoard':
      let newState = {}
      action.payload.forEach((element, index) => 
        newState[index] = element
      );

      console.log(newState);
      return newState;
    default:
      return state;
  }
}

const wordPairs = [
  'Provider', 'Provider', 
  'selector', 'selector', 
  'useSelector()', 'useSelector()', 
  'useDispatch()', 'useDispatch()',
  'Pure Function', 'Pure Function',
  'react-redux', 'react-redux',
]

const randomWords = () => {
  let words = []
  let newWordPairs = [...wordPairs]
  const reps = newWordPairs.length
  for (let i=0; i<reps; i++) {
    const wordIndex = Math.floor(Math.random()*newWordPairs.length);
    words.push(newWordPairs[wordIndex])
    newWordPairs.splice(wordIndex, 1)
  }

  return words;
} 

export const setBoard = () => {
  const words = randomWords()
  return {
    type: 'board/setBoard',
    payload: words
  }
}

export const selectBoard = state => state.board;