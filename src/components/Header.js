import React from "react";

const Header = ({ score, highScore }) => {
  return (
    <div className="fixed w-full flex justify-between font-mono text-4xl p-3 px-5 bg-blue-900 text-white items-center">
      <div className="hidden text-orange-600 text-2xl md:inline">
        <h1>Memory?</h1>
      </div>
      <div className="text-2xl md:text-3xl">
        <h2>Current Score: {score}</h2>
      </div>
      <div className="text-xl md:text-3xl">
        <h2>High Score: {highScore}</h2>
      </div>
    </div>
  );
};

export default Header;
