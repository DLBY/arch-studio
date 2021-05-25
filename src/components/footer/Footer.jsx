import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import LargeBtn from '../buttons/LargeBtn/LargeBtn';

const Footer = () => (
  <footer>
    <div className="footer__logo">
      <img src={Logo} alt="Arch Logo" height="24px" width="57.7" />
    </div>
    <ul className="footer__links">
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <div className="footer__btn">
      <LargeBtn text="See Our Portfolio" />
    </div>
  </footer>
);

export default Footer;
