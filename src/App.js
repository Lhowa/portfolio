import React from 'react';
import About from './components/about';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
  return (
      <div className="App">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
  );
}

export default App;
