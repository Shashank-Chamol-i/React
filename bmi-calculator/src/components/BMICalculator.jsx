

import { useBMI } from "../hooks/useBMI";
import UnitToggle from "./UnitToggle";
import InputField  from "./InputField";
import BMIGauge   from "./BMIGauge";
import BMIResult  from "./BMIResult";
import "./BMICalculator.css";

const REFERENCE = [
  { label: "Underweight", range: "< 18.5",       color: "#3b82f6" },
  { label: "Normal",      range: "18.5 – 24.9",  color: "#10b981" },
  { label: "Overweight",  range: "25.0 – 29.9",  color: "#f59e0b" },
  { label: "Obese",       range: "≥ 30.0",        color: "#ef4444" },
];

function BMICalculator() {
  const {
    height, weight, unit, bmi, category,
    hasCalculated, isValid,
    setHeight, setWeight, setUnit,
    handleCalculate, handleReset,
  } = useBMI();

  // Unit labels change based on selected system
  const unitLabels = unit === "metric"
    ? { h: "cm",  w: "kg",  hPH: "e.g. 170", wPH: "e.g. 70"  }
    : { h: "in",  w: "lbs", hPH: "e.g. 67",  wPH: "e.g. 155" };

  return (
    <div className="bmi-calc">
      <div className="bmi-calc__card">

        {/* ── Header ── */}
        <header className="bmi-calc__header">
          <span className="bmi-calc__logo">⚖️</span>
          <h1 className="bmi-calc__title">BMI Calculator</h1>
          <p className="bmi-calc__subtitle">WHO Standard · Body Mass Index</p>
        </header>

        {/* ── Unit Toggle ── */}
        <UnitToggle unit={unit} onUnitChange={setUnit} />

        {/* ── Inputs ── */}
        {/* 🔑 Controlled inputs: value from state, onChange updates state */}
        <div className="bmi-calc__inputs">
          <InputField
            label="Height" icon="📏"
            value={height}
            onChange={setHeight}
            placeholder={unitLabels.hPH}
            unitLabel={unitLabels.h}
          />
          <InputField
            label="Weight" icon="🏋️"
            value={weight}
            onChange={setWeight}
            placeholder={unitLabels.wPH}
            unitLabel={unitLabels.w}
          />
        </div>

        {/* ── Action Buttons ── */}
        <div className="bmi-calc__actions">
          {/* 🔑 Event handling: onClick reference (not a call) */}
          {/* 🔑 disabled prop: React 19 passes it directly to DOM */}
          <button
            type="button"
            className="bmi-calc__btn bmi-calc__btn--primary"
            onClick={handleCalculate}
            disabled={!isValid}
          >
            Calculate BMI
          </button>

          {/* 🔑 Conditional rendering: logical AND — show only after result */}
          {hasCalculated && (
            <button
              type="button"
              className="bmi-calc__btn bmi-calc__btn--reset"
              onClick={handleReset}
            >
              ↺ Reset
            </button>
          )}
        </div>

        {/* ── Results ── */}
        {/* 🔑 Conditional rendering: ternary — result vs empty state */}
        {hasCalculated ? (
          <div className="bmi-calc__results">
            <BMIGauge bmi={bmi} category={category} />
            <BMIResult category={category} />
          </div>
        ) : (
          <p className="bmi-calc__empty">
            Enter your height and weight to see your result.
          </p>
        )}

        {/* ── Reference Table ── */}
        <div className="bmi-calc__reference">
          <p className="bmi-calc__ref-title">BMI Reference (WHO)</p>
          {REFERENCE.map((row) => (
            <div key={row.label} className="bmi-calc__ref-row">
              <span className="bmi-calc__ref-dot" style={{ background: row.color }} />
              <span className="bmi-calc__ref-label">{row.label}</span>
              <span className="bmi-calc__ref-range">{row.range}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default BMICalculator;