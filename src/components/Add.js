import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Modal from './Modal';

const Add = ({ entry, handleStringChange, handleNumChange, handleSubmit, closeModal, openModal, showModal }) => {

  return (
    <>
      <div className="button-cont">
        <img className="bg-image" src="images/bg-goalkeeper.jpg" alt="goalkeeper" />
        <div className="add-cont">
          <h4>Add Football Match Data</h4>
          <button className="add">
            <FaPlusCircle onClick={openModal} size={60} />
          </button>
        </div>
      </div>
      {showModal ? <Modal closeModal={closeModal} entry={entry} handleStringChange={handleStringChange} handleNumChange={handleNumChange} handleSubmit={handleSubmit} /> : null}
    </>
  );
}

export default Add;
