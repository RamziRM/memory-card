import React from "react";

const Header = ({score, highScore}) => {
    return (
        <div className="flex justify-between font-mono text-4xl p-3 px-5 bg-blue-200">
            <div className="">
                <h1>Card Memory game</h1>
            </div>
            <div className="score">
                <h2>Current Score: {score}</h2>
            </div>
            <div className="high-score">
                <h2>High Score: {highScore}</h2>
            </div>
        </div>
    );
}

export default Header;