import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={ !!props.selectedOption }
    contentLabel="Selected Option"
    onRequestClose={ props.handleClearSelectedOption }
  >
    <h3>Selected Text</h3>
    <p>{ props.selectedOption }</p>
    <button onClick={ props.handleClearSelectedOption }>Okay</button>

  </Modal>
);

export default OptionModal;
