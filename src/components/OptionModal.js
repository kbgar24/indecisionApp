import React from 'react';
import Modal from 'react-modal';

// className={{
//   base: 'model',
//   afterOpen: 'modal--after-open',
//   beforeClose: 'modal--before-close'
// }}
// overlayClassName={{
//   base: 'overlay',
//   afterOpen: 'overlay--after-open',
//   beforeClose: 'overlay--before-close'
// }}
// <p>{props.selectedOption}</p>
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS={200}
    className="modal"
  >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button
        onClick={props.handleClearSelectedOption}
        className="button"
      >
        Okay
      </button>
    </Modal>
);

export default OptionModal;
