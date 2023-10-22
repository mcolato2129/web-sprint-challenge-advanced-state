import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const { postQuiz, inputChange, form } = props;
  // const onChange = (newQuestion, newTrueAnswer, newFalseAnswer) => {
  //   inputChange(newQuestion, newTrueAnswer,newFalseAnswer)
  // }
  const onChange = evt => {
    console.log(evt.target.id)
    console.log(evt.target.value)
    inputChange(evt.target.value)
    
  }
  console.log(form)
  const onSubmit = evt => {

  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
