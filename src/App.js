import React from "react";
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import { HashRouter,Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} /> 
        <Route path="/about" exact={true} element={<About />} />  
        <Route path="/movie-detail" exact={true} element={<Detail />} />  
      </Routes>
    </HashRouter>
  );
}

export default App;