import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact'

function App() {
  return (
      <div className="App">
        <Navbar />
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </div>
  );
}

export default App;
