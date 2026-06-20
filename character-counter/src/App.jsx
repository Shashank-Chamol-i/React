import { useState } from "react";
import Controls from "./components/Controls";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Statistics from "./components/Statistics";
import TextInput from "./components/TextInput";
import "./App.css";

function App(){
  const[text,setText] = useState("");
  return(
    <div className="container">
      <Header/>

      <TextInput 
      text={text}
      setText={setText}
      />

      <Statistics text={text}/>

      <ProgressBar text={text}/>

      <Controls 
      text={text}
      setText={setText}
      />


    </div>
  );
}

export default App;