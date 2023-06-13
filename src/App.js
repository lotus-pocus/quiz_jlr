

import React, { useState } from "react";
import './App.css';

function App() {
  //properties

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "When deciding on a new car, do you go for functionality or for a brand you admire?",
      options: [
        { id: 0, text: "Functionality", isCorrect: true },
        { id: 1, text: "Brand", isCorrect: false },
      ],
    },
    {
      text: "Are you a spender or a saver?",
      options: [
        { id: 0, text: "Saver", isCorrect: true },
        { id: 1, text: "Spender", isCorrect: false },
      ],
    },
    {
      text: "Is your kitchen full of the latest gadgets or are you content with the basics?",
      options: [
        { id: 0, text: "Standard Equipment", isCorrect: true },
        { id: 1, text: "Gadgets", isCorrect: false },
      ],
    },
    {
      text: "Do you choose a holiday for its luxury facilities or based on destination?",
      options: [
        { id: 0, text: "Destination", isCorrect: true },
        { id: 1, text: "Facilities", isCorrect: false },
      ],
    },
    {
      text: "Are you more likely to take on a part-time learning course for a new interest or embark straightaway with a new exciting hobby?",
      options: [
        { id: 0, text: "Learning", isCorrect: true },
        { id: 1, text: "Hobby", isCorrect: false },
      ],
    },
    {
      text: "What sums up your buying behaviour, do you prefer quantity or quality?",
      options: [
        { id: 0, text: "Quantity", isCorrect: true },
        { id: 1, text: "Quality", isCorrect: false },
      ],
    },
    {
      text: "Do you tend to carefully think through your decisions before taking action, or do you often make impulsive choices without too much consideration?",
      options: [
        { id: 0, text: "Act", isCorrect: true },
        { id: 1, text: "Think", isCorrect: false },
      ],
    },
    {
      text: "Are you likely to read all of the instructions before starting to build self-assembly furniture, or read the first step and give it a go?",
      options: [
        { id: 0, text: "Read all", isCorrect: true },
        { id: 1, text: "Read first", isCorrect: false },
      ],
    },
    {
      text: "Do you check out reviews of products and services before committing to a purchase?",
      options: [
        { id: 0, text: "Almost Never", isCorrect: true },
        { id: 1, text: "Almost always", isCorrect: false },
      ],
    },
    {
      text: "Do you decide at the last minute your plans for the weekend, or have them arranged months in advance?",
      options: [
        { id: 0, text: "Last minute", isCorrect: true },
        { id: 1, text: "In advance", isCorrect: false },
      ],
    },
    {
      text: "Are you likely to consult and involve family and friends before making a significant decision or are you comfortable and confident in your own decision making?",
      options: [
        { id: 0, text: "Consult family and friends", isCorrect: true },
        { id: 1, text: "Confident in my decision making", isCorrect: false },
      ],
    },
  ];

  // Helper functions

  const optionClicked = (isCorrect) => {
    if( isCorrect) {
      setScore(score + 1);
    } 

    

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className="App">
      {/*1. header*/}
      <h1>Quiz</h1>

      {/*2. current score*/}
      <h2>current score: {score}</h2>

      {showFinalResults ? (
       /*4. Final Results*/
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>{score}</h2>
          <button onClick={() => restartGame()}>restart quiz</button>
        </div>
      ) : (
       /*3. Question Card*/
        <div className='question-card'>
          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className='question-text'>{questions[currentQuestion].text}</h3>

          <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
            )
          })}
          </ul>
        </div>
      )}
     </div >
  );
}

export default App;
