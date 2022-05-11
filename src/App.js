import React,{useEffect, useState, createContext} from 'react';
import Board from './comps/Board';
import Keyboard from './comps/Keyboard';
import Question from './comps/Question';
import { ToastContainer, toast } from 'react-toastify';

export let AppContext = createContext();

function App() {
  const [word, setWord] = useState('');
  const [newQ, setNewQ] = useState(1);
  const [score, setScore] = useState(0);
  const [wordArray, setWordArray] = useState([])
  const [currIndex, setCurrIndex] = useState(0)
  const [keyArray, setKeyArray] = useState([])
  const [usedKey, setUsedKey] = useState([])
  const [error, setError] = useState('')

  const [loading, setLoading] = useState(true)

  let getRandomQuestion = () => {
    try {
      let data = require('./data.json')  
      let rand = Math.floor(Math.random() * data.words.length)
      setWord(data.words[rand])    
    }catch {
      setError("Sorry. There is a problem.")
    }
    
  }

  useEffect(() => {
    getRandomQuestion();
    setLoading(false)
  }, [])
  useEffect(() => {
    getRandomQuestion();
    setLoading(false)
  }, [newQ])

  return (
    <div className="App">
      <nav>
        <h3>Word Guess</h3>
      </nav>
      <h2 style={{marginLeft: "30px"}}>Score: {score}</h2>
      {error ? <h1 style={{textAlign: "center"}}>{error}</h1> : null}
      <div className="game">
        <AppContext.Provider value={{usedKey, setUsedKey, keyArray, setKeyArray, score, setScore, newQ, setNewQ, word, loading, wordArray, setWordArray, currIndex, setCurrIndex }} >
        <Board />
        <Question />
        <Keyboard />
        <ToastContainer />
        </AppContext.Provider>
      </div>

    </div>
  );
}

export default App;
