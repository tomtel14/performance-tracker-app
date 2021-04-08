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

  const calculateTotalGoals = () => {
    let sumGoals = 0;
    if (entries.length === 0) {
      return null;
    } else {
      for (let index = 0; index < entries.length; index++) {
        sumGoals += entries[index].goals;
      }
      return sumGoals;
    }
  }

  const calculateGoalsPerGame = () => {
    let goals = calculateTotalGoals();
    if (entries.length === 0) {
      return null;
    } else {
      return (goals / entries.length).toFixed(2)
    }

  }

  const calculateTotalAssists = () => {
    let sumAssists = 0;
    if (entries.length === 0) {
      return null;
    } else {
      for (let index = 0; index < entries.length; index++) {
        sumAssists += entries[index].assists;
      }
      return sumAssists;
    }
  }

  const calculateAssistsPerGame = () => {
    let assists = calculateTotalAssists();
    if (entries.length === 0) {
      return null;
    } else {
      return (assists / entries.length).toFixed(2)
    }
  }



  return (
    <div className="stats-cont">
      <div className="stats-cont-grid">
        <Stat title="Win Percent" result={calculateWinPercentage()} />
        <Stat title="Total Goals" result={calculateTotalGoals()} />
        <Stat title="Total Assists" result={calculateTotalAssists()} />
        <Stat title="Avg. Rating" result={calculateAvgRating()} />
        <Stat title="Goals/Game" result={calculateGoalsPerGame()} />
        <Stat title="Assists/Game" result={calculateAssistsPerGame()} />
      </div>
    </div>
  )
}

export default Stats;
