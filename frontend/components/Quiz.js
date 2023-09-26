import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from "../state/action-creators";
import axios from 'axios';

function Quiz(props) {
  const { fetchQuiz, postAnswer, selectedAnswer, quiz } = props;
  console.log(props)

  useEffect(()=>{
    fetchQuiz();
  },[])

  const selectAnswer = (answer_id, quiz_id) => {
    console.log(fetchQuiz)
    fetchQuiz(quiz_id)
    postAnswer(answer_id)
  }

  // axios.get('http://localhost:9000/api/quiz/next').then(res =>{
  //   console.log(res.data)
  // })

  return (
    <div id="wrapper">
      {
        quiz 
          // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
           ? (
          <>
            <h2>{fetchQuiz}</h2>

            <div id="quizAnswers" onClick={selectAnswer}>
              <div className='answer selected'>
                {postAnswer}
                <button> {selectedAnswer === answer.answer_id ? `SELECTED` : "Select"} </button>
              </div>

              <div className='answer'>
                {postAnswer}
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