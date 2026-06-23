import { useState } from "react";
import { calculateBMI, getBMICategory } from "../utils/bmiUtils";

export function useBMI(){
  const[height , setHeight] = useState("");
  const[weight , setWeight] = useState("");
  const[unit ,  setUnit] = useState("metric");
  const[bmi ,  setBmi] = useState(null);
  const[category , setCategory] = useState(null);
  const[hasCalculated , setHasCalculated] = useState(false);


function handleCalculate(){
  let weightKg = parseFloat(weight);
  let heightCm = parseFloat(height);

  if(unit === "imperial"){
    weightKg = weightKg * 0.453592;
    heightCm = heightCm * 2.54;
  }

  const result = calculateBMI(weightKg,heightCm);
  const cat = getBMICategory(result);

  setBmi(result);
  setCategory(cat);
  setHasCalculated(true);
}
function handleReset() {
  setHeight("");
  setWeight("");
  setBmi(null);
  setCategory(null);
  setHasCalculated(false);

}

  const isValid = height !== "" &&
                weight !== ""&&
                parseFloat(height) > 0 &&
                parseFloat(weight) > 0;

  return{
      height,weight,unit, bmi , category, hasCalculated,isValid,setHeight,setWeight,setUnit,
      handleCalculate,handleReset
  };

}