import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const { postQuiz, inputChange, form, resetForm } = props;
  // const onChange = (newQuestion, newTrueAnswer, newFalseAnswer) => {
  //   inputChange(newQuestion, newTrueAnswer,newFalseAnswer)
  // }
  const onChange = evt => {
    // console.log(evt.target.id)
    // console.log(evt.target.value)
    const  { id, value }  = evt.target;
    inputChange({ inputId: id, value })
  }



  console.log(form)
  const onSubmit = evt => {
    // console.log(evt)
    // const { newQuestion, newTrueAnswer, newFalseAnswer } = evt.target
    // console.log(evt.target.newFalseAnswer, 'event')
    evt.preventDefault()
    postQuiz({
      question_text: form.newQuestion, 
      true_answer_text: form.newTrueAnswer, 
      false_answer_text: form.newFalseAnswer
    })
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={form.newQuestion} />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" 
      value={form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" 
      value={form.newFalseAnswer}/>
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)

//New obj. Need for the input butttons to when effectd with onChange to fill in the correct key/value pairs in my reducer state
//Need to tell my from.hs where to take the information and do something with it.
