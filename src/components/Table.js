import React from 'react';
import LineItem from './LineItem';


const Table = ({ entries, delLineItem, desktopMode }) => {

  return (
    <div className="table">
      <h3>{desktopMode ? 'Result' : 'Res.'}</h3>
      <h3>Score</h3>
      <h3>Club</h3>
      <h3>{desktopMode ? 'Opposition' : 'Oppo.'}</h3>
      <h3>{desktopMode ? 'Goals' : 'G'}</h3>
      <h3>{desktopMode ? 'Assists' : 'A'}</h3>
      <h3>{desktopMode ? 'Rating' : 'Rtg.'}</h3>
      <h3 className="del-col">Del</h3>

      {entries.map((entry) => (
        <LineItem key={entry.id} entry={entry} delLineItem={delLineItem} />
      ))}

    </div>
  );
}

export default Table;
