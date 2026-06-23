import "./BMIResult.css";
function BMIResult({ category }) {
  if (!category) return null;
  return (
    <div
      className="bmi-result"
      style={{
        background: category.bgColor,
        borderColor: category.borderColor,
      }}
    >
      <div className="bmi-result-header">
        <span className="bmi-result-emoji">{category.emoji}</span>
        <div>
          <p className="bmi-result-range" style={{ color: category.color }}>
            {category.range}
          </p>
          <h3 className="bmi-result-label" style={{ color: category.color }}>
            {category.label}
          </h3>
        </div>
      </div>
      <p className="bmi-result-advice">{category.advice}</p>
      <div className="bmi-result-bar" style={{ background: category.color }} />
    </div>
  );
}
export default BMIResult;
