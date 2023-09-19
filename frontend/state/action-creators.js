// ❗ You don't need to add extra action creators to achieve MVP
// needs all the formation here.
import * as types from './action-types';
import axios from "axios"; 



export const moveClockwise = () => {
  return ({type: types.MOVE_CLOCKWISE})
}

export function moveCounterClockwise() {
  return{type: types.MOVE_COUNTERCLOCKWISE}
}

export function selectAnswer(answer_id) {
  return{type: types.SET_QUIZ_INTO_STATE, payload: answer_id}
}

export function setMessage(message) {
  return{type: types.SET_INFO_MESSAGE, paylaod: message}
}

export function setQuiz(quiz) {
  return{type: types.SET_QUIZ_INTO_STATE, payload: quiz}
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    axios.get('http://localhost:9000/api/quiz/next').then((res) =>{
      dispatch(setQuiz(res.data));
    }).catch(err => console.error(err));
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    axios.post('http://localhost:9000/api/quiz/answer').then((res)=> {
      dispatch(selectAnswer(res.data.answer_id));
      dispatch(setMessage(res.data)); //<=== ?
    }).catch(err => console.error(err ));
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
