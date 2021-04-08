import React from 'react';
import LineItem from './LineItem';


const Table = ({ entries, delLineItem }) => {

  return (
    <div className="table">
      <h3>Res.</h3>
      <h3>Score</h3>
      <h3>Club</h3>
      <h3>Oppo.</h3>
      <h3>G</h3>
      <h3>A</h3>
      <h3>Rtg.</h3>
      <h3 className="del-col">Del</h3>

      {entries.map((entry) => (
        <LineItem key={entry.id} entry={entry} delLineItem={delLineItem} />
      ))}

    </div>
  );
}

export default Table;
