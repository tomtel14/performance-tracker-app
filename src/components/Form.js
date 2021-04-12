import React from 'react';

const Form = ({ entry, handleStringChange, handleNumChange, handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="club">My Team:</label>
        <input
          type="text"
          maxLength="4"
          name="club"
          className="form-control"
          placeholder="Enter your team initials"
          required
          value={entry.club}
          onChange={handleStringChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="opposition">Opposition Team:</label>
        <input
          type="text"
          maxLength="4"
          name="opposition"
          className="form-control"
          placeholder="Enter opposition initials"
          required
          value={entry.opposition}
          onChange={handleStringChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="goals-scored">My Team Goals Scored:</label>
        <input
          type="number"
          name="goalsScored"
          min="0"
          max="10"
          className="form-control form-control--small"
          required
          value={entry.goalsScored}
          onChange={handleNumChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="goals-conceded">My Team Goals Conceded:</label>
        <input
          type="number"
          name="goalsConceded"
          min="0"
          max="10"
          className="form-control form-control--small"
          required
          value={entry.goalsConceded}
          onChange={handleNumChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="goals">Number of Goals I Scored:</label>
        <input
          type="number"
          name="goals"
          min="0"
          max="10"
          className="form-control form-control--small"
          required
          value={entry.goals}
          onChange={handleNumChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="assists">Number of Goals I Assisted:</label>
        <input
          type="number"
          name="assists"
          min="0"
          max="10"
          className="form-control form-control--small"
          required
          value={entry.assists}
          onChange={handleNumChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="player-rating">My Performance Rating (0-10):</label>
        <input
          type="number"
          name="rating"
          min="0"
          max="10"
          className="form-control form-control--small"
          required
          value={entry.rating}
          onChange={handleNumChange}
        />
      </div>
      <div className="form-group">
        <button className="submit-btn" type="submit">Submit</button>
      </div>

    </form>
  )
}

export default Form;
