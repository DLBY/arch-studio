import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <div />
    </main>
  </Router>
);

export default App;
