import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Button Counter</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button className="minus" onClick={decrement}>
          -
        </button>
        <button className="reset" onClick={reset}>
          RESET
        </button>
        <button className="plus" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
