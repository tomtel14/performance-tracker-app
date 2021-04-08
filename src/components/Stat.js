import React from 'react';

const Stat = ({ title, result }) => {


  return (
    <div className="stat-item">
      <h5>{title}</h5>
      <div className="stat">
        <p>{result}</p>
      </div>
    </div>
  )
}

export default Stat;
