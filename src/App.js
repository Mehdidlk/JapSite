//On as Import React et une focntionalité de React(useState) 
//Pour import 
//import Nomdevariable from 'Direction ou nom de dépendance'
//Quand on utilise ,{ Fonction } pour import une fonction spécifique
import React, { useState } from 'react';

//On import le css de App
import './App.css';

//On import la data (Hiragana, Katakana) et on l'as stock dans une variable Quiz
import Quiz from './data/quiz.json';

//On import les Components de notre application (L'affiche)
//On pourras s'en servir comme balise HTML car elle renvoie des balises dans sont return
import Start from './components/Start/Start';
import End from './components/End';
import Modal from './components/Modal';
import Question from './components/Question';



//On crée notre fonction Fléchée (Rafc) App
const App = () => {

  //On stock nos variable dans des useState
  //const [NomdeVariabeAffiché, setNomdeVariabeAffiché] = useState(Valeur initial);
  //On stock dans ce useState Le Type de Quiz qu'ont vas lancer par défaut il est sur Hiragana
  const [typedeQuiz, setTypeDeQuiz] = useState(Quiz.data.Hiragana);


  //On stock dans ce useState L'étape du Site Exemple = 1 Accueil, 2 Quiz, 3 Résultat
  const [step, setStep] = useState(1);


  //On Affiche la Question qui est entrain d'être affiché de façon aléatoire
  const [questionEnCours, setQuestionEnCours] = useState( Math.floor( Math.random() * (typedeQuiz.length + 1) ) ); 


  //On Stock les réponses que notre utilisateur auras rentrée dans un tableau d'ou les []
  const [reponse, setReponse] = useState([]);

  //On stock la donnée du Modal si il est ouvert ou Non de base elle n'est pas ouvert
  const [showModal, setShowModal] = useState(false);


  //Cette fonction elle fais passer à l'étape 2 le Quizz
  const StartQuiz = () => {
    setStep(2);
  }

  //Cette fonction elle remets le site à 0
  const ResetQuiz = () => {
    setQuestionEnCours( Math.floor( Math.random() * ( typedeQuiz.length + 1 ) ) );
    setReponse([]);
    setStep(1)
  }



  //On renvoie notre Affichage Html affiché pour les personnes qui consulte notre site
  return (
    //className = Class / dans react
    //On Vérifie la valeur de step SI elle est égal 1 ALORS Affiche la Balise Start
    //Dans la Balise Start on lui envoie des propriétes 
    //On lui Envoie Dans une Variable onQuizStart la fonction StartQuiz
    //On lui envoie aussi dans une variable onsetTypeDeQuiz La fonction pour modifier la valeur de Typedequiz
    //On lui envoie aussi La Data du Quiz dans une Variable Data
    <div className="App">
 
      {
      step === 1 && 
      <Start 
      onStartQuiz={StartQuiz}
      onSetTypeDeQuiz={setTypeDeQuiz}
      Quiz={Quiz} 
      />
      }

      {
      step === 2 && 
      <Question 
      data={typedeQuiz[questionEnCours]} 
      onSetReponse={setReponse} 
      nombreDeQuestion={typedeQuiz.length}
      onSetQuestionEnCours={setQuestionEnCours}
      onSetStep={setStep}
      />
      }

      {
      step === 3 && 
      <End
        reponse={reponse}
        data={typedeQuiz}
        onReset={ResetQuiz}
        onAnswersCheck={() => setShowModal(true)}
      />}

      {showModal && 
      <Modal
        onClose={() => setShowModal(false)}
        results={reponse}
        data={typedeQuiz}
      />}
    </div>

  );
}


export default App;