import React from 'react';

const Icon = ({ determineResult }) => {

  return (
    <p className={determineResult() === 'W' ? 'icon icon--green' : determineResult() === 'L' ? 'icon icon--red' : 'icon icon--black'}>{determineResult()}</p>
  )
}

export default Icon;
