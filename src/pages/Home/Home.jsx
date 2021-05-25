import React from 'react';
import Featured from '../../components/home/featured/Featured';
import HeroAbout from '../../components/home/hero-about/HeroAbout';
import HeroImg from '../../components/home/hero-img/HeroImg';
import WelcomeText from '../../components/home/welcome-text/WelcomeText';

const Home = () => (
  <>
    <HeroImg />

    <WelcomeText />

    <HeroAbout />
    <Featured />
  </>
);

export default Home;
