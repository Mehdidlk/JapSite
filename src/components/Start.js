import React from "react";

const Start = ({ onQuizStart }) => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Commencer le Quiz</h1>
                    <p>Bonne chance mon gaw</p>
                    <button className="button is-onfo is-medium" onClick={onQuizStart}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Start;