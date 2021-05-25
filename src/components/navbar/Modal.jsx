import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal__overlay" />
      <div className="modal__container">
        <button type="button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </>,
    document.getElementById('portalMenu'),
  );
};

export default Modal;
