import { useState, useEffect } from "react";
import "./Clock.css";
function Clock() {
  const [time, setTime] = new useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const second = time.getSeconds();

  const displayHours = hours % 12 || 12;
  const ampm = hours <= 12 ? "AM" : "PM";
  const currentDate = time.toDateString();

  return (
    <div className="container">
      <h1 className="clock">
        {displayHours.toString().padStart(2, "0")} :{" "}
        {minutes.toString().padStart(2, "0")} :{" "}
        {second.toString().padStart(2, "0")} <span>{ampm}</span>
      </h1>
      {currentDate}
    </div>
  );
}

export default Clock;
