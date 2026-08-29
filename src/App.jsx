import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { BookshelfPage } from "./pages/BookshelfPage";
import { BlogsPage } from "./pages/BlogsPage";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToggle } from "./components/Theme/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
