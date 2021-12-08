import React, { useEffect, useState } from "react";

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        let correct = 0;
        results.forEach((result) => {
            if (result.a === result.r) {
                correct++;
            }
        });
        setCorrectAnswers(correct);
    }, []);


    return (
        <div className='card'>
            <div className="card-content">
                <div className="content">
                    <h3>Vos résultats</h3>
                    <p>{correctAnswers} sur 20</p>
                    <p><strong>{Math.floor((correctAnswers / data.length) * 100 )}% </strong></p>
                    <button className="button is-info mr-2" onClick={onAnswersCheck}>Regarde tes réponses</button>
                    <button className="button is-info mr-2" onClick={onReset}>Essayez de nouveau</button>
                </div>
            </div>
        </div>
    );
}

export default End;