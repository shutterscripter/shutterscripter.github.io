import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToggle } from "./components/Theme/ThemeToggle";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
