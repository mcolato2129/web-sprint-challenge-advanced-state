// ❗ You don't need to add extra reducers to achieve MVP
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE
} from './action-types';


import { combineReducers } from 'redux'

const initialWheelState = {
  wheelIndex: 0,
  wheelLetter: 'B'
}
const wheelReducer = (state = initialWheelState, action) => {
  const { ids, wheelIndex } = action.payload || {};

  switch (action.type) {
    case MOVE_CLOCKWISE:
      return {
        ...state,
        wheelIndex: (wheelIndex + 1)  % (ids ? ids.length : 0), 
      };

    case MOVE_COUNTERCLOCKWISE:
      return {
        ...state,
        wheelIndex: (wheelIndex - 1 + (ids ? ids.length : 0)) % (ids ? ids.length : 0)
      }
    default:
      return state;
  }
}

const initialQuizState = {
  button: null
}
function quiz(state = initialQuizState, action) {
  return { button: initialQuizState.button }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = {
  message: ''
}
function infoMessage(state = initialMessageState, action) {
  return { state: initialMessageState.message };
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheelReducer, quiz, selectedAnswer, infoMessage, form })
