import React from "react";
import Header from "./Components/Home/Header";
import Section1 from "./Components/Home/Section1";
import Resume from "./Components/Resume/Resume"
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
function App() {
  return (
    <>
      <div className="h-lvh bg-black">
        <Header />
        <Routes>
          <Route path="/" element = {<Section1 />}/> 
          <Route path="/about" element = { <About />}/>
          <Route path="/resume" element = { <Resume />}/>
          <Route path="/project" element = {<Project />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
