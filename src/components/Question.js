import React, { useState } from 'react';


//On crée un const ou on va stocké les variables crée plus tot et celle dont nous aurons besoins 

const Question = ({ data, onSetQuestionEnCours, nombreDeQuestion, onSetStep, onSetReponse, kanaQuiz, onEntierAleatoire, onSetTypeDeQuiz }) => {
    // ici on crée nos variables qui afficheront et qui seront modifiables plus tard avec l'erreur, la valeur mise dans la box et le nombre de question qu'il reste à faire 
    const [error, setError] = useState('');
    const [Value, setValue] = useState("");
    const [questionRestant, setQuestionRestant] = useState(0);

    //constante pour confirmer notre réponse sans appuyer sur next mais juste avec "Enter" on va lui dire que si e.key et strictement égal on va faire le setReponse plus bas qui va allez stocker notre réponse et si elle est bien juste et égal à ce qu'il ya dans notre data autrement si il n'ya  rien il renvoie une erreur "veullez répondre "
    const PressENTER = (e) => {
        if(e.key === "Enter"){
        if (Value === '') {
            return setError('Veuillez Répondre !');
            
        }
        onSetReponse(prevState => [...prevState, { q: data.kana, a: Value, r: data.roumaji }]);
        setValue('');

        
        if (questionRestant <  10) {
            onSetQuestionEnCours(Math.floor(Math.random() * (nombreDeQuestion - 0 + 1)) + 0);
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
        onSetReponse(prevState => [...prevState, { q: data.kana, a: Value }]);
        setValue('');

        if (questionRestant < 10) {
            onSetQuestionEnCours(Math.floor(Math.random() * (nombreDeQuestion - 0 + 1)) + 0);
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
