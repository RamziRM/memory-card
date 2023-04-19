import React from "react";

const Header = () => {
    return (
        <div className="header-cont">
            <div className="header-logo">
                <h1>CARD Memory game</h1>
            </div>
            <div className="score">
                <h2>Current Score: 0</h2>
            </div>
            <div className="high-score">"
                <h2>High Score: 0</h2>
            </div>
        </div>
    );
}

export default Header;