import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Icon from './Icon';

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
      <Icon determineResult={determineResult} />
      <p>{entry.goalsScored} - {entry.goalsConceded}</p>
      <p>{entry.club}</p>
      <p>{entry.opposition}</p>
      <p>{entry.goals}</p>
      <p>{entry.assists}</p>
      <p>{entry.rating}</p>
      <button className="remove" onClick={() => delLineItem(entry.id)}>
        <FaTrash size={18} />
      </button>
    </>
  );
}

export default LineItem;
