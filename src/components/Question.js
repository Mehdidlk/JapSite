import React, { useState } from 'react';

const Question = ({ data, onAnswerUpdate, numberOfQuestion, onStepActiveQuestion, onSetStep}) => {
    const [error, setError] = useState('');
    const [Value, setValue] = useState("");
    const [questionRestant, setQuestionRestant] = useState(0);


    const PressENTER = (e) => {
        if(e.key === "Enter"){
        if (Value === '') {
            return setError('Veuillez Répondre !');
            
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.kana, a: Value, r: data.roumaji }]);
        setValue('');
        
        if (questionRestant <  10) {
            onStepActiveQuestion(Math.floor(Math.random() * (numberOfQuestion - 0 + 1)) + 0);
            setQuestionRestant(questionRestant + 1)
        } else {
            onSetStep(3);
            setQuestionRestant(0)
        }
        }
    }

    const nextClickHandler = () => {
        if (Value === '') {
            return setError('Veuillez Répondre !');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.kana, a: Value }]);
        setValue('');
        
        if (questionRestant <  10) {
            onStepActiveQuestion(Math.floor(Math.random() * (numberOfQuestion - 0 + 1)) + 0);
            setQuestionRestant(questionRestant + 1)
        } else {
            onSetStep(3);           
            setQuestionRestant(0)
        }
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5">{data.kana}</h2>
                    <label>
                        Réponse : <input
                                 type="text"
                                value={Value}
                                 onChange={e => setValue(e.target.value)}
                                 autoFocus={true}
                                 onKeyPress={PressENTER}
                                 className="input is-focused"
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
