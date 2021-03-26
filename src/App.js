import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Add from './components/Add';
import Table from './components/Table';
import Stats from './components/Stats';
import { data } from './data';

function App() {

  const [entry, setEntry] = useState({ opposition: '', location: '', goalsScored: 0, goalsConceded: 0, rating: 0 });
  const [entries, setEntries] = useState(data); // change to empty array for blank slate
  const [showModal, setShowModal] = useState(false);

  const handleStringChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEntry({ ...entry, [name]: value })
  }

  const handleNumChange = (e) => {
    const name = e.target.name;
    const value = parseInt(e.target.value);
    setEntry({ ...entry, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { ...entry, id: new Date().getTime() }
    setEntries([...entries, newEntry]);
    setEntry({ opposition: '', location: '', goalsScored: 0, goalsConceded: 0, rating: 0 })
    closeModal();
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true);
  }


  return (
    <div className="app">
      <Title />
      <Add
        entry={entry}
        handleStringChange={handleStringChange}
        handleNumChange={handleNumChange}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
        openModal={openModal}
        showModal={showModal}
      />
      <div className="table-stats-cont">
        <Table entries={entries} />
        <Stats entries={entries} />
      </div>
    </div>
  );
}

export default App;
