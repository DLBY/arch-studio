import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Modal = ({ open }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal__overlay" />
      <div className="modal__container">
        <ul className="modalMenu__links">
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li />
        </ul>
      </div>
    </>,
    document.getElementById('portalMenu'),
  );
};

export default Modal;
