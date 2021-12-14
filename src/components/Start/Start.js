import React from "react";
import './Start.css'

//On crée notre fonction fléchée avec les paramètres/Props envoyer dans App.js
const Start = ({ onStartQuiz, onSetTypeDeQuiz, Quiz, onEntierAleatoire, KanaQuiz }) => {



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

    const allKana = () => {
        onSetTypeDeQuiz(KanaQuiz[onEntierAleatoire(1, 0)])
        onStartQuiz()
    }



    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
<<<<<<< Updated upstream
                    <h1 className="white">Commencer le Quiz</h1>
                    <p>Bonne chance mon gaw</p>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizHiragana}>All Hiragana</button>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizKatakana}>Tous les Kana</button>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizKatakana}>All Katakana</button>
                    
=======
                    <h1>Bienvenue sur CommentSeTaperUneAsiate.com</h1>
                    <h1 className="white">Quizz de tout les KANA</h1>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizHiragana}>Hiragana</button>
                    <button className="button is-onfo is-medium accueil" onClick={allKana}>Tous les Kana</button>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizKatakana}>Katakana</button>
>>>>>>> Stashed changes
                </div>
            </div>
        </div>
    )
}

export default Start;

