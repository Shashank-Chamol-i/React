import { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import Button from "./components/Button";
import quotes from "./data/quotes";
import "./App.css";

function App() {

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const[quote , setQuote] = useState(quotes[randomIndex]);

  function generateQuote(){
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }

  return(
    <div className="container">
      <h1>Random Quotes Generator</h1>
      <QuoteCard quote={quote}/>
      <Button onClick={generateQuote}/>
    </div>
  );
  
}

export default App;