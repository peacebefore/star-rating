import React from "react";
import { ReactComponent as Star } from "./images/star.svg";

const StarRating = ({ rating, setRating }) => {
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
                value={rating}
                color="grayStar"
                onChange={() => {
                  setRating(ratingValue);
                }}
              />
              <Star
                style={{ color: ratingValue <= rating ? "#0D9488" : "#e4e5e9" }}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
