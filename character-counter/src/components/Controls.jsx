function Controls({text, setText}) {
  const uppercase =()=>{
    setText(text.toUpperCase())
  }
  const lowercase =()=>{
    setText(text.toLowerCase())
  }
  const clear =()=>{
    setText("")
  }
  const copy =()=>{
    setText(navigator.clipboard.writeText(text))
  }

  return(
    <div className="buttons">

      <button onClick={uppercase}>Uppercase</button>
      <button onClick={lowercase}>Lowercase</button>
      <button onClick={clear}>Clear</button>
      <button onClick={copy}>Copy</button>
    </div>
  );
}
export default Controls;