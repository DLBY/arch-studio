import React from 'react';
import arrow from '../../../assets/icons/icon-arrow.svg';

const LargeBtn = ({ text }) => (
  <button className="large-btn" type="button">
    {text}
    <img src={arrow} alt="arrow" className="arrow" />
  </button>
);

export default LargeBtn;
