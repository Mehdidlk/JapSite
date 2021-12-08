import React from "react";
import './Start.css'

const Start = ({ onQuizStart, OnsetTypeOfQuestion, quiz }) => {

    const LunchHiragana = () => {
        OnsetTypeOfQuestion(quiz.data.Hiragana)
        onQuizStart()
    }

    const LunchKana = () => {
        OnsetTypeOfQuestion(quiz.data)
        onQuizStart()
    }

    const LunchKatakana = () => {
        OnsetTypeOfQuestion(quiz.data.Katakana)
        onQuizStart()
    }

    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="white">Commencer le Quiz</h1>
                    <p>Bonne chance mon gaw</p>             
                    <button className="button is-onfo is-medium accueil" onClick={LunchHiragana}>All Hiragana</button>                         
                    <button className="button is-onfo is-medium accueil" onClick={LunchKana}>Tous les Kana</button>                 
                    <button className="button is-onfo is-medium accueil" onClick={LunchKatakana}>All Katakana</button>
                </div>
            </div>
        </div>
    )
}

export default Start;