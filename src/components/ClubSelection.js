import React from 'react';

const ClubSelection = ({ handleClubChange, filterClub }) => {
  return (
    <div className="club-selection">
      <label htmlFor="clubs"><h4>Select club to view data:</h4>
        <select
          value={filterClub}
          onChange={handleClubChange}
        >
          <option value="All">All</option>
          <option value="APFC">APFC - Alexandra Park FC</option>
          <option value="MNF">MNF - Monday Night Football</option>
          <option value="TNF">TNF - Thursday Night Football</option>
        </select>
      </label>
    </div>
  )
}

export default ClubSelection;
