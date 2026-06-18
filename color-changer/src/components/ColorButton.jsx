function ColorButton ({color , setBgColor}) {
  return(
    <button style={{
      backgroundColor : color,
      color : color === "yellow" ? "black" : "white",
    }}
    onClick={()=>setBgColor(color)}
    >
      {color.toUpperCase()}
    </button>
  );
}

export default ColorButton;