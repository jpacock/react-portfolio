import React from 'react';


import Toolbar from './components/Toolbar';
import AboutMe from './components/AboutMe';
import ProjectHistory from './components/ProjectHistory';
import Skills from './components/Skills';
import './App.css';

import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'




function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="side-container" >
          <Toolbar />
        </div>
        <div className="main-container">
          <AboutMe />
          <Skills className="skills-container" />
          <ProjectHistory className="skills-projects-container" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
