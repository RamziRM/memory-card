import React, { useState, useEffect } from "react";
import Card from "./Card";
import { images } from "./imageLoader";

const CContainer = ({ handleGameLogic }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Instead of fetching images from an API, use the imported images
    const data = images.map((src, i) => ({
      id: i + 1,
      title: `Image ${i + 1}`,
      url: src,
    }));
    // Shuffle the cards/photos
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    setCards(data);
    setLoading(false);
  }, []);

  const shuffleCards = () => {
    const shuffledCards = cards.sort(() => Math.random() - 0.5);
    setCards([...shuffledCards]);
  };

  return (
    <div className="">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 bg-gray-300">
          {cards.map((card, i) => (
            <Card
              key={card.id}
              card={card}
              handleGameLogic={handleGameLogic}
              shuffleCards={shuffleCards}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CContainer;
