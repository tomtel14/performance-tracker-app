import React from 'react';

const Stat = ({ title, result }) => {


  return (
    <div>
      <h3>{title}</h3>
      <div className="stat stat--win">{result}</div>
    </div>
  )
}

export default Stat;
