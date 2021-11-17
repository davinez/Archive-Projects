import React from 'react';

const ScoreBoard = (props) => {
  return (
    <div className="scoreBoard">
      <p>Highest Score: {props.highestScore}</p>
      <p>Score: {props.score}</p>
    </div>
  );
};

export default ScoreBoard;
