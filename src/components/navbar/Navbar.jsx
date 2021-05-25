import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import PageName from '../home/page-name/PageName';
import Modal from './Modal';

const Navbar = () => {
  // utiliser state pour onClick ajouter active pour effet focus
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="navigation">
        <PageName />
        <Link to="/home">
          <img src={Logo} alt="Arch logo" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          id="menu-btn"
          className="menu-btn header__menu-btn"
          title="hamburger menu"
          type="button"
        >
          <span aria-hidden="true" className="menu-btn__bar menu-btn__bar--1" />
          <span aria-hidden="true" className="menu-btn__bar menu-btn__bar--2" />
          <span aria-hidden="true" className="menu-btn__bar menu-btn__bar--3" />
        </button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)} />

        <ul className="navbar__links">
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
    </nav>
  );
};
export default Navbar;
