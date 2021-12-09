import React, { useEffect, useState } from "react";

const End = ({ data, onReset, reponse, onAnswersCheck }) => {
    const [bonneReponse, setBonneReponse] = useState(0);

    useEffect(() => {
        let correct = 0;
        reponse.forEach((resultat) => {
            if (resultat.a === resultat.r) {
                correct++;
            }
        });
        setBonneReponse(correct);
    }, []);


    return (
        <div className='card'>
            <div className="card-content">
                <div className="content">
                    <h3>Vos résultats</h3>
                    <p>{bonneReponse} sur 10</p>
                    <p><strong>{Math.floor((bonneReponse / 10) * 100 )}% </strong></p>
                    <button className="button is-info mr-2" onClick={onAnswersCheck}>Regarde tes réponses</button>
                    <button className="button is-info mr-2" onClick={onReset}>Essayez de nouveau</button>
                </div>
            </div>
        </div>
    );
}

export default End;