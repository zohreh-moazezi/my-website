import React from "react";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Samples from "./sections/Samples";
import CV from "./sections/CV";
import Contact from "./sections/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { PDFViewer } from "@react-pdf/renderer";
import "./App.css";

const App = () => (
  <>
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Samples />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  </>
);

export default App;
