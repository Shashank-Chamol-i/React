import {getBMIPercent} from "../utils/bmiUtils"
import "./BMIGauge.css";

const ZONES = [
  {label: "Under", color: "#3b82f6"},
  {label: "Normal", color: "#10b981"},
  {label: "Over", color: "#f59e0b"},
  {label: "Obese" , color:"#ef4444"}
];

function BMIGauge({bmi , category}) {
  if(!bmi) return null;
  const pct = getBMIPercent(bmi);

  return(
    <div className="gauge">
      <div className="gauge-track">
        {ZONES.map((z)=>(
          <div
          key={z.label}
          className="gauge-zone"
          style={{background:z.color}}
          />
        ))}

        <div className="gauge-needle"
        style={{left:`${pct}%`}}
        />
      </div>
      <div className="gauge-label">
        {ZONES.map((z)=>(
          <span key={z.label} className="guage-zone-label" style={{color:z.color}}>{z.label}</span>
        ))}
      </div>
      <div className="gauge-number" style={{color: category?.color}}>
        <span className="gauge-value">{bmi}</span>
        <span className="gauge-unit-label">BMI</span>
      </div>
    </div>
  );
}
export default BMIGauge;