import React, { useState } from 'react';

const Question = ({ data, onAnswerUpdate, numberOfQuestion, activeQuestion, onStepActiveQuestion, onSetStep  }) => {
    const [error, setError] = useState('');
    const [Value, setValue] = useState("");

    const PressENTER = (e) => {
        if(e.key === "Enter"){
        if (Value === '') {
            return setError('Veuillez Répondre !');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: Value }]);
        setValue('');
        
        if (activeQuestion < numberOfQuestion - 1) {
            onStepActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
        }
    }

    const nextClickHandler = () => {
        if (Value === '') {
            return setError('Veuillez Répondre !');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: Value }]);
        setValue('');
        
        if (activeQuestion < numberOfQuestion - 1) {
            onStepActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5"> {data.question}</h2>
                    <label>
                        Réponse : <input
                                 type="text"
                                value={Value}
                                 onChange={e => setValue(e.target.value)}
                                 autofocus="true"
                                 onKeyPress={PressENTER}
                                  />
                    </label>
                    {error && <div className="has-text-danger">{error}</div>}
                    <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
                </div>
            </div>
        </div >
    )
}

export default Question
