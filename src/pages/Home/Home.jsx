import React from 'react';
import Featured from '../../components/featured/Featured';
import HeroAbout from '../../components/hero-about/HeroAbout';
import HeroImg from '../../components/hero-img/HeroImg';
import WelcomeText from '../../components/welcome-text/WelcomeText';

const Home = () => (
  <section>
    <div>
      <HeroImg />
    </div>
    <div>
      <WelcomeText />
    </div>
    <div>
      <HeroAbout />
    </div>
    <div>
      <Featured />
    </div>
  </section>
);

export default Home;
