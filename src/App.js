import React, { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import Add from './components/Add';
import Table from './components/Table';
import ClubSelection from './components/ClubSelection';
import Stats from './components/Stats';
import { data } from './data';

function App() {

  const [entry, setEntry] = useState({ club: '', opposition: '', goalsScored: 0, goalsConceded: 0, goals: 0, assists: 0, rating: 0 });
  const [entries, setEntries] = useState(data); // change to empty array for blank slate
  const [showModal, setShowModal] = useState(false);
  const [filterClub, setFilterClub] = useState('All');
  const [displayedEntries, setDisplayedEntries] = useState(entries);
  const [desktopMode, setDesktopMode] = useState(false);

  const showText = () => {
    if (window.innerWidth > 800) {
      setDesktopMode(true);
    } else {
      setDesktopMode(false)
    }
  }

  useEffect(() => {
    showText();
    window.addEventListener('resize', showText)
    return () => {
      window.removeEventListener('resize', showText)
    }
  }, [])

  useEffect(() => {
    let filteredEntries = filterClub === 'All' ? entries : [...entries.filter(entry => entry.club === filterClub)];
    setDisplayedEntries(filteredEntries);
  }, [filterClub, entries])

  const handleClubChange = (e) => {
    let club = e.target.value;
    setFilterClub(club);
  }

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
    setEntry({ club: '', opposition: '', goals: 0, assists: 0, goalsScored: 0, goalsConceded: 0, rating: 0 })
    closeModal();
  }

  const closeModal = () => {
    setShowModal(false);
    setEntry({ club: '', opposition: '', goals: 0, assists: 0, goalsScored: 0, goalsConceded: 0, rating: 0 });
  }

  const openModal = () => {
    setShowModal(true);
  }

  const delLineItem = (id) => {
    let answer = window.confirm('Are you sure you want to delete this line item?');
    if (answer) {
      setEntries([...entries.filter(entry => entry.id !== id)])
    }
  }


  return (
    <div className="app">
      <div className="app-cont">
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
          <Stats entries={displayedEntries} />
          <ClubSelection handleClubChange={handleClubChange} filterClub={filterClub} />
          <Table entries={displayedEntries} delLineItem={delLineItem} desktopMode={desktopMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
