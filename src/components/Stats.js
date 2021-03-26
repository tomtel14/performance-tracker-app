import React from 'react';
import Stat from './Stat';

const Stats = ({ entries }) => {

  const countsWins = () => {
    let numOfWins = 0;
    for (let index = 0; index < entries.length; index++) {
      if (entries[index].goalsScored > entries[index].goalsConceded) {
        numOfWins++;
      }
    }
    return numOfWins;
  }


  const calculateWinPercentage = () => {
    let wins = countsWins();
    if (entries.length === 0) {
      return null;
    } else {
      let winPercentage = `${Math.round((wins / entries.length * 100))}%`;
      return winPercentage;
    }
  }

  const calculateAvgRating = () => {
    const sumOfRatings = entries.reduce((total, entry) => {
      return total + entry.rating;
    }, 0)
    if (entries.length === 0) {
      return null;
    } else {
      let avgRating = (sumOfRatings / entries.length).toFixed(1);
      return avgRating;
    }
  }


  return (
    <div className="stats-cont">
      <Stat title="Win Percentage" result={calculateWinPercentage()} />
      <Stat title="Avg. Rating" result={calculateAvgRating()} />
    </div>
  )
}

export default Stats;
