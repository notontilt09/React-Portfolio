import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Bio from './components/Bio.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bio />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
