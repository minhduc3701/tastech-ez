import { createStore } from "redux"

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_KEYWORD': 
      return Object.assign({}, state, {
        keyword: action.payload
      })

    default: 
      break;
  }

  return state
}

const initialState = {
  keyword: ''
}

export default () => createStore(reducer, initialState)
