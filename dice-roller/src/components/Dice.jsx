import { useState } from "react";
import "./Dice.css";
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from  "../assets/dice6.png";



function Dice(){
  const images = [dice1,dice2,dice3,dice4,dice5,dice6];

  const [number,setNumber] = useState(1);

  const rollDice = () =>{
    const randomNumber = Math.floor(Math.random() * 6 ) + 1;
    setNumber(randomNumber);
  };
  return(
    <div className="container">
      <h1>Dice Roller</h1>
      <img 
      src={images[number-1]}
      alt="dice"
      className="dice"
      />
      <h2>{number}</h2>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}
export default Dice;