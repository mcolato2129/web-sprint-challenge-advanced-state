// ❗ You don't need to add extra reducers to achieve MVP
import { MOVE_CLOCKWISE } from './action-types';


import { combineReducers } from 'redux'

const initialWheelState = {
  wheelIndex: 0,
  wheelLetter: 'B'
}
const wheelReducer = (state = initialWheelState, action) => {
    return {wheelIndex: state.wheelIndex, wheelLetter: state.wheelLetter} 
  }

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
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
