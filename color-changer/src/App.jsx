import { useState } from "react";
import Header from "./components/Header";
import ColorButton from "./components/ColorButton";
import "./App.css";

function App(){
  const [bgColor , setBgColor] = useState("#ffffff");
  
  const color = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
    "gray",
    "teal",
  ];
  return(
    <div className="container" style={{
      background : bgColor,
      }}>
      <Header />
      <div className="buttons">
       {color.map((color)=>(
        <ColorButton
        key={color}
        color={color}
        setBgColor={setBgColor}
        />
       ))}
      </div>
      <h2>Current Color: {bgColor}</h2>
    </div>
  );
}

export default App;