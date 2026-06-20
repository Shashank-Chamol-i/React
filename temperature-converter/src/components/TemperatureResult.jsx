function TemperaturResult({result}) {
  return (
    <div className="result">
      {result && <h2>{result}</h2> }
    </div>
  );
}
export default TemperaturResult;