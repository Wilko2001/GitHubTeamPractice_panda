import React from "react";
import "../styles/app.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Properties from "./Properties";
import AddProperties from "./AddProperties";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/add" element={<AddProperties />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
