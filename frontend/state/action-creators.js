// ❗ You don't need to add extra action creators to achieve MVP
// needs all the formation here.
import * as types from './action-types';
import axios from "axios";



export const moveClockwise = () => {
  return ({ type: types.MOVE_CLOCKWISE })
}

export function moveCounterClockwise() {
  return { type: types.MOVE_COUNTERCLOCKWISE }
}

export function selectAnswer(answer_id) {
  return { type: types.SET_SELECTED_ANSWER, payload: answer_id }
}

export function setMessage(message) {
  return { type: types.SET_INFO_MESSAGE, payload: message }
}

export function setQuiz(quiz) {
  return { type: types.SET_QUIZ_INTO_STATE, payload: quiz }
}

export function inputChange({inputId, value}) {
  return { 
    type: types.INPUT_CHANGE, payload: {inputId, value}
  }
}

export function resetForm() {
  return { type: types.RESET_FORM }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch(setQuiz(null))


    // On successful GET:
    axios.get('http://localhost:9000/api/quiz/next')
      .then((res) => {
        dispatch(setQuiz(res.data));
      })
      .catch(err => {
        const errToDisplay = err.response ? err.response.data.messsage : err.message;
        dispatch(setMessage(errToDisplay))
      })
    // 
    // - Dispatch an action to send the obtained quiz to its state
  }
}

export function postAnswer({quiz_id, answer_id}) {
  return function (dispatch) {
    // On successful POST:
    axios.post('http://localhost:9000/api/quiz/answer',{quiz_id, answer_id})
    .then((res) => {
     console.log(res.data, 'here 1')
     dispatch(selectAnswer(null));
     dispatch(setMessage(res.data.message))
    }).catch(err => {
      // console.log(err, 'here 2')
      const errToDisplay = err.response ? err.response.data.message : err.message
      dispatch(setMessage(errToDisplay))
    }).finally(() => {
      dispatch(fetchQuiz())
      });
      

    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}



export function postQuiz({question_text, true_answer_text, false_answer_text}) {
  console.log(question_text, 'here')
  return function (dispatch) {
    // On successful POST:
    axios.post(`http://localhost:9000/api/quiz/new`, {
      question_text, 
      true_answer_text,
      false_answer_text
    })
      .then(res => {
        dispatch(setMessage(`Congrates: "${res.data.question}" is a great question!`))
        dispatch(resetForm())
      }).catch(err => {
        const errToDisplay = err.response ? err.response.data.message : err.message
        dispatch(setMessage(errToDisplay))})
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state


 
// dispatch(selectAnswer(res.data.answers));
//       dispatch(setMessage(res.data.message)); //<=== ?


// .catch(err => {
//   const errToDisplay = err.response ? err.response.data.message : err.message
//   dispatch(setMessage(errToDisplay))
// })

// terenary 