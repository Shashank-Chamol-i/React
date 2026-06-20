import "./UnitToggle.css";
function UnitToggle({unit,onUnitChange}) {
  <div className="unit-toggle">
    <p className="unit-toggle-label">Unit System</p>
    <div className="unit-toggle-buttons">
      
      <button type = "button"
      className={`unit-toggle-btn ${unit === 'metric' ? "unit-toggle-active-btn" : ""}`}
      onClick={()=>onUnitChange("metric")}
      >🌍 Metric
      <span className="unit-toggle-sub">kg·cm</span>
      </button>

      <button type="button"
      className={`unit-toggle-btn ${unit === 'imperial' ? "unit-toggle-active-btn" : ""}`}
      onClick={()=>onUnitChange("imperial")}>🇺🇸 Imperial
      <span className="unit-toggle-sub">lbs·in</span>
      </button>
    
    </div>
  </div>
}

export default UnitToggle;