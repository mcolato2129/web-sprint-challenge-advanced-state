import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from "../state/action-creators";
import axios from 'axios';

function Quiz(props) {
  const { fetchQuiz, postAnswer, selectedAnswer, quiz } = props;
  console.log(props)

  useEffect(() => {
    fetchQuiz();
  }, [])

  const selectAnswer = (answer_id, quiz) => {
    postAnswer(answer_id)
  }
  //1. Create handle click that takes in payload fpr select answer to pass in payload
  //2. onClick in button
  //3. fix condition in ternary. 'selectedAnswer === answer_id'
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
              <h2>{quiz.question}</h2>

              <div id="quizAnswers" onClick={selectAnswer}>
                
                  {quiz.answers.map(answer => {
                    return <div className='answer selected' key={answer.id}>
                      {answer.text}
                    <button > {selectedAnswer === true ? `SELECTED` : "Select"} </button>
                    </div>
                  }
                  )}
                

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