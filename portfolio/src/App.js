import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Bio from './components/Bio.js';
import Contact from './components/Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="center-scroll">
          <Bio />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
