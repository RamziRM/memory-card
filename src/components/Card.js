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
    <div className="shadow-2xl p-7 bg-gray-600 border-red border-4" onClick={handleClick}>
      <div className="">
        <img className="rounded-full h-50 object-cover" src={url} alt={title} />
      </div>
      {/* <div className="card-content">
        <h2>{title}</h2>
      </div> */}
    </div>
  );
};

export default Card;