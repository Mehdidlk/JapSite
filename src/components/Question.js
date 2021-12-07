import React, { useEffect, useState, useRef } from 'react';

const Question = ({ data, onAnswerUpdate, numberOfQuestion, activeQuestion, onStepActiveQuestion, onSetStep  }) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value);
        if(error) {
            setError('');
        }
    }

    const nextClickHandler = () => {
        if (selected === '') {
            return setError('Choisisez une option !');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');
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
                    <div className="control" ref={radiosWrapper} >
                        {data.Choix.map((choice, i) => (
                            < label className="radio has-backhground-light" key={i}>
                                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                                {choice}
                            </label>
                        ))}
                    </div>
                    {error && <div className="has-text-danger">{error}</div>}
                    <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
                </div>
            </div>
        </div >
    )
}

export default Question
