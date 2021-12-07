import React, { useEffect, useState } from 'react';

import './App.css';
import Start from './components/Start';
import Quiz from './data/quiz.json';
import End from './components/End';
import Modal from './components/Modal';
import Question from './components/Question';

let interval;

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2)
    setTime(0)
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000);
  }

  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question
        data={Quiz.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestion={Quiz.data.length}
        activeQuestion={activeQuestion}
        onStepActiveQuestion={setActiveQuestion}
        onSetStep={setStep}

      />}
      {step === 3 && <End
        results={answers}
        data={Quiz.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}


      {showModal && <Modal
        onClose={() => setShowModal(false)}
        results={answers}
        data={Quiz.data}
      />}
    </div>
  );
}


export default App;
