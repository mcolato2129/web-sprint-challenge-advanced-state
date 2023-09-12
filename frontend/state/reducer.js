// ❗ You don't need to add extra reducers to achieve MVP
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_SELECTED_ANSWER
} from './action-types';


import { combineReducers } from 'redux'

const initialWheelState = 0;
const wheel= (state = initialWheelState, action) => {

  switch (action.type) {
    case MOVE_CLOCKWISE:
      return {
        ...state,
        wheelIndex: (state.wheelIndex + 1)  % (ids ? ids.length : 0), 
      };

    case MOVE_COUNTERCLOCKWISE:
      return {
        ...state,
        wheelIndex: (state.wheelIndex - 1 + (ids ? ids.length : 0)) % (ids ? ids.length : 0)
      }
    default:
      return state;
  }
}

const initialQuizState = {
  button: null
}
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return{
        ...state,
        selectedButton: action.payload.selectedButton
      }
      default:
        return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return{
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
