function ProgressBar({ text }) {
  const limit = 200;

  return (
    <div>
      <progress value={text.length} max={limit} />

      <p>
        {limit - text.length + " "}
        character remaining
      </p>
    </div>
  );
}
export default ProgressBar;
