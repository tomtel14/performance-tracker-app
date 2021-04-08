import React from 'react';

const ClubSelection = ({ handleClubChange, filterClub }) => {
  return (
    <div className="club-selection">
      <label htmlFor="clubs"><h3>Select Club:</h3>
        <select
          value={filterClub}
          onChange={handleClubChange}
        >
          <option value="All">All</option>
          <option value="APFC">APFC</option>
          <option value="MNF">MNF</option>
          <option value="TNF">TNF</option>
        </select>
      </label>
    </div>
  )
}

export default ClubSelection;
