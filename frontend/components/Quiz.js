import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from "../state/action-creators";
import axios from 'axios';

function Quiz(props) {
  const { st, fetchQuiz, postAnswer } = props;
  console.log(props)

  const selectedAnswer = (answer_id) => {
    console.log('yes?')
    fetchQuiz(st)
    postAnswer(answer_id)
  }

  axios.get('http://localhost:9000/api/quiz/next').then(res =>{
    console.log(res.data)
  })
  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className='answer selected'>
                A function plus its binding
                <button onClick={selectedAnswer}>Select</button>
              </div>

              <div className='answer'>
                Clearly some kind of elephant
                <button>Select</button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return{
//     selectedAnswer: state.quiz
//   }
// }

export default connect(st => st, actionCreators)(Quiz)
// export default connect(mapStateToProps, { selectAnswer })(Quiz);

// How can I link up the answer_id to this code so the action creator gets all the information it needs?
// How can I tell which answer_id is being selected?
// How do I get the class name "answer select" to switch when the buttons are clicked?
// What does the submit button need so it to knows which answer is selected?