// cardOrder {
//  1:
// }
// visible

// actions: setOrder, check match

const initialState = {
  0: {word: 'Provider', visible: true}, 
  1: {word: 'Provider', visible: true}, 
  2: {word: 'selector', visible: true}, 
  3: {word: 'selector', visible: true}, 
  4: {word: 'useSelector()', visible: true}, 
  5: {word: 'useSelector()', visible: true}, 
  6: {word: 'useDispatch()', visible: true}, 
  7: {word: 'useDispatch()', visible: true}, 
  8: {word: 'Pure Function', visible: true}, 
  9: {word: 'Pure Function', visible: true}, 
  10: {word: 'react-redux', visible: true}, 
  11: {word: 'react-redux', visible: true}, 
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'board/setBoard':
      let newState = {}
      action.payload.forEach((element, index) => 
        newState[index] = {word: element, visible: false}
      );
      console.log(newState);
      return newState;
    case 'board/flipCard':
      const id = action.payload;
      console.log(id);
      const card = {...state[id]}
      
      const flipState = {...state}
      flipState[id].visible = true
    //   const keys = Object.keys(flipState)
    //   let flipCount = 0
    //   keys.forEach((element) => {
    //     if (flipState[element].visible) {
    //       flipCount += 1;
    //     }
    //   })
    //   if (flipCount == 2) {
    //     console.log("Pair")
    //   } 
      return flipState;
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
  const reps = wordPairs.length
  for (let i=0; i<reps; i++) {
    const wordIndex = Math.floor(Math.random()*wordPairs.length);
    words.push(wordPairs[wordIndex])
    wordPairs.splice(wordIndex, 1)
  }

  return words;
} 

export const flipCard = (id) => {
  return {
    type: 'board/flipCard',
    payload: id
  }
}

export const setBoard = () => {
  const words = randomWords()
  return {
    type: 'board/setBoard',
    payload: words
  }
}

export const selectBoard = state => state.board;