import React from "react";

// destructured object as parameter
// (would be the same as props.card and props.shuffleCards)
const Card = ({ card, shuffleCards, handleGameLogic }) => {
  const { id, title, url } = card;

  const handleClick = () => {
    handleGameLogic(id);
    shuffleCards();
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-image">
        <img src={url} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;