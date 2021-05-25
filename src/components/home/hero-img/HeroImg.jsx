import React from 'react';
import LargeBtn from '../../buttons/LargeBtn/LargeBtn';

const HeroImg = () => (
  <div className="hero__img">
    <div className="hero__text">
      <div className="hero__title">
        <h2>
          Project
          <br />
          Paramour
        </h2>
      </div>
      <div className="hero__description">
        <p>
          Project made for an art museum near Southwest London. Project Paramour
          <br />
          is a statement of bold, modern architecture.
        </p>
      </div>
      <div className="hero__btn">
        <LargeBtn text="See our Portfolio" />
      </div>
    </div>
  </div>
);

export default HeroImg;
