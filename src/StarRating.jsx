import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div role="group">
      <div id="rating-field" className="star-ratings">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label>
              <input
                type="radio"
                key={ratingValue}
                name={"${ratingValue}-stars"}
                value={ratingValue}
                onChange={() => setRating(ratingValue)}
              />
              <FaStar
                className="star"
                size="auto"
                color={ratingValue <= (hover || rating) ? "#0D9488" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
