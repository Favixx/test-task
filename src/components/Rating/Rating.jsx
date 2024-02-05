import "./Rating.css";

const Rating = () => {
  return (
    <>
      <div className="rating-wrapper">
        <div className="circle-base">
          <div className="circle-content">
            <p>6.4</p>
          </div>
        </div>
        <div>
          <ul className="rating-text-list">
            <li className="rating-heading">
              <p>Players</p>
            </li>
            <li className="number-of-votes">
              <p>12 votes</p>
            </li>
            <li className="rating">
              <p>Your rating:</p>
              <span>5.2</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Rating;
