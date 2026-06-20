import { useState } from "react";
import TemperaturResult from "./components/TemperatureResult";
import TemperatureInput from "./components/TemperatureInput";
import ButtonGroup from "./components/ButtonGroup";
import "./App.css";

function App(){
  const [temperature, setTemperature] = useState("");
  const[unit , setUnit] = useState("C");
  const [result , setResult] = useState("");

  function convertTemperature(){
    if(temperature === "") return;
    let converted;

    if(unit === "C"){
      converted = (temperature * 9/5)+ 32;
      setResult(`${converted.toFixed(2)} °F`);
    }else{
      converted = (temperature - 32)* 5/9;
      setResult(`${converted.toFixed(2)} °C`);
    }
  }
  return(
    <div className="container">
      <h1>Temperature Converter</h1>

      <TemperatureInput 
      temperature={temperature}
      setTemperature={setTemperature}
      />

       <ButtonGroup
      unit={unit}
      setUnit={setUnit}
      />
      
      <button className="convert-btn"
      onClick={convertTemperature}
      >Convert</button>

      <TemperaturResult
      result={result}/>

     

    </div>
  );
}

export default App;