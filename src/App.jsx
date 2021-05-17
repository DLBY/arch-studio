import React from 'react';
import LargeBtn from './components/buttons/LargeBtn/LargeBtn';
import MediumBtn from './components/buttons/MediumBtn/MediumBtn';
import SmallBtn from './components/buttons/SmallBtn/SmallBtn';

const App = () => (
  <div>
    <p>Hello its App</p>
    <div className="btn-container">
      <LargeBtn text="Button 1" />
      <MediumBtn />
      <div className="btn-slider">
        <SmallBtn number="01" />
        <SmallBtn number="02" />
      </div>
    </div>
  </div>
);

export default App;
