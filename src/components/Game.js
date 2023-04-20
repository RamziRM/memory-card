import React, { useState} from "react";
import CContainer from "./CContainer";
import Header from "./Header";

const Game = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const handleScore = () => {
        setScore((prevScore) => prevScore + 1);
    };

    const handleHighScore = () => {
        if (score > highScore) {
            setHighScore(score);
        }
    };

    const reset = () => {
        setScore(0);
        setClickedCards([]);
    };

    const handleCardClick = (id) => {
        setClickedCards((prevClickedCards) => [...prevClickedCards, id]);
    };

    const handleGameLogic = (id) => {
        if (clickedCards.includes(id)) {
            handleHighScore();
            reset();
        } else {
            handleCardClick(id);
            handleScore();
        }
    };

    return (
        <div>
            <Header score={score} highScore={highScore} />
            <div className="container">
                <CContainer handleGameLogic={handleGameLogic}/>
            </div>
        </div>
    );
}

export default Game;