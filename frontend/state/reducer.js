// ❗ You don't need to add extra reducers to achieve MVP
import * as types from './action-types';


import { combineReducers } from 'redux'

const initialWheelState = 0;
const wheel = (state = initialWheelState, action) => {

  switch (action.type) {
    case types.MOVE_CLOCKWISE:
      if (state === 5) {
        return state = initialWheelState;
      } else {
        return state + 1
      }
    case types.MOVE_COUNTERCLOCKWISE:
      if(state === 0){
        return state = 5;
      } else {
    return state - 1
      }
      default:
      return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.types) {
    case types.SET_SELECTED_ANSWER:
      return {
        ...state,
        initialSelectedAnswerState: state
      }
    default:
      return state
  }
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

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
