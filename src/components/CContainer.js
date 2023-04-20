import React, { useState, useEffect} from "react";
import Card from "./Card";

const CContainer = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
            .then((response) => response.json())
            .then((data) => {
                setCards(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="row">
                    {cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CContainer;