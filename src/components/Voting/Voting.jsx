import React from "react";
import "./Voting.css";
import useLocalStorage from "../../hooks/useLocalStorage";

const Voting = () => {
  const [selectedRating, setSelectedRating] = useLocalStorage(
    "selectedRating",
    0
  );

  const handleRating = (rating) => {
    setSelectedRating((prevRating) => (prevRating === rating ? 0 : rating));
  };

  return (
    <>
      <div className="voting">
        <div className="note">Note</div>
        {[...Array(10).keys()].map((number) => {
          const isHighlighted = number + 1 <= selectedRating;
          return (
            <div
              key={number + 1}
              className={`rating-item ${isHighlighted ? "" : "gray"}`}
              onClick={() => handleRating(number + 1)}
            >
              {number + 1}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Voting;
