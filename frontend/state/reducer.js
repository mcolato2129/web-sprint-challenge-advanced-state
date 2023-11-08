// ❗ You don't need to add extra reducers to achieve MVP
// reducer 'takes the order' and makes it
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
  switch(action.type){
    case types.SET_QUIZ_INTO_STATE:
    return action.payload;
    default:
    return state;
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case types.SET_SELECTED_ANSWER:
      return action.payload
    default:
      return state
  }
}

const initialMessageState = '';
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case types.SET_INFO_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case types.INPUT_CHANGE:
      return{
        ...state, [action.payload.inputId]: action.payload.value
      }
    case types.RESET_FORM:
      return initialFormState
      default: 
      return state;
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
