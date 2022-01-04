import React from 'react';
import Navbar from '../components/Navbar';
import About from '../pages/About';
import Salon from '../pages/Salon';
import Pokemon from '../pages/Pokemon';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Salon />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/salon/:id">
            <Pokemon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
