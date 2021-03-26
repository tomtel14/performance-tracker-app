import React from 'react';

const LineItem = ({ entry }) => {

  const determineResult = () => {
    if (entry.goalsScored > entry.goalsConceded) {
      return 'W';
    } else if (entry.goalsScored < entry.goalsConceded) {
      return 'L';
    } else {
      return 'D';
    }
  }

  return (
    <>
      <p>{determineResult()}</p>
      <p>{entry.goalsScored} - {entry.goalsConceded}</p>
      <p>{entry.location}</p>
      <p>{entry.opposition}</p>
      <p>{entry.rating}</p>
    </>
  );
}

export default LineItem;
