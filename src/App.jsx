import React from 'react';
import { SmoothScrollHero } from './components/SmoothScrollHero';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <SmoothScrollHero />
    </ThemeProvider>
  );
}

export default App;
