function Statistics({text}){
  const character = text.length;
  const words = text.trim()==="" ? 0 : text.trim().split("/\s+/").length;
  const sentences = text.trim()==="" ? 0 : text.trim().split("/[.!?]+/").filter(Boolean).length;
  const paragraphs = text.trim()===""? 0 : text.trim().split("/\n/").filter(Boolean).length;

  return(
    <div>
      <h3>Statistics</h3>
      <p>Characters : {character}</p>
      <p>Words : {words}</p>
      <p>Sentences : {sentences}</p>
      <p>Paragraphs : {paragraphs}</p>
    </div>
  );
}
export default Statistics;