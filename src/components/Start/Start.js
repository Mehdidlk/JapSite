import React from "react";
import './Start.css'

const Start = ({ onQuizStart }) => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="white">Commencer le Quiz</h1>
                    <p>Bonne chance mon gaw</p>             
                    <button className="button is-onfo is-medium accueil" onClick={onQuizStart}>All Hiragana</button>                         
                    <button className="button is-onfo is-medium accueil" onClick={onQuizStart}>Start</button>                 
                    <button className="button is-onfo is-medium accueil" onClick={onQuizStart}>All Katakana</button>
                </div>
            </div>
        </div>
    )
}

export default Start;