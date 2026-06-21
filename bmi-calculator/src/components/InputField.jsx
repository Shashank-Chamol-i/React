import "./InputField.css";
function InputField({label , icon , value , onChange, placeholder , unitLabel , min = 0}){
  return (
    <div className="input-field">
      <label  className="input-field-label">
        <span>{icon}</span>{label}
      </label>
      <div className="input-field-wrapper">
        <input type="number" 
        className="input-field-control"
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
        step="0.1"
        />
        {unitLabel && (
          <span className="input-field-unit">{unitLabel}</span>
        )}
      </div>
    </div>
  );
}

export default InputField;