import React from "react";
import NavbarComponent from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Links from "./components/Links";
import About from "./components/About";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Home />
      <Links />
      <Projects />
      <Experience />
      <About />

      <Contact />
    </div>
  );
}

export default App;
