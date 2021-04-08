import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const LineItem = ({ entry, delLineItem }) => {

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
      <p>{entry.club}</p>
      <p>{entry.opposition}</p>
      <p>{entry.goals}</p>
      <p>{entry.assists}</p>
      <p>{entry.rating}</p>
      <button className="remove" onClick={() => delLineItem(entry.id)}>
        <FaTimesCircle />
      </button>
    </>
  );
}

export default LineItem;
