function TextInput({text , setText}) {
  return(
    <textarea
    value={text}
    onChange={(e)=>setText(e.target.value)}
    placeholder="Start Typing..."
    rows={8}
    />
  );
}

export default TextInput;