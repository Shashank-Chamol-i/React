function ButtonGroup({unit ,  setUnit}) {
  return(
    <div className="buttons">
      <button
      onClick={()=>setUnit("C")}
      className={unit=== "C" ? "active" : ""}
      >
        Celcius
      </button>

      <button
      onClick={()=>setUnit("F")}
      className={unit === "F" ? "active" : ""}
      >
        Fahrenheit
      </button>
    </div>
  );
}

export default ButtonGroup;