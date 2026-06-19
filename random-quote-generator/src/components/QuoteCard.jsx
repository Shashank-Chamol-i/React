function QuoteCard({quote}){
  return(
    <div className="quote-card">

    <h2>"{quote.text}"</h2>

    <p>-{quote.author}</p>

  </div>
  );
}
export default QuoteCard;