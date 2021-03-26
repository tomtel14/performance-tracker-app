import React from 'react';

const Form = ({ entry, handleStringChange, handleNumChange, handleSubmit }) => {


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="opposition">Opposition</label>
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
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          className="form-control"
          placeholder="Enter the location"
          required
          value={entry.location}
          onChange={handleStringChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="goals-scored">Goals Scored</label>
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
        <label htmlFor="goals-conceded">Goals Conceded</label>
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
        <label htmlFor="player-rating">Rate your performance</label>
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
