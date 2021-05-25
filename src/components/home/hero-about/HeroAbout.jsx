import React from 'react';
import LargeBtn2 from '../../buttons/LargeBtn2/LargeBtn2';

const HeroAbout = () => (
  <div className="hero__img--about">
    <div className="hero__text">
      <div className="hero__title">
        <h2>
          Small team
          <br />
          big ideas
        </h2>
      </div>
      <div className="hero__btn">
        <LargeBtn2 text="About Us" />
      </div>
    </div>
  </div>
);

export default HeroAbout;
