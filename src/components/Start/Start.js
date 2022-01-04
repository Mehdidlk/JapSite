import React , {useState}from "react";


//On crée notre fonction fléchée avec les paramètres/Props envoyer dans App.js
const Start = ({ onStartQuiz, onSetTypeDeQuiz, Quiz, QuizKana }) => {


    const [nombreQuestion, setNombreQuestion] = useState(10);

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
            setNombreQuestion("");
        }
    }




    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="white">Commencer le Quiz</h1>
                    <p>Nombre de Question : {nombreQuestion}</p>
                    {console.log(nombreQuestion)}
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizHiragana}>All Hiragana</button>
                    <button className="button is-onfo is-medium accueil" onClick={LancementKana}>Tous les Kana</button>
                    <button className="button is-onfo is-medium accueil" onClick={LancementQuizKatakana}>All Katakana</button>
                    <label>
                        <input
                            type="number"
                            min="0" 
                            max="50"
                            value={nombreQuestion}
                            onChange={e => setNombreQuestion(e.currentTarget.nombreQuestion)}
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

