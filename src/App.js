import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";
import Services from "./Pages/Sevices";
import Contactus from "./Pages/Contactus";
import Projects from "./Pages/Projects";

function App() {
  return (
 
      <Routes>
        <Route
          path="/" element={
            <div>
              <Header />
              <Home />
              <Aboutme />
              <Services />
              <Projects />
              <Contactus />
            </div>
          }
        />
      </Routes>
  );
}

export default App;
