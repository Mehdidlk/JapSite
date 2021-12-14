import React, { useEffect, useState } from "react";
import './Start.css'


//On crée notre fonction fléchée avec les paramètres/Props envoyer dans App.js
const Start = ({ onStartQuiz, onSetTypeDeQuiz, Quiz, QuizKana ,onsetNombreQuestion, onNombreQuestion }) => {



    //Notre fonction Lance le Quiz avec les Hiragana
    //On vas dire a TypeDeQuiz dans App.Js On utilise le quiz hiragana
    //On Change le Step pour lancer le Quiz
    const LancementQuizHiragana = () => {
        onSetTypeDeQuiz(Quiz.data.Hiragana)
        onStartQuiz()
    }


    //Notre fonction Lance le Quiz avec les Katakana
    //On vas dire a TypeDeQuiz dans App.Js On utilise le quiz Katakana
    //On Change le Step pour lancer le Quiz
    const LancementQuizKatakana = () => {
        onSetTypeDeQuiz(Quiz.data.Katakana)
        onStartQuiz()
    }

    const LancementKana = () => {
        onSetTypeDeQuiz(QuizKana.data.Kana)
        onStartQuiz()
    }

    const PressENTER = (e) => {
        if(e.key === "Enter"){
            onsetNombreQuestion("");
        }
    }

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])



    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="white">Commencer le Quiz</h1>
                    <p>Nombre de Question : {onNombreQuestion}</p>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizHiragana}>All Hiragana</button>
                    <button className="button is-onfo is-medium accueil" onClick={LancementKana}>Tous les Kana</button>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizKatakana}>All Katakana</button>
                    <label>
                        <input
                            type="text"
                            value={onNombreQuestion}
                            onChange={e => onsetNombreQuestion(e.target.onsetNombreQuestion)}
                            autoFocus={true}
                            onKeyPress={PressENTER}
                            className="input is-focused"
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Start;

