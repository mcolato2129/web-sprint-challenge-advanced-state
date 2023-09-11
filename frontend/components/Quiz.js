import React from 'react'
import { connect } from 'react-redux';
import { selectAnswer } from "../state/action-creators";

function Quiz(props) {
  const { selectedAnswer, selectAnswer} = props

  const handleClick = (answer) => {
    selectAnswer(answer)
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className={`answer ${selectedAnswer === 'A' ? 'selected' : ''}`}>
                A function
                <button onClick={() => handleClick('A')}>
                {selectedAnswer === 'A' ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer ${selectedAnswer === 'B' ? 'selected' : ''}`}>
                An elephant
                <button onClick={() => handleClick('B')}>
                {selectedAnswer === 'B' ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    selectedAnswer: state.quiz.selectedButton
  }
}

export default connect(mapStateToProps, { selectAnswer })(Quiz);