import React from 'react';
import Featured from '../../components/featured/Featured';
import HeroAbout from '../../components/hero-about/HeroAbout';
import HeroImg from '../../components/hero-img/HeroImg';
import WelcomeText from '../../components/welcome-text/WelcomeText';

const Home = () => (
  <>
    <HeroImg />

    <WelcomeText />

    <HeroAbout />
    <Featured />
  </>
);

export default Home;
