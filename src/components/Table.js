import React from 'react';
import LineItem from './LineItem';

const Table = ({ entries }) => {
  return (
    <div className="table">
      <h3>Result</h3>
      <h3>Score</h3>
      <h3>Location</h3>
      <h3>Opposition</h3>
      <h3>Rating</h3>

      {entries.map((entry) => (
        <LineItem key={entry.id} entry={entry} />
      ))}

    </div>
  );
}

export default Table;
