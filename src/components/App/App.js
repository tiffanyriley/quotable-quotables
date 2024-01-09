import React, {useState, useEffect} from 'react';
import "./App.css";

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect (() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          // setQuote();
          // setAuthor();
          console.log()
        }
      )
  },[]);
  
