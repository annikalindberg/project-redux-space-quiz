/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

export const Summary = () => {
  const userAnswers = useSelector((state) => state.quiz.answers)

  const correctAnswer = userAnswers.filter((answers) => {
    return answers.isCorrect === true
  })

  return (
    <div className="summaryContainer">
      <div className="summaryHeader">
        <h1 className="summaryTitle">Quiz Summary</h1>
        <h2 className="result">You got {correctAnswer.length} out of 8!</h2>
      </div>
      {userAnswers.map((singleAnswer) => {
        return (
          <div className="resultsContainer" key={singleAnswer.questionId}>
            <h3 className="question">{singleAnswer.questionId}: {singleAnswer.question.questionText}</h3>
            <h3 className="yourAnswer">Your answer was:</h3> <p className="userAnswer">"{singleAnswer.answer}"</p>
            <h3>The correct answer was: </h3>
            <p className="correctAnswer"> "{singleAnswer.question.options[singleAnswer.question.correctAnswerIndex]}"</p>
          </div>
        )
      })}
    </div>
  )
}