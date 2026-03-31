import { useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState("")
  const [meaning, setMeaning] = useState("")
  const [error, setError] = useState("")

  const fetchDetails = async (e) => {
      e.preventDefault();
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
      const data = await response.json();
      if(data.title === "No Definitions Found"){
          setMeaning(null)
          setError(data.message)
        }else{
          setError(null)
          setMeaning(data[0]);
        }
    };

  return (
    <div className="App">
      <h1>Free Dictionary</h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setWord(e.target.value)}
        />
        <button
        onClick={fetchDetails}>Search</button>
      </div>
      {meaning ? (
        <div className="showResults">
          <h2>{word}</h2>
          <h4>Definition:</h4>
          <p>{meaning?.meanings?.[0]?.definitions?.[0]?.definition}</p>
          <h4>Parts of speech:</h4>
          <p>{meaning.meanings[0].partOfSpeech}</p>
          <h4>Example:</h4>
          <p>{meaning?.meanings?.[0]?.definitions?.[0]?.example}</p>
          <p>{error}</p>
        </div>
        ): (
        <div className="empty-state">
          <h4>Welcome to Vocab Explorer!</h4>
          <p>Type a word above to get started.</p>
        </div>
      )}
    </div>
  );
}

export default App
