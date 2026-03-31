import React from "react";
import { Home } from "./components/Home/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToggle } from "./components/Theme/ThemeToggle";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
