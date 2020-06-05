import React from 'react';
import Navigation from './other_components/Navbar.js';

import {
  Route,
  HashRouter
} from 'react-router-dom';

import HomePage from './hompage-stuff/homePage.js';
import resultsPage from './resultspage-stuff/resultsPage.js'

import './css/bootstrap.css';



function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Route exact path='/' component={HomePage}/>
        <Route path='/results' component={resultsPage}/>
      </div>
    </HashRouter>
  );
}

export default App;
