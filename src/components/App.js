import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Navebar from "./Navebar";

const App = () => {
  return (
    <div>
      <Navebar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Service" element={<Service />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
