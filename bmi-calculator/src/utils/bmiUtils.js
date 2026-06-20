export function  calculateBMI(weightKg , heightCm) {
  if(!heightCm || !weightKg || heightCm<=0 || weightKg<=0 ) return null;

  const heightM = heightCm/100;
  const bmi = weightKg / (heightM * heightCm)
  return parseFloat(bmi.toFixed(1));
}

export function getBMICategory(bmi){
  if(bmi === null || bmi === undefined) return null;

  if (bmi < 18.5) {
    return {
      label: "Underweight",
      emoji: "🥗",
      range: "Below 18.5",
      advice: "Consider a nutrient-rich diet. Consult a healthcare provider.",
      color: "#3b82f6",
      bgColor: "#eff6ff",
      borderColor: "#bfdbfe",
    };
  }
  if (bmi < 25) {
    return {
      label: "Normal Weight",
      emoji: "✅",
      range: "18.5 – 24.9",
      advice: "You're in the healthy range. Keep it up!",
      color: "#10b981",
      bgColor: "#ecfdf5",
      borderColor: "#a7f3d0",
    };
  }
  if (bmi < 30) {
    return {
      label: "Overweight",
      emoji: "⚠️",
      range: "25.0 – 29.9",
      advice: "Consider adding regular physical activity to your routine.",
      color: "#f59e0b",
      bgColor: "#fffbeb",
      borderColor: "#fde68a",
    };
  }
  return {
    label: "Obese",
    emoji: "🏥",
    range: "30.0 and above",
    advice: "Please consult a healthcare professional for personalised guidance.",
    color: "#ef4444",
    bgColor: "#fef2f2",
    borderColor: "#fecaca",
  };
  export function getBMIPercent(bmi){
    if(!bmi) return 0;
    const pct = ((bmi - 10)/30)*100;
    return Math.min(100,Math.max(0,pct));
  }
}