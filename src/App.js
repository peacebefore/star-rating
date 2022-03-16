import React, { useState } from "react";
import StarRating from "./StarRating";
import "./App.css";

function App() {
  const [rating, setRating] = useState(null);

  return (
    <div className="App">
      <StarRating rating={rating} setRating={setRating} />
    </div>
  );
}

export default App;
