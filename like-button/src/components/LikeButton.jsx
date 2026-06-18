import "./LikeButton.css";
import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="container">
      <button className="heart-btn" onClick={handleLike}>
        {liked ? (
          <span className="liked">❤️</span>
        ) : (
          <span className="not-liked">🤍</span>
        )}
      </button>
      <h2>{liked ? "Liked" : "Like the Post"}</h2>
    </div>
  );
}

export default LikeButton;
