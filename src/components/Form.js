import React from 'react';

const Form = ({ entry, handleStringChange, handleNumChange, handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="club">Club Playing For:</label>
        <input
          type="text"
          name="club"
          className="form-control"
          placeholder="Enter the name of the club"
          required
          value={entry.club}
          onChange={handleStringChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="opposition">Opposition:</label>
        <input
          type="text"
          name="opposition"
          className="form-control"
          placeholder="Enter the name of opposition"
          required
          value={entry.opposition}
          onChange={handleStringChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="goals-scored">Team Goals Scored:</label>
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
        <label htmlFor="goals-conceded">Team Goals Conceded:</label>
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
        <label htmlFor="goals">Indivdual Goals Scored:</label>
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
        <label htmlFor="assists">Individual Assists:</label>
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
        <label htmlFor="player-rating">Performance Rating:</label>
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
