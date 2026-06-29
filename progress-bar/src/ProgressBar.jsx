import { useState } from "react";
import "./ProgressBar.css";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const increase = () => setProgress((value) => Math.min(100, value + 10));
  const decrease = () => setProgress((value) => Math.max(0, value - 10));

  const barClass =
    progress === 100
      ? "bar-fill bar-fill-green"
      : progress > 70
        ? "bar-fill bar-fill-blue"
        : progress > 30
          ? "bar-fill bar-fill-amber"
          : "bar-fill bar-fill-red";

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">Progress Bar</h2>
        <div className="bar-track">
          <div className={barClass} style={{ width: `${progress}%` }} />
        </div>
        <p className="percentage">{progress}%</p>
        <div className="buttons">
          <button
            type="button"
            className="btn btn-decrease"
            onClick={decrease}
            disabled={progress === 0}
          >
            − Decrease
          </button>
          <button
            type="button"
            className="btn btn-increase"
            onClick={increase}
            disabled={progress === 100}
          >
            + Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
