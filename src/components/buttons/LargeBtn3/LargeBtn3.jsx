import React from 'react';
import arrow from '../../../assets/icons/icon-arrow.svg';

const LargeBtn3 = ({ text }) => (
  <button className="large-btn large-btn3" type="button">
    <p>{text}</p>
    <img src={arrow} alt="arrow" className="arrow" />
  </button>
);

export default LargeBtn3;
