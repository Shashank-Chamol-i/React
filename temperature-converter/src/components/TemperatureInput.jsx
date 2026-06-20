function TemperatureInput({temperature,setTemperature}){
  return(
    <input 
    type="number"
    placeholder="Enter Temperature"
    value={temperature}
    onChange={(e)=>setTemperature(e.target.value)}
    />
  );
}
export default TemperatureInput;