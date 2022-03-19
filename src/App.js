import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateGame from "./components/CreateGame";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateGame" element={<CreateGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
