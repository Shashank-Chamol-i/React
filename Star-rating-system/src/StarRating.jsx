import React, { useState } from "react";
import "./StarRating.css";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const labels = {
    0: "",
    1: "😞 Terrible",
    2: "😕 Bad",
    3: "😐 Okay",
    4: "😊 Good",
    5: "🤩 Excellent!",
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">Star Rating</h2>

        <div className="stars">
          {[1, 2, 3, 4, 5].map((i) => {
            const filled = i <= hovered || (hovered === 0 && i <= rating);
            return (
              <button
                key={i}
                className={`star${filled ? " filled" : ""}`}
                onClick={() => setRating(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(0)}
                aria-label={`${i} star${i > 1 ? "s" : ""}`}
              >
                ★
              </button>
            );
          })}
        </div>

        <p className="rating-text">
          {rating === 0 ? "No rating yet" : `Rating: ${rating} / 5`}
        </p>

        <p className="rating-label">{labels[rating]}</p>
      </div>
    </div>
  );
}
