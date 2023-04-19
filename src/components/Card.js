import React, { useState } from "react";
// import "./Card.css";

// destructured object as parameter
// (would be the same as props.title and props.image)
const Card = ({ title, image }) => {
    
    const handleClick = () => {
        console.log("card clicked");
    };

    return (
        <div className="card" onClick={handleClick}>
        <div className="card-image">
            <img src={image} alt={title} />
        </div>
        <div className="card-content">
            <h2>{title}</h2>
        </div>
        </div>
    );
}

export default Card;