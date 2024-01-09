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
  // const fetchNewQuote = async () => {
  //   try {
  //     const response = await fetch('https://api-ninjas.com/api/quotes');
  //     const data = await response.json();

  //     setQuote(data.quote);
  //     setAuthor(data.author);
  //   } catch (error){
  //     console.error('Error fetching new quote:', error);
  //   }
  // };
  
  // useEffect(() => {
    
  // }
  // )
