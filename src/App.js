import React from 'react';
import Navigation from './other_components/Navbar.js';
import HomePage from './hompage-stuff/homePage.js';
import resultsPage from './resultspage-stuff/resultsPage.js'
import './App.css';
import './css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;
