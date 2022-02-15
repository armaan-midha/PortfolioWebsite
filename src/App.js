import React from "react";
import './App.css';
import "./Fonts.css";
import ResumeContainer from "./Components/resume/ResumeContainer.js";
import PortfolioWrapper from "./Components/portfolio/PortfolioWrapper";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<PortfolioWrapper />}/>
        <Route path="/resume" element={<ResumeContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

