import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Form from './Form';

const Modal = ({ closeModal, entry, handleStringChange, handleNumChange, handleSubmit }) => {
  return (
    <div className="modal-bg">
      <div className="form-cont">
        <div className="close-btn-cont">
          <FaTimes onClick={closeModal} size={30} className="close" />
        </div>
        <Form entry={entry} handleStringChange={handleStringChange} handleNumChange={handleNumChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default Modal;
