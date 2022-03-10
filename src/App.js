import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Layout } from "antd";
// import { CreateGame } from './components/CreateGame'

function App() {
  return (
    <>
      <Router>
        <h1 style={{color: "black"}}>Game Hunter</h1>
        {/* <Layout.Header
          style={{
            position: "fixed",
            width: "100%",
            display: "flex",
            zIndex: "10",
          }}
        > */}
        {/* </Layout.Header> */}
        {/* <Routes>
          <Route path="/" exact />
          {/* <Route path="/create-game" element={<CreateGame />} /> 
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
