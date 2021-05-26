import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ open, children }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal__overlay" />
      <div className="modal__container">{children}</div>
    </>,
    document.getElementById('portalMenu'),
  );
};

export default Modal;
