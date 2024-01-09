import React, {useState, useEffect} from 'react';
import "./App.css";

function App() {

  const [quote, setQuote] = useState("");
  const [author, setauthor] = useState("");
  return (
    <div className="App">
      <div className="app-container">
        <h1>Quotable Quote Generator</h1>
      </div>
      <div className="quote">
        <h2>New Quote</h2>
        <small>-Author-</small>
      </div><br />
      <button className="button">Fetch New Quote</button>
    </div>

  );
}

export default App;
