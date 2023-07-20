import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import NavbarComponent from "./components/Navbar";
import Links from "./components/Links";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/about" element={<About />} />

    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      {/*
      <Home />
      <Links /> */}
      <NavbarComponent />
      <About />
    </div>
  );
}

export default App;
