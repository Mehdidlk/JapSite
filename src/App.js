import React, { useEffect, useState } from 'react';

import './App.css';
import Start from './components/Start/Start';
import Quiz from './data/quiz.json';
import End from './components/End';
import Modal from './components/Modal';
import Question from './components/Question';

const App = () => {
  const [typeOfQuestion, setTypeOfQuestion] = useState(Quiz);
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(Math.floor(Math.random() * (20 - 0 + 1)) + 0);  
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const quizStartHandler = () => {
    setStep(2);
  }

  const resetClickHandler = () => {
    setActiveQuestion(Math.floor(Math.random() * (20 - 0 + 1)) + 0);
    setAnswers([]);
    setStep(1)
  }

  return (
    <div className="App">
      {step === 1 && <Start 
      onQuizStart={quizStartHandler}
      OnsetTypeOfQuestion={setTypeOfQuestion}
      quiz={Quiz} />}
      {step === 2 && <Question
        data={typeOfQuestion[activeQuestion]}
        test={typeOfQuestion}
        onAnswerUpdate={setAnswers}
        numberOfQuestion={typeOfQuestion.length}
        onStepActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End
        results={answers}
        data={typeOfQuestion}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
      />}
      {showModal && <Modal
        onClose={() => setShowModal(false)}
        results={answers}
        data={typeOfQuestion}
      />}
    </div>
  );
}


export default App;
